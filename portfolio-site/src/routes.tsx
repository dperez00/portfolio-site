import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import NavBar from "./components/NavBar";
import BottomRackClothing from "./pages/BottomRackClothing";
import CosmosForge from "./pages/CosmosForge";
import CosmosForgeAffiliate from "./pages/CosmosForgeAffiliate";
import BeaningfulCoffee from "./pages/BeaningfulCoffee";

/* We switched from using "Router" in this component to using "Switch" and "Route".
We did this because we can't use "Router" in this component and in our Main.tsx file.
 */
const AppRouter = () => {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/BottomRackClothing" element={<BottomRackClothing />} />
        <Route path="/CosmosForge" element={<CosmosForge />} />
        <Route
          path="/CosmosForgeAffiliate"
          element={<CosmosForgeAffiliate />}
        />
        <Route path="/BeaningfulCoffee" element={<BeaningfulCoffee />} />
        <Route path="/Magtech" element={<BeaningfulCoffee />} />
        <Route path="/GameHub" element={<BeaningfulCoffee />} />
        {/* add more routes for other projects if neccessary */}
      </Routes>
    </>
  );
};

export default AppRouter;
