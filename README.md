# 🏁 Final Form Focus On First Field
[🏁 Final Form](https://github.com/final-form/final-form) "decorator" that will attempt to apply focus to the first field on the form.

---

## Installation

```bash
npm install --save final-form-focus-on-first-field
```

or

```bash
yarn add final-form-focus-on-first-field
```

## Usage

### Simple Usage Example

```js
import React from 'react';
import { Form, Field } from 'react-final-form';
import createFocusOnFirstFieldDecorator from 'final-form-focus-on-first-field';

const focusOnFirstFieldDecorator = createFocusOnFirstFieldDecorator();

const MyForm = () => (
    <Form
        onSubmit={submit}
        decorators={[focusOnFirstFieldDecorator]} // <---------
        validate={validate}
        render={({ handleSubmit }) =>
            <form onSubmit={handleSubmit}>

                ... inputs here ...

            </form>
        }
    />
);
```

### With Dynamic Focusable Fields List

```js
import React, { useMemo } from 'react';
import { Form, Field } from 'react-final-form';
import createFocusOnFirstFieldDecorator from 'final-form-focus-on-first-field';

const MyForm = ({ focusOnFields }) => {
    const focusOnFirstFieldDecorator = useMemo(() => createFocusOnFirstFieldDecorator(focusOnFields), []);
    
    return (
        <Form
            onSubmit={submit}
            decorators={[focusOnFirstFieldDecorator]} // <---------
            validate={validate}
            render={({ handleSubmit }) =>
                <form onSubmit={handleSubmit}>
    
                    ... inputs here ...
    
                </form>
            }
        />
    );
};

...

// Turn off focus on fields
<MyForm focusOnFields={false} />

// Try to focus on field with name `name` or `description`
<MyForm focusOnFields={['name', 'description']} />
```

## Example

### [Focus On First Field](https://codesandbox.io/s/final-form-focus-on-first-field-mmurt?file=/index.js)

Demonstrates how 🏁 Final Form Focus On First Field works with [🏁 React Final Form](https://github.com/final-form/react-final-form#-react-final-form).


## API

### `createDecorator: (focusOnFields) => Decorator`

A function that takes a set of field names to focus on and returns a 🏁 Final Form [`Decorator`](https://github.com/final-form/final-form#decorator-form-formapi--unsubscribe).
If `focusOnFields == []` or not set then decorator will try to focus on form registered fields.
If `focusOnFields == false` then decorator will not focus on any fields. 
