import React from 'react';
import Header from './components/Header/Header';
import GlobalStyle from './styles/global';
import PostList from './components/Postlist/PostList';

function App() {
  return (
    <>
      <Header />
      <PostList />
      <GlobalStyle />
    </>
  );
}

export default App;
