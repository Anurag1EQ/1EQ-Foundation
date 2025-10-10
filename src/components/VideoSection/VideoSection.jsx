import { FaArrowRight } from "react-icons/fa6";
import Timestamps from "../Timestamps/Timestamps";
const VideoSection = () => {
  return (
    <section className=" h-[calc(100vh-420px)] min-h-[500px]  bg-white  justify-between gap-12 flex flex-col shadow-blue-light">
      {/* Main Section */}
      <div className="flex flex-col grow-1 ">
        <div className="w-[80%]  overflow-hidden h-full relative mx-auto flex pt-15 justify-between">
          <div className="flex flex-col grow-1 max-w-[53%] gap-13 ">
            <div>
              <p className="text-[#00254E] text-[40px] font-[500] leading-[45px]">
                1ISL <i className="text-[#ED1B2F]">Vocabulary</i> Project{" "}
              </p>
              <p className="text-[#00254E] text-[36px] font-[500] leading-[45px]">
                (1VOCAB){" "}
              </p>
            </div>

            {/* <p className="text-[23px] font-[400] text-[#00254E]">
              The{" "}
              <span className="text-[#ed1c2f]">1ISL Vocabulary Project</span> is
              a large-scale effort to create a rich, usable vocabulary database
              in{" "}
              <span className="text-[#ed1c2f]">Indian Sign Language (ISL)</span>{" "}
              - starting with words relevant to{" "}
              <span className="text-[#ed1c2f]">
                SSC exam preparation, legal awareness,
              </span>{" "}
              and <span className="text-[#ed1c2f]">everyday literacy.</span>
            </p> */}
            <Timestamps />
          </div>

          {/* <div className="shrink-0 max-w-[440px] w-[44%] absolute right-0 top-[50%] image-shadow-inset transform  translate-y-[-50%]">
            <img src="gunga.png" className="h-full w-full " alt="" />
          </div> */}
          <div className="shrink-0  overflow-hidden h-full aspect-square flex items-center justify-center absolute bottom-[-1%] right-[-8%]  ">
            <video
              src="service_video4.webm"
              autoPlay
              muted
              loop
              className="h-[120%] w-auto  object-cover"
              alt=""
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default VideoSection;
