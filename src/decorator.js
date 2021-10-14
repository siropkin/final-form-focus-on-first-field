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

const findFirstInput = (inputs, names) => inputs.find((input) => names.includes(input.name));

const createDecorator = (focusOnFields) => (form) => {
    return form.subscribe(
        () => {
            if (focusOnFields === false) {
                return;
            }

            if (!Array.isArray(focusOnFields) || focusOnFields.length === 0) {
                focusOnFields = form.getRegisteredFields();
            }
            const allInputs = getAllInputs();
            const firstInput = findFirstInput(allInputs, focusOnFields);
            if (firstInput) {
                firstInput.focus();
            }
        },
        {},
    );
};

export default createDecorator;
