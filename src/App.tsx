import {useState} from "react";
import "./App.css";
import {Route, Routes} from "react-router-dom";
import PostList from "./components/post/PostList";
import PostDetail from "./components/post/PostDetail";
import EditPost from "./components/post/EditPost";

function App() {
  return (
    <div className="app">
      <h2>React query Blogs CRUD</h2>
      <Routes>
        <Route path="/" element={<PostList />} />
        <Route path="/post/:id" element={<PostDetail />} />
        <Route path="/post/:id/edit" element={<EditPost />} />
      </Routes>
    </div>
  );
}

export default App;
