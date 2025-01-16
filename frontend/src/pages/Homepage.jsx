import BookList from "../components/BookList";
import Hero from "../components/Hero";
import { useAuthStore } from "../store/authStore";

const Homepage = () => {
  const {user} = useAuthStore();
  console.log(user.username)
  return (
    <>
      <Hero />
      <BookList />
    </>
  );
};

export default Homepage;
