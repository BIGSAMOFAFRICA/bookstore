const BookList = () => {
  const booklist = ["", "", "", "", "", ""];
  return (
    <div className="text-[#252422] bg-[#CCC5B9] px-4 md:px-12 pb-20">
      <h1 className="py-6 text-lg md:text-2xl lg:text-3xl w-full mx-auto max-w-6xl">Reader&rsquo;s favorites</h1>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-3 lg:gap-6 w-full mx-auto max-w-6xl">
        {booklist.map((book, index) => (
          <div key={index} className="w-full h-[15rem] lg:h-[23rem] bg-[#252422] mx-auto rounded-md"></div>
        ))}
      </div>
    </div>
  );
};

export default BookList;
