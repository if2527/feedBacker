import React from "react";
import { useSelector, useDispatch } from "react-redux";
import "./index.scss";
import {addActiveComments} from '../../redux/actions'

const Comments = () => {
  const comments = useSelector(state => state.allCommments.comments);
  const activeComments = useSelector(state => state.allCommments.activeComments);
  const dispatch = useDispatch();

  const handleClick = (e) => {
    const {id, className} = e.currentTarget;
    if (!activeComments.includes(id)) {
      dispatch(addActiveComments(id))
    }

    if (className !== 'active') {
      e.currentTarget.className = 'active';
    } else {
      e.currentTarget.className = '';
    }
  }

  return (
    <div className="comments">
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
            <tr>
              <td colSpan="5">Записей нет</td>
            </tr>
          )}
          {comments.map((comment, index) => {
            return (
              <tr key={comment.id} onClick={handleClick} id={comment.id}>
                <td>{index + 1}</td>
                <td>
                  <p>
                    <strong>{comment.surname}</strong>
                  </p>
                  <p>
                    {comment.firstName}{" "}
                    {comment.secondName && comment.secondName}
                  </p>
                  <p>
                    <em>местность</em>
                  </p>
                </td>
                <td>{comment.tel && comment.tel}</td>
                <td>{comment.email && comment.email}</td>
                <td>{comment.comment}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    comments: state.allCommments.comments,
  };
};

export default Comments;
