const Scholarships = () => {
  return (
    <>
      <section className=" flex items-center justify-center pb-24 flex-col">
        <div className=" h-[58vh] max-h-[700px] w-full relative mb-8">
          <div className="h-full w-full overflow-hidden flex items-center justify-center">
            <video
              src="map-animation.mp4"
              autoPlay
              muted
              loop
              className="w-[80%] h-auto object-fill"
            ></video>
          </div>

          <button className="absolute text-[38px] text-white min-w-[50%] py-3 px-4 rounded-[50px] flex items-center gap-[10px] justify-center overflow-hidden bg-[#00254e] font-[500] bottom-0  transform translate-y-[50%] left-[50%] translate-x-[-50%]">
            <span className="text-[#c91e2c]">SSC</span> <i>Scholarship</i>
            Initiative
          </button>
        </div>
        <p className="text-[24px] text-center w-[90%] my-10 ">
          A{" "}
          <span className="text-[#ed1a2f]">need-based scholarship program</span>{" "}
          supporting learners preparing for SSC and other government exams -
          especially those from Deaf, SC/ST, OBC, and EWS backgrounds
        </p>

        <div className="h-160 w-full bg-[#f1f1f2] py-13">
          <div className="w-full h-full flex items-center justify-center relative ">
            <div className="absolute h-full w-full flex">
              <div className="h-full w-1/2 bg-white"></div>
              <div className="h-full w-1/2 bg-[#e8c67f]"></div>
            </div>

            <div className="w-[90%] relative global-width flex flex-col gap-2  h-[80%]">
              <p className="text-[#00264e] font-[400] text-[30px] absolute -top-[50px] left-0">
                <span className="text-[#c91e2c]">Why</span> We Do It
              </p>
              <div className="h-full w-full bg-[#e8c67f] border-3 border-white"></div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Scholarships;
