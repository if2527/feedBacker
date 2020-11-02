const validateRules = (values) => {
  let errors = {};

  // First Name Error
  if (!values.firstName) {
    errors.firstName = "Это обязательное поле";
  }
  // Surname Error
  if (!values.surname) {
    errors.surname = "Это обязательное поле";
  }
  // Textarea Error
  if (!values.comment) {
    errors.comment = "Это обязательное поле";
  }

  // Email Error
  if (values.email && !/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/i.test(values.email)
  ) {
    errors.email = 'Email должен быть в формате "имя@субдомен/домен"';
  }

  // Phone Number Error
  const regExp = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{2})[-. ]?([0-9]{2})$/;
  if (values.tel && !values.tel.match(regExp)) {
    errors.tel = 'Номер телефона должен быть в формате "(код города) номер"';
  }

  return errors;
};

export default validateRules;
