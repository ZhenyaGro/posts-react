import { CSSTransition, TransitionGroup } from 'react-transition-group';
import PostItem from './PostItem';
import React from 'react';

export const PostList = ({ posts, title, remove }) => {
  if (!posts.length)
    return <h1 style={{ textAlign: 'center' }}>Посты не найдены</h1>;

  return (
    <div>
      <h1 style={{ textAlign: 'center' }}>{title}</h1>
      <TransitionGroup>
        {posts.map((post, index) => (
          <CSSTransition
            key={post.id}
            timeout={500}
            classNames="post"
            nodeRef={post.nodeRef}>
            <PostItem
              remove={remove}
              number={index + 1}
              post={post}
              ref={post.nodeRef}
            />
          </CSSTransition>
        ))}
      </TransitionGroup>
    </div>
  );
};
