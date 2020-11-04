const validateRules = (values) => {
  let errors = {};

  // First Name Error
  if (!values.firstname) {
    errors.firstname = "Это обязательное поле";
  }
  // Lastname Error
  if (!values.lastname) {
    errors.lastname = "Это обязательное поле";
  }
  // Midname Error
  if (!values.midname) {
    errors.midname = "Это обязательное поле";
  }
  // Textarea Error
  if (!values.comment) {
    errors.comment = "Это обязательное поле";
  }
  // City_id Error
  if (!values.city_id) {
    errors.city_id = "Это обязательное поле";
  }

  // Email Error
  if (!values.email) {
    errors.email = 'Это обязательное поле';
  }
  if (values.email && !/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/i.test(values.email)
  ) {
    errors.email = 'Email должен быть в формате "имя@субдомен/домен"';
  }

  // Phone Number Error
  if (!values.phone) {
    errors.phone = 'Это обязательное поле';
  }
  const regExp = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{2})[-. ]?([0-9]{2})$/;
  if (values.phone && !values.phone.match(regExp)) {
    errors.phone = 'Номер телефона должен быть в формате "(код города) номер"';
  }

  return errors;
};

export default validateRules;
