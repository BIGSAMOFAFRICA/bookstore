import { useAuthStore } from "../store/authStore";

const AddBook = () => {
  const { isLoading, error } = useAuthStore();

  return (
    <div className="min-h-screen text-[#252422] bg-[#CCC5B9] px-4 md:px-12 pb-16">
      <h2 className="text-center font-semibold pt-8 md:text-2xl w-full max-w-xl mx-auto">
        Add Book to Library
      </h2>

      <form className="w-full max-w-xl mx-auto flex flex-col justify-center items-center space-y-4 mt-10">
        <div className="flex flex-col w-full">
          <label className="md:text-lg">Book Image*:</label>
          <input
            type="file"
            accept="image/*"
            className="w-full px-3 py-1.5 md:py-2 text-[#252422] rounded-lg  bg-[#FFFCF2]"
          />
        </div>

        <div className="flex flex-col w-full">
          <label className="md:text-lg">Title*:</label>
          <input
            type="text"
            placeholder=""
            className="w-full px-3 py-1.5 md:py-2 text-[#252422] rounded-lg  bg-[#FFFCF2]"
          />
        </div>
        <div className="flex flex-col w-full">
          <label className="md:text-lg">Subtitle (optional):</label>
          <input
            type="text"
            placeholder=""
            className="w-full px-3 py-1.5 md:py-2 text-[#252422] rounded-lg bg-[#FFFCF2]"
          />
        </div>
        <div className="flex flex-col w-full">
          <label className="md:text-lg">Author (optional):</label>
          <input
            type="text"
            placeholder=""
            className="w-full px-3 py-1.5 md:py-2 text-[#252422] rounded-lg bg-[#FFFCF2]"
          />
        </div>
        <div className="flex flex-col w-full">
          <label className="md:text-lg">Link*:</label>
          <input
            type="text"
            placeholder=""
            className="w-full px-3 py-1.5 md:py-2 text-[#252422] rounded-lg bg-[#FFFCF2]"
          />
        </div>
        <div className="flex flex-col w-full">
          <label className="md:text-lg">Personal Review (optional):</label>
          <textarea
            rows={4}
            className="w-full px-3 py-1.5 resize-none md:py-2 text-[#252422] rounded-lg bg-[#FFFCF2]"
          />
        </div>
        {error && <p className="text-red-500">{error}</p>}
        <button
          type="submit"
          disabled={isLoading}
          className="w-full bg-[#403D39] text-[#FFFCF2] py-2 font-medium rounded-lg"
        >
          {isLoading ? "Please wait..." : "Add Book"}
        </button>
      </form>
    </div>
  );
};

export default AddBook;
