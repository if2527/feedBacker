import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import './index.scss'
import { addActiveComment } from '../../redux/actions'

const Comments = () => {
  const comments = useSelector((state) => state.allComments.feedback)
  const activeComment = useSelector((state) => state.allComments.activeComment)

  const dispatch = useDispatch()

  const handleClick = (e) => {
    const { id } = e.currentTarget
    dispatch(addActiveComment(id))
  }

  return (
    <div className='comments'>
      <table>
        <thead>
          <tr>
            <th>No</th>
            <th>Ф.И.О.</th>
            <th>Телефон</th>
            <th>Email</th>
            <th>Комментарий</th>
          </tr>
        </thead>
        <tbody>
          {!comments.length && (
            <tr style={{ pointerEvents: 'none' }}>
              <td colSpan='5'>Записей нет</td>
            </tr>
          )}
          {comments.map((comment, index) => {
            return (
              <tr
                key={comment.feedback_id}
                onClick={handleClick}
                id={comment.feedback_id}
                className={activeComment == comment.feedback_id ? 'active' : ''}
              >
                <td>{index + 1}</td>
                <td>
                  <p>
                    <strong>{comment.feedback_lastname}</strong>
                  </p>
                  <p>
                    {comment.feedback_firstname}{' '}
                    {comment.feedback_midname && comment.feedback_midname}
                  </p>
                  <p>
                    {comment.region_name && !comment.city_name && (
                      <em>{comment.region_name}</em>
                    )}
                    {comment.city_name && !comment.region_name && (
                      <em>{comment.city_name}</em>
                    )}
                    {comment.region_name && comment.city_name && (
                      <em>
                        {comment.region_name}, {comment.city_name}
                      </em>
                    )}
                  </p>
                </td>
                <td>{comment.feedback_phone && comment.feedback_phone}</td>
                <td>{comment.feedback_email && comment.feedback_email}</td>
                <td>{comment.feedback_comment}</td>
              </tr>
            )
          })}
        </tbody>
      </table>
    </div>
  )
}

export default Comments
