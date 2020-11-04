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
    dispatch(isEdit(true))
    dispatch(showModal())
  }

  return (
    <div className='btn-row'>
      <button className='btn btn-primary' onClick={() => dispatch(showModal())}>
        <span className='icon'>+</span>Добавить
      </button>
      <button className='btn btn-primary' onClick={onEdit} disabled={activeComment ? false : true}>
        <span className='icon'>&#9998;</span>Редактировать
      </button>
      <button className='btn btn-danger' onClick={onRemove} disabled={activeComment ? false : true}>
        <span className='icon'>&ndash;</span>Удалить
      </button>
    </div>
  )
}
export default Toolbar
