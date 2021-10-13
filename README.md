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

### 🏁 React Final Form Usage

```js
import React from 'react';
import { Form, Field } from 'react-final-form';
import createDecorator from 'final-form-focus-on-first-field';

const focusOnFirstField = createDecorator();
...
<Form
  onSubmit={submit}
  decorators={[ focusOnFirstField ]} // <---------
  validate={validate}
  render={({ handleSubmit }) =>
    <form onSubmit={handleSubmit}>
        
      ... inputs here ...

    </form>
  }
/>
```
