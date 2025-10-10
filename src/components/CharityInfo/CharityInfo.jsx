const CharityInfo = () => {
  return (
    <div className="bg-[#f3f3f3] w-full py-8 flex justify-center gap-3">
      <div className="w-[90%] global-width flex  flex-col gap-3">
        <p className="text-center text-[32px] text-[#ED1B2F]">
          1EQ FOUNDATION{" "}
          <span className="text-[#00254E]">Charitable Impact</span>
        </p>
        <div className="flex w-full items-center justify-around">
          <div className="flex flex-col items-center">
            <p className="font-[600] text-[32px] text-[#00254e] text-center">
              3000+
            </p>
            <p className="text-center font-[600] text-[#00254e] text-[18px]">
              Scholarships given
            </p>
          </div>
          <div className="flex flex-col items-center">
            <p className="font-[600] text-[32px] text-[#00254e] text-center">
              700+  
            </p>
            <p className="text-center font-[600] text-[#00254e] text-[18px]">
              New ISL words
            </p>
          </div>
          {/* <div className="flex flex-col items-center">
            <p className="font-[600] text-[32px] text-[#00254e] text-center">
              75 Million
            </p>
            <p className="text-center font-[600] text-[#00254e] text-[18px]">
              Lorem Ipsum
            </p>
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default CharityInfo;
