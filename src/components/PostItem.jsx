import React from 'react';
import { MyButton } from './UI/button/MyButton';

const PostItem = React.forwardRef((props, ref) => {
  return (
    <div className="post" ref={ref}>
      <div className="post__content">
        <strong>
          {props.number}. {props.post.title}
        </strong>
        <div>{props.post.body}</div>
      </div>
      <div className="post__btns">
        <MyButton
          onClick={() => {
            debugger;
            return props.remove(props.post);
          }}>
          Удалить
        </MyButton>
      </div>
    </div>
  );
});

export default PostItem;
