import { PostList } from './components/PostList';
import { useMemo, useState, createRef } from 'react';
import './styles/App.css';
import { PostForm } from './components/UI/PostForm';
import { PostFilter } from './components/PostFilter';
import { MyModal } from './components/UI/MyModal/MyModal';
import { MyButton } from './components/UI/button/MyButton';
import { usePosts } from './hooks/usePosts';

function App() {
  const [posts, setPosts] = useState([
    {
      id: 1,
      title: 'JavaScript',
      body: "1It's about JavaScript",
      nodeRef: createRef(null),
    },
    {
      id: 2,
      title: 'Python',
      body: "2It's about Python",
      nodeRef: createRef(null),
    },
    { id: 3, title: 'Go', body: "3It's about Go", nodeRef: createRef(null) },
  ]);

  const [filter, setFilter] = useState({ sort: '', query: '' });
  const [modal, setModal] = useState(false);
  const sortedAndSearchedPosts = usePosts(posts, filter.sort, filter.query);

  const createPost = (newPost) => {
    setPosts([...posts, newPost]);
    setModal(false);
  };

  const removePost = (post) => {
    setPosts(posts.filter((p) => p.id !== post.id));
  };

  return (
    <div className="App">
      <MyButton style={{ marginTop: '30px' }} onClick={() => setModal(true)}>
        Создать пост
      </MyButton>
      <MyModal visible={modal} setVisible={setModal}>
        <PostForm create={createPost} />
      </MyModal>
      <hr style={{ margin: '15px 0' }} />
      <PostFilter filter={filter} setFilter={setFilter} />
      <PostList
        remove={removePost}
        posts={sortedAndSearchedPosts}
        title="Посты про JavaScript"
      />
    </div>
  );
}

export default App;
