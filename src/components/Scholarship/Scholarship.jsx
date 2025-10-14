import { FaArrowRight } from "react-icons/fa6";
import { Link } from "react-router-dom";
const Scholarship = () => {
  return (
    <section className="bg-[#f3efe7] py-5 flex flex-col items-center justify-center">
      <div className="w-[90%] global-width flex flex-col items-center ">
        <p className="text-center text-[#00264e] text-[39px]">
          <span className="text-[#c91e2e]">SSC</span>
          <i> Scholarship </i> <span className="font-[500]">Initiative</span>
        </p>

        <p className="text-[24px] leading-[31px] mt-6 text-[#00264e] text-center w-[80%]">
          A <i className="text-[#c91e2c]">need-based scholarship program</i>{" "}
          supporting learners preparing for SSC and other government exams -
          especially those from Deaf, SC/ST, OBC, and EWS backgrounds
        </p>

        <div className="w-full mt-8 mb-10 relative overflow-hidden rounded-md h-[915px]">
          {/* <img src="schollarship-banner.png" className="h-full w-full" alt="" /> */}
          <video src="http://d3n54sfqz7pgh4.cloudfront.net/pin.mov" autoPlay loop muted className="h-full w-full object-cover"></video>

          <Link
            to="/scholarships"
            className="absolute bg-[#00244ebf] shadow-xl duration-300 hover:bg-[#00254e] rounded-[30px] py-2 px-3 text-white cursor-pointer bottom-5 left-[50%] transform translate-x-[-50%] text-[20px] flex items-center justify-center gap-3"
          >
            Read More About Scholarship <FaArrowRight />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Scholarship;
