export const validateUserLoginForm = (values) => {
    const errors = {};
  
    // Username: required, 6–15 characters
    if (!values.username) {
      errors.username = 'Username is required';
    } else if (values.username.length < 6) {
      errors.username = 'Username must be at least 6 characters';
    } else if (values.username.length > 15) {
      errors.username = 'Username must be 15 characters or less';
    }
  
    // Password: required, at least 8 characters
    if (!values.password) {
      errors.password = 'Password is required';
    } else if (values.password.length < 8) {
      errors.password = 'Password must be at least 8 characters';
    }
  
    return errors;
  };
  