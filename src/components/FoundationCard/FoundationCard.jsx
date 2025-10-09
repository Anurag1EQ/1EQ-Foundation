const FoundationCard = (props) => {
  return (
    <div className="relative rounded-2xl hover:scale-[102%] duration-500 font-public-sans flex items-end bg-black  overflow-hidden w-[340px] h-[600px] ">
      <div className="absolute w-full h-full left-0 top-0 brightness-[80%]">
        <img src={posterImage} className="h-full w-full" alt="" />
      </div>

      <div className=" w-full z-1 bottom-shadow relative px-2 py-4 pb-7">
        <p className="text-[26px] leading-[29px] text-white">
          <span className="text-[#d22532]">{highlitedTitle}</span>
          {title}
        </p>

        <p className="text-white text-[16px] leading-[18px] font-[300] mt-3">
          {paragraph}
        </p>

        <button
          className="mx-auto mt-8 border-1 cursor-pointer border-white text-center flex items-center hover:bg-[#00254e] duration-300 hover:text-white hover:border-transparent justify-center py-2 px-3 w-[75%] text-white rounded-[30px]"
        >
          LEARN MORE
        </button>
      </div>
    </div>
  );
};

export default FoundationCard;
