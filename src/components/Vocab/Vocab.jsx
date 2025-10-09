import { FaArrowRight } from "react-icons/fa6";

const Vocab = () => {
  return (
    <section className="bg-[#00254e] py-16">
      <div className="w-[90%] global-width h-[70vh] max-h-[700px] px-3 mx-auto flex py-10   flex-col justify-end bg-white rounded-md relative">
        <div className="flex flex-col gap-11 w-[85%] mx-auto">
          <div className="flex  justify-between w-full">
            <div className="w-[26%] overflow-hidden">
              <img src="vocab.png" className="h-full w-full" alt="" />
            </div>

            <p className="text-[#00254E] mt-6 text-[23px] w-[40%]">
              A bilingual, visual learning app designed to help Deaf learners
              build vocabulary in{" "}
              <i className="text-[#ED1B2F]">Indian Sign Language (ISL)</i> -with
              support for <i className="text-[#ED1B2F]">18 Indian languages</i>
            </p>
          </div>
          <button className="w-max z-3 cursor-pointer  duration-300 brightness-[80%] hover:brightness-[100%] text-[18px] text-white flex items-center justify-center gap-3 rounded-[30px] py-2 px-4  bg-[#4d6683]">
            Explore More Now <FaArrowRight />
          </button>
        </div>

        <div className="absolute  h-full w-full z-1 left-0 top-0 ">
          <div className="absolute w-[40%] max-w-[600px] flex items-center justify-center left-5 top-3">
            <svg
              width="100%"
              height="100%"
              viewBox="0 0 554 189"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M1.2 26H66.8V166H27.2V56.6H1.2V26Z" fill="#ED1B2F" />
              <path
                d="M283.2 168.8C260.2 168.8 237.4 162.6 224.2 153.4L237.2 124.2C249.6 132.4 267.2 138 283.4 138C299.8 138 306.2 133.4 306.2 126.6C306.2 104.4 226.6 120.6 226.6 68.6C226.6 43.6 247 23.2 288.6 23.2C306.8 23.2 325.6 27.4 339.4 35.4L327.2 64.8C313.8 57.6 300.6 54 288.4 54C271.8 54 265.8 59.6 265.8 66.6C265.8 88 345.2 72 345.2 123.6C345.2 148 324.8 168.8 283.2 168.8Z"
                fill="#00254F"
              />
              <path d="M130 166V26H169.6V166H130Z" fill="#00254F" />
              <path d="M418 166V26H457.6V134.6H524.4V166H418Z" fill="#00254F" />
            </svg>
          </div>

          <div className="absolute w-[60%] max-w-[900px] items-center fled justify-center right-5 bottom-3">
            <svg
              width="100%"
              height="100%"
              viewBox="0 0 839 182"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M637.8 166L626.8 138.8H567.6L556.6 166H516.2L578 26H617L679 166H637.8ZM579.2 109.6H615.2L597.2 64.8L579.2 109.6Z"
                fill="#00254F"
              />
              <path
                d="M430.8 168.8C386.4 168.8 353.8 138.6 353.8 96C353.8 53.4 386.4 23.2 430.8 23.2C456.6 23.2 477.4 32.6 491 49.6L465.8 72.4C457 61.8 446.2 56 432.8 56C409.8 56 393.8 72 393.8 96C393.8 120 409.8 136 432.8 136C446.2 136 457 130.2 465.8 119.6L491 142.4C477.4 159.4 456.6 168.8 430.8 168.8Z"
                fill="#00254F"
              />
              <path
                d="M259.6 168.8C214.8 168.8 181.8 138 181.8 96C181.8 54 214.8 23.2 259.6 23.2C304.4 23.2 337.4 54 337.4 96C337.4 138 304.4 168.8 259.6 168.8ZM259.6 136C280.8 136 297.4 120.2 297.4 96C297.4 71.8 280.8 56 259.6 56C238.4 56 221.8 71.8 221.8 96C221.8 120.2 238.4 136 259.6 136Z"
                fill="#00254F"
              />
              <path
                d="M119.8 26H159L99 166H60L0.2 26H43L81 117.2L119.8 26Z"
                fill="#00254F"
              />
              <path
                d="M812.6 94C828.4 99.6 838.2 111.6 838.2 128.6C838.2 152.8 818.2 167 780.6 167H705V27H776.6C813.4 27 831.4 42 831.4 63.6C831.4 77 824.6 87.8 812.6 94ZM771.4 55.6H744.2V82.6H771.4C784.6 82.6 791.4 78 791.4 69C791.4 60.2 784.6 55.6 771.4 55.6ZM777.4 138.4C791 138.4 798.2 133.8 798.2 124.2C798.2 114.6 791 110 777.4 110H744.2V138.4H777.4Z"
                fill="#00254F"
              />
            </svg>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Vocab;
