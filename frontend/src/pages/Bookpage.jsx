import { useNavigate } from "react-router";

const Bookpage = () => {
  const navigate = useNavigate("/");
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
