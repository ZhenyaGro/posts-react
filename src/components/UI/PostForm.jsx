import React, { useState, createRef } from 'react';
import { MyButton } from './button/MyButton';
import { MyInput } from './input/MyInput';

export const PostForm = ({ create }) => {
  const [post, setPost] = useState({
    title: '',
    body: '',
    nodeRef: createRef(null),
  });

  const addNewPost = (event) => {
    event.preventDefault();
    const newPost = {
      ...post,
      id: Date.now(),
    };
    create(newPost);
    setPost({ title: '', body: '', nodeRef: createRef(null) });
  };

  return (
    <form>
      <MyInput
        type="text"
        placeholder="Название поста"
        value={post.title}
        onInput={(event) => setPost({ ...post, title: event.target.value })}
      />
      <MyInput
        type="text"
        placeholder="Описание поста"
        value={post.body}
        onInput={(event) => setPost({ ...post, body: event.target.value })}
      />
      <MyButton onClick={addNewPost}>Создать пост</MyButton>
    </form>
  );
};
