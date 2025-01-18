import { useEffect } from "react";
import { useNavigate, useParams } from "react-router";
import { useBookStore } from "../store/bookStore";

const Bookpage = () => {
  const { fetchBook, book, isLoading } = useBookStore();
  const navigate = useNavigate("/");
  const params = useParams();
  console.log("parms; ", params)
  useEffect(() => {
    fetchBook(params.id);
  }, [fetchBook, params]);
  if (isLoading) {
    return <p>Loading...</p>;
  }

  console.log(book);
  return (
    <div className="min-h-screen text-[#252422] bg-[#CCC5B9] px-4 md:px-12">
      <span className="cursor-pointer" onClick={() => navigate("/")}>
        &larr; Back
      </span>

      <div>
        <div>
          <img />
          <button>Read</button>
        </div>

        <div></div>
      </div>
    </div>
  );
};

export default Bookpage;
