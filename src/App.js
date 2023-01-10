import "./App.css";
import Header from "./components/header/Header";
import Main from "./components/Main/Main";
import Navbar from "./components/Navbar/Navbar";
import { Routes, Route, Link } from "react-router-dom";
import News from "./components/News/News";
import PopularNews from "./components/PopularNews/PopularNews";
import Category from "./components/Category/Category";
import { useState } from "react";

function App() {
  const [category, setCategory] = useState("Sports");
  return (
    <div>
      <Header />
      <Navbar category={category} setCategory={setCategory} />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/news" element={<News />} />
        <Route path="/popular" element={<PopularNews />} />
        <Route
          path="/news/:id"
          element={<Category category={category} setCategory={setCategory} />}
        />
      </Routes>
    </div>
  );
}

export default App;
