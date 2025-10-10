import VideoSection from "../components/VideoSection/VideoSection";
const Services = () => {
  return (
    <>
      <VideoSection />

      <section className=" flex items-center justify-center py-14">
        <div className="flex  flex-col justify-center items-center w-[85%] gap-10 ">
          <div className="w-max mt-[2%] shrink-0 flex gap-100 ">
            <div className="flex items-center justify-center h-120">
              <img src="pic.png" alt="Example" className="w-110 h-140" />
            </div>
            <div className="py-4 mt-20 px-5 border-2 border-[#00254e] border-r-8 border-b-8 rounded-tl-[33px] rounded-tr-md rounded-b-[40px] max-w-[480px] h-100">
              <p className="text-[33px]">
                <span className="text-[#ed1a2f]">Why</span> It's Needed
              </p>

              <div className="flex flex-col gap-6 mt-4">
                <div className="flex gap-2 items-start">
                  <span className="mt-1">
                    <svg
                      width="20"
                      height="26"
                      viewBox="0 0 20 26"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <g clip-path="url(#clip0_3994_303)">
                        <path
                          d="M19.8534 12.9068L1.28849 2.56105L3.99872 11.9014L17.2017 12.9068L3.99872 13.9122L1.2918 23.2482L19.8534 12.9068Z"
                          fill="black"
                        />
                      </g>
                      <defs>
                        <clipPath id="clip0_3994_303">
                          <rect width="20" height="26" fill="white" />
                        </clipPath>
                      </defs>
                    </svg>
                  </span>
                  <p className="text-[22px] text-[#00254e] leading-[23px]">
                    The existing ISLRTC dictionary lists 10,000+ signs, but very
                    few are explained with context or real-world meaning
                  </p>
                </div>

                <div className="flex gap-2 items-start">
                  <span className="mt-1">
                    <svg
                      width="20"
                      height="26"
                      viewBox="0 0 20 26"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <g clip-path="url(#clip0_3994_303)">
                        <path
                          d="M19.8534 12.9068L1.28849 2.56105L3.99872 11.9014L17.2017 12.9068L3.99872 13.9122L1.2918 23.2482L19.8534 12.9068Z"
                          fill="black"
                        />
                      </g>
                      <defs>
                        <clipPath id="clip0_3994_303">
                          <rect width="20" height="26" fill="white" />
                        </clipPath>
                      </defs>
                    </svg>
                  </span>
                  <p className="text-[22px] text-[#00254e] leading-[23px]">
                    The existing ISLRTC dictionary lists 10,000+ signs, but very
                    few are explained with context or real-world meaning
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="w-max mt-[6%] shrink-0 flex gap-100 ">
            <div className="py-4   mt-20 px-10 border-2 border-[#00254e]  border-b-8 border-l-8 rounded-tl-[33px] rounded-bl-md rounded-l-[40px]  rounded-b-[40px] max-w-[700px] h-100 w-full">
              <p className="text-[33px]">
                <span className="text-[#ed1a2f]">What</span> We're Doing
              </p>

              <div className="flex flex-col gap-6 mt-4">
                <div className="flex gap-2 items-start">
                  <span className="mt-1">
                    <svg
                      width="20"
                      height="26"
                      viewBox="0 0 20 26"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <g clip-path="url(#clip0_3994_303)">
                        <path
                          d="M19.8534 12.9068L1.28849 2.56105L3.99872 11.9014L17.2017 12.9068L3.99872 13.9122L1.2918 23.2482L19.8534 12.9068Z"
                          fill="black"
                        />
                      </g>
                      <defs>
                        <clipPath id="clip0_3994_303">
                          <rect width="20" height="26" fill="white" />
                        </clipPath>
                      </defs>
                    </svg>
                  </span>
                  <div className="text-[22px] text-[#00254e] leading-[23px] flex flex-col w-full">
                    <p>
                      Creating 2-3 minute videos that explain one word at a
                      time, including:
                    </p>

                    <ul className="text-[19px] list-disc pl-5 mt-3">
                      <li>The sign in ISL</li>
                      <li>Meaning and synonyms</li>
                      <li>Example sentance</li>
                      <li>Visual cues</li>
                    </ul>
                  </div>
                </div>

                <div className="flex gap-2 items-start">
                  <span className="mt-1">
                    <svg
                      width="20"
                      height="26"
                      viewBox="0 0 20 26"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <g clip-path="url(#clip0_3994_303)">
                        <path
                          d="M19.8534 12.9068L1.28849 2.56105L3.99872 11.9014L17.2017 12.9068L3.99872 13.9122L1.2918 23.2482L19.8534 12.9068Z"
                          fill="black"
                        />
                      </g>
                      <defs>
                        <clipPath id="clip0_3994_303">
                          <rect width="20" height="26" fill="white" />
                        </clipPath>
                      </defs>
                    </svg>
                  </span>
                  <div className="text-[22px] text-[#00254e] leading-[23px] flex flex-col w-full">
                    <p>All videos are:</p>

                    <ul className="text-[19px] list-disc pl-5 mt-3">
                      <li>
                        Planned, signed, edited, and uploaded by Deaf team
                        members
                      </li>
                      <li>
                        Free to access via YouTube and the 1ISL Challange App
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex items-center justify-center h-120">
              <img src="pic.png" alt="Example" className="w-110 h-140" />
            </div>
          </div>
          <div className="flex items-center justify-center">
            <div className="w-max mt-[6%] shrink-0 flex gap-100 ">
              <div className="flex items-center justify-center">
                <img src="pic.png" alt="Example" className="w-110 h-140" />
              </div>
              <div className="py-4  mt-20  px-5 border-2 border-[#00254e] border-b-8 rounded-tr-[33px] rounded-tl-md rounded-b-[40px] rounded-l-[40px] max-w-[450px] h-100 w-[90%]">
                <p className="text-[33px]">
                  <span className="text-[#ed1a2f]">Where</span> We Are Now
                </p>

                <div className="flex flex-col gap-6 mt-4">
                  <div className="flex gap-2 items-start">
                    <span className="mt-1">
                      <svg
                        width="20"
                        height="26"
                        viewBox="0 0 20 26"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <g clip-path="url(#clip0_3994_303)">
                          <path
                            d="M19.8534 12.9068L1.28849 2.56105L3.99872 11.9014L17.2017 12.9068L3.99872 13.9122L1.2918 23.2482L19.8534 12.9068Z"
                            fill="black"
                          />
                        </g>
                        <defs>
                          <clipPath id="clip0_3994_303">
                            <rect width="20" height="26" fill="white" />
                          </clipPath>
                        </defs>
                      </svg>
                    </span>
                    <div className="text-[22px] text-[#00254e] leading-[23px] flex flex-col w-full">
                      <p>
                        Creating 2-3 minute videos that explain one word at a
                        time, including:
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-2 items-start">
                    <span className="mt-1">
                      <svg
                        width="20"
                        height="26"
                        viewBox="0 0 20 26"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <g clip-path="url(#clip0_3994_303)">
                          <path
                            d="M19.8534 12.9068L1.28849 2.56105L3.99872 11.9014L17.2017 12.9068L3.99872 13.9122L1.2918 23.2482L19.8534 12.9068Z"
                            fill="black"
                          />
                        </g>
                        <defs>
                          <clipPath id="clip0_3994_303">
                            <rect width="20" height="26" fill="white" />
                          </clipPath>
                        </defs>
                      </svg>
                    </span>
                    <div className="text-[22px] text-[#00254e] leading-[23px] flex flex-col w-full">
                      <p>Focused on vocabulary from:</p>

                      <ul className="text-[19px] list-disc pl-5 mt-3">
                        <li>SSC prep material</li>
                        <li>Legal documents</li>
                        <li>Text-based communication needs</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Services;
