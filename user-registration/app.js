const express = require('express');
const {
  validateFirstName,
  validateLastName,
  validatePassword,
  validateEmail,
  validatePhone,
} = require('./validators');

const app = express();

app.use(express.json());


const errorHandler = (err, req, res, next) => {
  res.status(400).json({ error: err.message });
};

app.post('/register', (req, res, next) => {
  const { firstName, lastName, password, email, phone } = req.body;

  try {
    validateFirstName(firstName);
    validateLastName(lastName);
    validatePassword(password);
    validateEmail(email);
    validatePhone(phone);

    res.status(200).json({ message: 'User registered successfully' });
  } catch (err) {
    next(err);
  }
});

app.use(errorHandler);

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});
