import BookList from "../components/BookList";
import Footer from "../components/Footer";
import Hero from "../components/Hero";
import Navbar from "../components/Navbar";

const Homepage = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <BookList />
      <Footer />
    </>
  );
};

export default Homepage;
