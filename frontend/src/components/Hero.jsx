const Hero = () => {
  return (
    <div className="h-[75vh] lg:h-dvh bg-[#252422] text-[#FFFCF2] px-4 md:px-12 -mt-20">
      <div className="w-full h-full flex flex-col justify-center items-center">
        <h1 className="text-3xl md:text-4xl lg:text-6xl pb-8 lg:pb-12 text-center max-w-5xl">
          Share your <span className="text-[#EB5E28]">favorite</span> books and{" "}
          <span className="text-[#EB5E28]">discover</span> new ones from readers
          like you.
        </h1>

        <input
          placeholder="Search..."
          className="w-full max-w-sm md:max-w-xl lg:max-w-3xl text-base lg:text-lg px-3 py-1.5 md:py-2 text-[#252422] rounded-lg placeholder:text-gray-600"
        />
      </div>
    </div>
  );
};

export default Hero;
