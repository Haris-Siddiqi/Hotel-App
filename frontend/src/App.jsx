import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomePage from "./HomePage";
import LoginPage from "./LoginPage";
import RegisterPage from "./RegisterPage";
import HotelPage from "./HotelPage";
import Header from "./Header"; // Import Header

function App() {
  return (
    <Router>
      <Header /> {/* Place the Header component here */}
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/hotel/:id" element={<HotelPage />} />
      </Routes>
    </Router>
  );
}

export default App;
