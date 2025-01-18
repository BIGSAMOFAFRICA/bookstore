import { useEffect } from "react";
import { Link, useNavigate, useParams } from "react-router";
import { useBookStore } from "../store/bookStore";

const Bookpage = () => {
  const { fetchBook, book, isLoading } = useBookStore();
  const navigate = useNavigate("/");
  const params = useParams();

  useEffect(() => {
    fetchBook(params.id);
  }, [fetchBook, params]);

  if (isLoading) {
    return <p>Loading...</p>;
  }

  console.log("Book: ", book);
  return (
    <div className="min-h-screen text-[#252422] bg-[#f5f5f5] px-4 md:px-12 pb-10">
      <p className="cursor-pointer py-3" onClick={() => navigate("/")}>
        &larr; Back
      </p>

      <div className="flex flex-col md:flex-row">
        <div className="md:basis-[30%] md:mr-6 mx-auto w-full">
          <img
            src={book?.image}
            alt="book_img"
            className="max-h-[50vh] mx-auto"
          />
          <Link to={book?.link} target="_blank">
            <div className="w-full flex justify-center items-center">
              <button className="bg-[#403D39] text-[#CCC5B9] px-3 py-2 w-full md:max-w-52 mt-3">
                Read
              </button>
            </div>
          </Link>
        </div>

        <div className="mt-6 md:mt-0 md:max-w-4xl basis-[65%]">
          <p>
            Uploaded by:{" "}
            <span className="text-[#944424]">@{book?.user.username}</span>
          </p>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold">
            {book?.title}
          </h1>
          {book?.subtitle && <h3>{book?.subtitle}</h3>}
          <p className="pl-5">Written by: {book?.author}</p>

          <p className="mt-2 font-semibold text-lg md:text-xl">Review:</p>
          <p className="md:text-lg">{book?.review}</p>
        </div>
      </div>
    </div>
  );
};

export default Bookpage;
