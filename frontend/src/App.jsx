import { Route, Routes } from "react-router";
import Homepage from "./pages/Homepage";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import SignUp from "./pages/SignUp";
import LogIn from "./pages/LogIn";
import { Toaster } from "react-hot-toast";
import { useAuthStore } from "./store/authStore";
import { useEffect } from "react";
import RedirectAuthenticatedUser from "./providers/RedirectAuthenticatedUsers";
import AddBook from "./pages/AddBook";

function App() {
  const { fetchUser, fetchingUser } = useAuthStore();

  useEffect(() => {
    fetchUser();
  }, [fetchUser]);

  if (fetchingUser) {
    return <p>Loading...</p>;
  }
  return (
    <>
      <Toaster />
      <Navbar />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route
          path="/signup"
          element={
            <RedirectAuthenticatedUser>
              <SignUp />
            </RedirectAuthenticatedUser>
          }
        />
        <Route
          path="/login"
          element={
            <RedirectAuthenticatedUser>
              <LogIn />
            </RedirectAuthenticatedUser>
          }
        />

        <Route
          path="/add-book"
          element={
            <RedirectAuthenticatedUser>
              <AddBook />
            </RedirectAuthenticatedUser>
          }
        />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
