import { BrowserRouter, Routes, Route } from "react-router-dom";
import PageLayout from "../compenents/PageLayout";
import HomePage from "../compenents/Home";
import BgChanger from "../compenents/BgChanger";
import Counter from "../compenents/Counter";
import PassGenerator from "../compenents/PassGenerator";
import OtpGenerator from "../compenents/OtpGenerator";

const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <PageLayout>
              <HomePage />
            </PageLayout>
          }
        />
        <Route
          path="/Counter"
          element={
            <PageLayout>
              <Counter />
            </PageLayout>
          }
        />
        <Route
          path="/BgChanger"
          element={
            <PageLayout>
              <BgChanger />
            </PageLayout>
          }
        />
        <Route
          path="/PassGenerator"
          element={
            <PageLayout>
              <PassGenerator />
            </PageLayout>
          }
        />
        <Route
          path="/OtpGenerator"
          element={
            <PageLayout>
              <OtpGenerator />
            </PageLayout>
          }
        />
      </Routes>
    </BrowserRouter>
  );
};
export default AppRouter;
