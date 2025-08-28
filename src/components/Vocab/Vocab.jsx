import { FaArrowRight } from "react-icons/fa6";

const Vocab = () => {
  return (
    <section className="bg-[#00254e] py-16">
      <div className="w-[90%] h-[74vh] px-15 mx-auto flex items-center justify-between bg-white rounded-md relative">
        <button className="absolute bottom-7 z-3 cursor-pointer left-17 text-[18px] text-white flex items-center justify-center gap-3 rounded-[30px] py-2 px-4  bg-[#4d6683]">Explore More Now <FaArrowRight /></button>

        <div className="w-[28%] ms-22 mt-24 overflow-hidden">
            <img src="vocab.png" className="h-full w-full" alt="" />
        </div>

        <p className="text-[#00254E] mb-8 text-[23px] w-[40%]">
           A bilingual, visual learning app designed to help Deaf learners build vocabulary in <i className="text-[#ED1B2F]">Indian Sign Language (ISL)</i> -with support for <i className="text-[#ED1B2F]">18 Indian languages</i>
        </p>

        <div className="absolute h-full w-full z-1 left-0 top-0 font-public-sans font-[900]">
            <span className="text-[210px] text-[#ed1a2f] absolute left-7 top-20">1</span>
            <span className="text-[210px] text-[#00254f] absolute left-77 -top-10">V</span>
            <span className="text-[210px] text-[#00254f] absolute left-147 top-19">O</span>
            <span className="text-[210px] text-[#00254f] absolute left-177 top-90">C</span>
            <span className="text-[210px] text-[#00254f] absolute right-80 -bottom-10">A</span>
            <span className="text-[210px] text-[#00254f] absolute right-7 bottom-16">B</span>
        </div>
      </div>
    </section>
  );
};

export default Vocab;
