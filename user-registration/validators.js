const capitalizeFirstLetter = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  };
  
  const validateFirstName = (firstName) => {
    if (!firstName) {
      throw new Error('First name is required');
    }
    if (capitalizeFirstLetter(firstName) !== firstName) {
      throw new Error('First name must start with a capital letter');
    }
  };
  
  const validateLastName = (lastName) => {
    if (!lastName) {
      throw new Error('Last name is required');
    }
    if (capitalizeFirstLetter(lastName) !== lastName) {
      throw new Error('Last name must start with a capital letter');
    }
  };
  
  const validatePassword = (password) => {
    if (!password) {
      throw new Error('Password is required');
    }
    const specialCharacterRegex = /[!@#$%^&*(),.?":{}|<>]/;
    const uppercaseRegex = /[A-Z]/;
    const numericRegex = /[0-9]/;
  
    if (!specialCharacterRegex.test(password)) {
      throw new Error('Password must contain at least one special character');
    }
    if (!uppercaseRegex.test(password)) {
      throw new Error('Password must contain at least one uppercase letter');
    }
    if (!numericRegex.test(password)) {
      throw new Error('Password must contain at least one numeric character');
    }
    if (password.length < 8) {
      throw new Error('Password must be at least 8 characters long');
    }
  };
  
  const validateEmail = (email) => {
    if (!email) {
      throw new Error('Email is required');
    }
    if (!email.includes('@')) {
      throw new Error('Email address must contain "@" symbol');
    }
  };
  
  const validatePhone = (phone) => {
    if (!phone) {
      throw new Error('Phone number is required');
    }
    if (phone.length < 10) {
      throw new Error('Phone number must be at least 10 digits long');
    }
  };
  
  module.exports = {
    validateFirstName,
    validateLastName,
    validatePassword,
    validateEmail,
    validatePhone,
  };
  