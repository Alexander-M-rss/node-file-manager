const logOperationFailed = () => {
  console.log('\x1b[31m%s\x1b[0m', 'Operation failed');
};

export const logInvalidInput = () => {
  console.log('\x1b[31m%s\x1b[0m', 'Invalid Input');
};

export default logOperationFailed;