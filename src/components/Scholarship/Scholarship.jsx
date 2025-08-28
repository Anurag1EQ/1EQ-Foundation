import { FaArrowRight } from "react-icons/fa6";


const Scholarship = () => {
  return (
    <section className="bg-[#f3efe7] py-5 flex flex-col items-center ">
      <p className="text-center text-[#00264e] text-[39px]">
        <span className="text-[#c91e2e]">SSC</span><i> Scholarship </i> <span className="font-[500]">Initiative</span>
      </p>

      <p className="text-[25px] leading-[33px] mt-6 text-[#00264e] text-center w-[75%]">
      A <i className='text-[#c91e2c]'>need-based scholarship program</i> supporting learners preparing for SSC and other government exams - 
      especially those from Deaf, SC/ST, OBC, and EWS backgrounds
      </p>

      <div className="w-[90%] mt-8 relative overflow-hidden rounded-md">
        <img src="scholarship.png" className="h-full w-full" alt="" />

        <button className="absolute bg-[#00244ebf] shadow-xl rounded-[30px] py-2 px-3 text-white cursor-pointer bottom-5 left-[50%] transform translate-x-[-50%] text-[20px] flex items-center justify-center gap-3">Read More About Scholarship <FaArrowRight /></button>
      </div>
    </section>
  );
};

export default Scholarship;
