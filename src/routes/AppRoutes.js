import { Routes, Route } from "react-router-dom";
import Home from "../pages/HomePage/Home";
import Login from "../pages/Login";
import Rent from "../pages/RentPage/MainPageForRent";
import MainPageForHouseDetails from "../pages/HouseDetailsPage/MainPageForHouseDetails";
export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/Home" element={<Home />} />
      <Route path="/Login" element={<Login />} />
      <Route path="/Rent" element={<Rent />} />
      <Route path="/HouseDetalis" element={<MainPageForHouseDetails />} />
    </Routes>
  );
}
