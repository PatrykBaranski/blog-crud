import { Route, Routes } from "react-router-dom";
import HomePage from "./components/pages/HomePage";
import AboutPage from "./components/pages/AboutPage";
import PostPage from "./components/pages/PostPage";
import AddPostPage from "./components/pages/AddPostPage";
import EditPostPage from "./components/pages/EditPostPage";
import NotFoundPage from "./components/pages/NotFoundPage";
import Header from "./components/views/Header";
import Footer from "./components/views/Footer";
import { Container } from "react-bootstrap";

function App() {
  return (
    <Container>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/post/:id" element={<PostPage />} />
        <Route path="/post/add" element={<AddPostPage />} />
        <Route path="/post/:id/edit" element={<EditPostPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
      <Footer />
    </Container>
  );
}

export default App;
