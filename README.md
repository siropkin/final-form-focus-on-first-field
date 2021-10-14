# 🏁 Final Form Focus On Fist Field
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
import createFocusOnFistFieldDecorator from './focusOnFistFieldDecorator';

const focusOnFistFieldDecorator = createFocusOnFistFieldDecorator();

const MyForm = () => (
    <Form
        onSubmit={submit}
        decorators={[focusOnFistFieldDecorator]} // <---------
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
import createFocusOnFistFieldDecorator from './focusOnFistFieldDecorator';

const MyForm = ({ focusOnFields }) => {
    const focusOnFistFieldDecorator = useMemo(() => createFocusOnFistFieldDecorator(focusOnFields), []);
    
    return (
        <Form
            onSubmit={submit}
            decorators={[focusOnFistFieldDecorator]} // <---------
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


## API

### `createDecorator: (focusOnFields) => Decorator`

A function that takes a set of field names to focus on and returns a 🏁 Final Form [`Decorator`](https://github.com/final-form/final-form#decorator-form-formapi--unsubscribe).
If `focusOnFields == []` or not set then decorator will try to focus on form registered fields.
If `focusOnFields == false` then decorator will not focus on any fields. 
