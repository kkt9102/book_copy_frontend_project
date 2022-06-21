// import
import { Routes, Route } from 'react-router-dom';
import Main from './components/Main';
import Login from './components/login/Login';
import SignUp from './components/signup/SignUp';
import PostList from './components/board/PostList';
import PostWrite from './components/board/PostWrite';
import PostDetail from './components/board/PostDetail';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/SignUp" element={<SignUp />} />
        <Route path="/PostList" element={<PostList />} />
        <Route path="/PostWrite" element={<PostWrite />} />
        <Route path="/PostDetail" element={<PostDetail />} />
      </Routes>
    </>
  );
}

export default App;
