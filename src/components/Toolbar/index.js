import React from 'react'
import './index.scss'
import { useSelector, useDispatch } from 'react-redux'
import {
  showModal,
  isEdit,
  removeComment
} from '../../redux/actions'

const Toolbar = () => {
  const dispatch = useDispatch()
  const activeComment = useSelector((state) => state.allComments.activeComment)

  const onRemove = () => {
    dispatch(removeComment(activeComment))
  }

  const onEdit = () => {
    dispatch(showModal())
    dispatch(isEdit(true))
  }

  return (
    <div className='btn-row'>
      <button className='btn btn-primary' onClick={() => dispatch(showModal())}>
        <span className='icon'>+</span>Добавить
      </button>
      {activeComment && (
        <button className='btn btn-primary' onClick={onEdit}>
          <span className='icon'>&#9998;</span>Редактировать
        </button>
      )}

      <button className='btn btn-danger' onClick={onRemove}>
        <span className='icon'>&ndash;</span>Удалить
      </button>
    </div>
  )
}
export default Toolbar
