import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import "./index.scss";
import { hideModal, createComment, showAlert } from "../../redux/actions";
import validate from "./validateRules";

const AddCommentForm = () => {
  const dispatch = useDispatch();
  const INITIAL_STATE = {
    firstName: "",
    secondName: "",
    surname: "",
    tel: "",
    email: "",
    comment: "",
}
  const [values, setValues] = useState(INITIAL_STATE);
  const [errors, setErrors] = useState({});
  const [touched, setTouched] = useState([]);
  const [isSubmitting, setSubmitting] = useState(false);

  const submitHandler = () => {
    const {firstName, secondName, surname, tel, email, comment} = values

    const newComment = {
      id: Date.now().toString(),
      firstName,
      secondName,
      surname,
      tel,
      email,
      comment
    };

    dispatch(createComment(newComment));
    dispatch(hideModal());
    dispatch(showAlert('Комментарий успешно создан'));
  };

  const handleChange = e => {
    const {name, value}  = e.target;
    setValues((prev) => ({ ...prev, [name]: value } ));
  };

  const handleBlur = (event) => {
    if (!touched.includes(event.target.name)) {
        setTouched([
            ...touched,
            event.target.name
        ])
    }
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    const validationErrors = validate(values);
    setErrors(validationErrors);
    setSubmitting(true);

  }

  useEffect(() => {
    if (isSubmitting) {

        const noErrors = Object.keys(errors).length === 0;
        if (noErrors) {
            setTouched([]);
            submitHandler();
            setSubmitting(false);
        } else {
            setSubmitting(false);
        }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
}, [errors]);

useEffect(() => {
  const validationErrors = validate(values);
  const touchedErrors = Object.keys(validationErrors)
      .filter(key => touched.includes(key))
      .reduce((acc, key) => {
          if (!acc[key]) {
              acc[key] = validationErrors[key]
          }
          return acc
      }, {})
  setErrors(touchedErrors);
  // eslint-disable-next-line react-hooks/exhaustive-deps
}, [touched, values]);

  return (
    <form className="form" onSubmit={handleSubmit}>
      <div className="form-title">
        <h2>Новый отзыв</h2>
      </div>
      <div className="form-content">
        <div className="form-control">
          <label htmlFor="surname">Фамилия</label>
          <input
          className={errors.surname && 'error'}
            type="text"
            id="surname"
            name="surname"
            value={values.surname}
            onChange={handleChange}
            onBlur={handleBlur}
          />
          {errors.surname && <p className="error-text">*{errors.surname}</p>}
        </div>
        <div className="form-control">
          <label htmlFor="firstName">Имя</label>
          <input
          className={errors.firstName && 'error'}
            type="text"
            id="firstName"
            name="firstName"
            value={values.firstName}
            onChange={handleChange}
            onBlur={handleBlur}
          />
          {errors.firstName && <p className="error-text">*{errors.firstName}</p>}
        </div>
        <div className="form-control">
          <label htmlFor="secondName">Отчество</label>
          <input
            type="text"
            id="secondName"
            name="secondName"
            value={values.secondName}
            onChange={handleChange}
            onBlur={handleBlur}
          />
        </div>
        {/* TODO:add selects */}
        <div className="form-control">
          <label htmlFor="tel">Контактный телефон</label>
          <input
            className={errors.tel && 'error'}
            type="text"
            id="tel"
            name="tel"
            value={values.tel}
            onChange={handleChange}
            onBlur={handleBlur}
          />
          {errors.tel && <p className='error-text'>*{errors.tel}</p>}
        </div>
        <div className="form-control">
          <label htmlFor="email">Email</label>
          <input
          className={errors.email && 'error'}
            type="email"
            id="email"
            name="email"
            value={values.email}
            onChange={handleChange}
            onBlur={handleBlur}
          />
          {errors.email && <p className='error-text'>*{errors.email}</p>}
        </div>
        <div className="form-control">
          <label htmlFor="comment">Комментарий</label>
          <textarea
            className={errors.comment && 'error'}
            id="comment"
            name="comment"
            value={values.comment}
            onChange={handleChange}
            onBlur={handleBlur}
          />
          {errors.comment && <p className='error-text'>*{errors.comment}</p>}
        </div>
      </div>
      <div className="form-submit">
        <button disabled={isSubmitting} type="submit">Сохранить</button>
      </div>
    </form>
  );
};

export default AddCommentForm;
