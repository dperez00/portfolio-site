import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import NavBar from "./components/NavBar";

/* We switched from using "Router" in this component to using "Switch" and "Route".
We did this because we can't use "Router" in this component and in our Main.tsx file.
 */
const AppRouter = () => {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<HomePage />} />
      </Routes>
    </>
  );
};

export default AppRouter;
