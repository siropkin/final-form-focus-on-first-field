const isFocusableInput = (wtf) => !!(wtf && typeof wtf.focus === 'function' && wtf.type !== 'hidden');

const getAllInputs = () => {
  if (typeof document === 'undefined') {
    return [];
  }
  return Array.prototype.slice
    .call(document.forms)
    .reduce(
      (accumulator, form) => accumulator.concat(
        Array.prototype.slice.call(form).filter(isFocusableInput),
      ),
      [],
    );
};

const findFirstInput = (inputs, registeredFields) => inputs.find((input) => registeredFields.includes(input.name));

const createDecorator = () => (form) => {
  return form.subscribe(
    () => {
      const registeredFields = form.getRegisteredFields();
      const allInputs = getAllInputs();
      const firstInput = findFirstInput(allInputs, registeredFields);
      if (firstInput) {
        firstInput.focus();
      }
    },
    {},
  );
};

export default createDecorator;
