export const getMessage = (validationError, field) => {
    if (validationError && validationError[field]) {
        return validationError[field][0]
    }
}