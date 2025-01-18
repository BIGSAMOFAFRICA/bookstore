import { useBookStore } from "../store/bookStore";

const BookList = () => {
  const { book } = useBookStore();

  console.log("Books: ", book)
  const booklist = ["", "", "", "", "", ""];
  return (
    <div className="text-[#252422] bg-[#CCC5B9] px-4 md:px-12 pb-20">
      <h1 className="py-6 text-xl md:text-2xl lg:text-3xl w-full mx-auto max-w-6xl">
        Reader&rsquo;s favorites
      </h1>

      <div className="flex flex-wrap justify-around space-x-2 gap-y-5 lg:gap-y-8 w-full max-w-6xl mx-auto">
        {booklist.map((book, index) => (
          <div
            key={index}
            className="cursor-pointer w-[9rem] md:w-[10.5rem] xl:w-[11rem] shadow-sm hover:shadow-md rounded-b-md"
          >
            <div className="min-w-[9rem] md:min-w-[10.5rem] xl:min-w-[11rem] h-[12rem] md:h-[13.5rem] lg:h-[13rem] xl:h-[15rem] bg-[#252422]"></div>

            <div className="p-2 flex flex-col">
              <h2 className="flex-1 mb-2 font-semibold text-base md:text-lg">
                Across the River and Into the Trees
              </h2>
              <p className="text-sm md:text-base">Liev Schreiber</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BookList;
