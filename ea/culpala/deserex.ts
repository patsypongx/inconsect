function throwError(errorMsg: string): never {
    throw new Error(errorMsg);
}

// Usage of the throwError function
// This will cause the program to terminate and print the error message
try {
    throwError('This is an error message.');
} catch (error) {
    console.error(error);
}
