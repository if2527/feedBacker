import React, { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import './index.scss'
import {
  createComment,
  updateRegionId,
  fetchAllCities,
  editComment,
} from '../../redux/actions'
import validate from './validateRules'

const AddCommentForm = () => {
  const regions = useSelector((state) => state.allComments.regions)
  const cities = useSelector((state) => state.allComments.cities)
  const isEditable = useSelector((state) => state.allComments.isEditable)
  const comments = useSelector((state) => state.allComments.feedback)
  const activeComment = useSelector((state) => state.allComments.activeComment)
  const dispatch = useDispatch()

  const selectedComment = comments.find(i => i.feedback_id == activeComment)

  const INITIAL_STATE = {
    firstname: isEditable ? selectedComment.feedback_firstname : '',
    midname: isEditable ? selectedComment.feedback_midname : '',
    lastname: isEditable ? selectedComment.feedback_lastname : '',
    phone: isEditable ? selectedComment.feedback_phone : '',
    email: isEditable ? selectedComment.feedback_email : '',
    comment: isEditable ? selectedComment.feedback_comment : '',
    city_id: isEditable ? selectedComment.city_id : '',
  }

  const [values, setValues] = useState(INITIAL_STATE)
  const [errors, setErrors] = useState({})
  const [touched, setTouched] = useState([])
  const [isSubmitting, setSubmitting] = useState(false)

  const submitHandler = () => {
    const { firstname, midname, lastname, phone, email, comment, city_id } = values

    const newComment = {
      firstname,
      midname,
      lastname,
      phone,
      email,
      comment,
      city_id,
    }
    if (!isEditable) {
      dispatch(createComment(newComment));
    } else {
      dispatch(editComment(newComment));
    }

  }

  const handleChange = (e) => {
    const { name, value } = e.target
    setValues((prev) => ({ ...prev, [name]: value }))
  }

  const handleBlur = (event) => {
    if (!touched.includes(event.target.name)) {
      setTouched([...touched, event.target.name])
    }
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    const validationErrors = validate(values)
    setErrors(validationErrors)
    setSubmitting(true)
  }

  const onRegionChange = (e) => {
    dispatch(updateRegionId(e.target.value));
    dispatch(fetchAllCities());
  }

  useEffect(() => {
    if (isSubmitting) {
      const noErrors = Object.keys(errors).length === 0
      if (noErrors) {
        setTouched([])
        submitHandler()
        setSubmitting(false)
      } else {
        setSubmitting(false)
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [errors])

  useEffect(() => {
    const validationErrors = validate(values)
    const touchedErrors = Object.keys(validationErrors)
      .filter((key) => touched.includes(key))
      .reduce((acc, key) => {
        if (!acc[key]) {
          acc[key] = validationErrors[key]
        }
        return acc
      }, {})
    setErrors(touchedErrors)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [touched, values])

  return (
    <form className='form' onSubmit={handleSubmit}>
      <div className='form-title'>
        <h2>Новый отзыв</h2>
      </div>
      <div className='form-content'>
        <div className='form-control'>
          <label>
            Фамилия
            <input
              className={errors.lastname && 'error'}
              type='text'
              name='lastname'
              value={values.lastname}
              onChange={handleChange}
              onBlur={handleBlur}
            />
          </label>
          {errors.lastname && <p className='error-text'>*{errors.lastname}</p>}
        </div>
        <div className='form-control'>
          <label>
            Имя
            <input
              className={errors.firstname && 'error'}
              type='text'
              name='firstname'
              value={values.firstname}
              onChange={handleChange}
              onBlur={handleBlur}
            />
          </label>
          {errors.firstname && (
            <p className='error-text'>*{errors.firstname}</p>
          )}
        </div>
        <div className='form-control'>
          <label>
            Отчество
            <input
            className={errors.midname && 'error'}
              type='text'
              name='midname'
              value={values.midname}
              onChange={handleChange}
              onBlur={handleBlur}
            />
          </label>
          {errors.midname && <p className='error-text'>*{errors.midname}</p>}
        </div>
        <div className='form-control'>
          <label>
            Регион
            <select defaultValue='' onChange={onRegionChange}>
              <option value='' hidden>
                Выберите регион
              </option>
              {regions.map((region) => (
                <option key={region.id} value={region.id}>
                  {region.name}
                </option>
              ))}
            </select>
          </label>
        </div>
        <div className='form-control'>
          <label>
            Город
            <select
            className={errors.city_id && 'error'}
            defaultValue={isEditable ? values.city_id : ''} name='city_id'
            onChange={handleChange}
            >
              <option value='' hidden>
                Выберите город
              </option>
              {cities.map((city) => (
                <option key={city.id} value={city.id} >
                  {city.name}
                </option>
              ))}
            </select>
          </label>
          {errors.city_id && <p className='error-text'>*{errors.city_id}</p>}
        </div>
        <div className='form-control'>
          <label>
            Контактный телефон
            <input
              className={errors.phone && 'error'}
              type='text'
              name='phone'
              value={values.phone}
              onChange={handleChange}
              onBlur={handleBlur}
            />
          </label>
          {errors.phone && <p className='error-text'>*{errors.phone}</p>}
        </div>
        <div className='form-control'>
          <label>
            Email
            <input
              className={errors.email && 'error'}
              type='email'
              name='email'
              value={values.email}
              onChange={handleChange}
              onBlur={handleBlur}
            />
          </label>
          {errors.email && <p className='error-text'>*{errors.email}</p>}
        </div>
        <div className='form-control'>
          <label>
            Комментарий
            <textarea
              className={errors.comment && 'error'}
              name='comment'
              value={values.comment}
              onChange={handleChange}
              onBlur={handleBlur}
            />
          </label>
          {errors.comment && <p className='error-text'>*{errors.comment}</p>}
        </div>
      </div>
      <div className='form-submit'>
        <button disabled={isSubmitting} type='submit'>
          Сохранить
        </button>
      </div>
    </form>
  )
}

export default AddCommentForm
