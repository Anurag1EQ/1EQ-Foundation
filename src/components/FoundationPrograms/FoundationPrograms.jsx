import { useState } from "react";
import { IoIosArrowBack } from "react-icons/io";

const FoundationPrograms = () => {
  const [isCardActive, setIsCardActive] = useState(false);
  const [cardExpand, setCardExpand] = useState({
    card1: false,
    card2: false,
    card3: false,
  });

  console.log(cardExpand, isCardActive);

  return (
    <section className=" relative">
      <div className="absolute h-full -z-1 w-full opacity-[20%] overflow-hidden top-0 left-0 ">
        <img className="h-full w-full" src="foundation-background.jpg" alt="" />
      </div>

      <div className=" w-full pt-4 pb-10 px-5  flex items-center justify-between gap-6 flex-col">
        <p className="text-[42px] text-center text-[#00254e]">
          <span className="text-[#d22532]">1</span>EQ FOUNDATION PROGRAMS
        </p>
        <div className="flex gap-5 justify-center w-[75%]">
          <div
            className={`relative rounded-2xl shrink-0 hover:scale-[101%] duration-500 font-public-sans flex items-end bg-black  overflow-hidden  ${
              cardExpand.card1 && isCardActive
                ? "w-[calc(100%-60px)]"
                : "w-[340px]"
            } h-[600px] ${
              isCardActive && !cardExpand.card1 ? "!w-[40px]" : ""
            }`}
          >
            {cardExpand.card1 ? (
              <div className="h-full w-full flex justify-between overflow-hidden bg-[#00254e] text-[white] relative ">
                <div
                  onClick={() => {
                    setIsCardActive(false);
                    setCardExpand({ card1: false, card2: false, card3: false });
                  }}
                  className="absolute rounded-[50%] bg-[#ffffffd2] z-5 right-0 translate-x-[50%] top-[50%] transform flex items-center justify-center h-15 cursor-pointer aspect-square translate-y-[-50%]"
                >
                  <IoIosArrowBack className="text-[26px] text-black translate-x-[-50%]" />
                </div>

                <div className="h-full w-[30%]">
                  <img
                    src="program1.jpg"
                    className="h-full w-full object-cover"
                    alt=""
                  />
                </div>
                <div className="grow-1 h-full overflow-scroll py-4 px-8">
                  <p className="text-center font-[500] text-[23px]">
                    <span className="text-[#d22532]">1</span>EQ ISL Internship
                    Programme
                  </p>
                  <div className="flex flex-col gap-4 mt-3">
                    <div className="flex flex-col gap-3">
                      <p className="text-[17px] font-[500]">Why It Esists</p>
                      <ul className="list-disc pl-10">
                        <li>
                          Few internships are accessible to Deaf learners or
                          inclusive of ISL{" "}
                        </li>
                        <li>
                          Volunteers (Deaf and hearing) often want to contribute
                          meaningfully but needed guidance and structure{" "}
                        </li>
                        <li>
                          This program creates a pathway for contribution,
                          learning, and leadership{" "}
                        </li>
                      </ul>
                    </div>
                    <div className="flex flex-col gap-3">
                      <p className="text-[17px] font-[500]">What Do They Do</p>
                      <ul className="list-disc pl-10">
                        <li>
                          Research and prepare word scripts for ISL video
                          lessons
                        </li>
                        <li>
                          Sign and present vocabulary and explainer videos
                        </li>
                        <li>
                          Learn basic editing, captioning, and video upload
                          processes
                        </li>
                        <li>
                          Support peer learners, moderate discussions, and test
                          new tools
                        </li>
                        <li>
                          Help grow vocabulary, content, and learning resources
                          from within the community
                        </li>
                      </ul>
                    </div>
                    <div className="flex flex-col gap-3">
                      <p className="text-[17px] font-[500]">What They Gain</p>
                      <ul className="list-disc pl-10">
                        <li>A portfolio of real published work</li>
                        <li>
                          Digital content skills (research, editing,
                          communication)
                        </li>
                        <li>Experience in visual-first education systems</li>
                        <li>Exposure to leadership, teaching, and teamwork</li>
                        <li>
                          A supportive, Deaf-led workspace to learn and grow
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            ) : isCardActive ? (
              <div
                onClick={(e) => {
                  e.stopPropagation();
                  setCardExpand({
                    card1: true,
                    card2: false,
                    card3: false,
                  });
                  setIsCardActive(true);
                }}
                className="text-white  h-full w-full overflow-hidden flex items-center justify-center bg-[#00254e] cursor-pointer"
              >
                <p className="text-center text-[27px] flex items-center flex-col justify-center leading-[28px] font-[600]">
                  <span className="text-[#d22532]">1</span>
                  <span>E</span>
                  <span>Q</span>
                  <span className="my-3"> </span>
                  <span className="text-[#d22532]">I</span>
                  <span>S</span>
                  <span>L</span>
                  <span className="my-3"> </span>
                  <span>I</span>
                  <span>n</span>
                  <span>t</span>
                  <span>e</span>
                  <span>r</span>
                  <span>n</span>
                  <span>s</span>
                  <span>h</span>
                  <span>i</span>
                  <span>p</span>
                </p>
              </div>
            ) : (
              <div className="h-full w-full flex items-end overflow-hidden">
                <div className="absolute w-full h-full left-0 top-0 brightness-[80%]">
                  <img src="program1.jpg" className="h-full w-full" alt="" />
                </div>

                <div className=" w-full z-1 bottom-shadow relative px-2 py-4 pb-7">
                  <p className="text-[26px] leading-[29px] text-white">
                    <span className="text-[#d22532]">1</span>
                    EQ ISL Internship Programme
                  </p>

                  <p className="text-white text-[16px] leading-[18px] font-[300] mt-3">
                    A Deaf-led program where participants contribute to content
                    creation, outreach, and peer learning — while building
                    skills in video production, education, and teamwork. Inside
                    this page
                  </p>

                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      setCardExpand({
                        card1: true,
                        card2: false,
                        card3: false,
                      });
                      setIsCardActive(true);
                    }}
                    className="mx-auto mt-8 border-1 cursor-pointer border-white text-center flex items-center hover:bg-[#00254e] duration-300 hover:text-white hover:border-transparent justify-center py-2 px-3 w-[75%] text-white rounded-[30px]"
                  >
                    LEARN MORE
                  </button>
                </div>
              </div>
            )}
          </div>

          <div
            className={`relative rounded-2xl shrink-0 hover:scale-[101%] duration-500 font-public-sans flex items-end bg-black  overflow-hidden w-[340px] h-[600px] ${
              isCardActive && !cardExpand.card2 ? "!w-[40px]" : ""
            } ${
              cardExpand.card2 && isCardActive
                ? "w-[calc(100%-60px)]"
                : "w-[340px]"
            }`}
          >
            {cardExpand.card2 ? (
              <div className="h-full w-full flex justify-between overflow-hidden bg-[#00254e] text-[white] relative">
                <div
                  onClick={() => {
                    setIsCardActive(false);
                    setCardExpand({ card1: false, card2: false, card3: false });
                  }}
                  className="absolute rounded-[50%] bg-[#ffffffd2] z-5 right-0 translate-x-[50%] top-[50%] transform flex items-center justify-center h-15 cursor-pointer aspect-square translate-y-[-50%]"
                >
                  <IoIosArrowBack className="text-[26px] text-black translate-x-[-50%]" />
                </div>
                <div className="h-full w-[30%]">
                  <img
                    src="program1.jpg"
                    className="h-full w-full object-cover"
                    alt=""
                  />
                </div>
                <div className="grow-1 h-full overflow-scroll py-4 px-8">
                  <p className="text-center font-[500] text-[23px]">
                    <span className="text-[#d22532]">1</span>EQ ISL Internship
                    Programme
                  </p>
                  <div className="flex flex-col gap-4 mt-3">
                    <div className="flex flex-col gap-3">
                      <p className="text-[17px] font-[500]">
                        Why We Started It
                      </p>
                      <ul className="list-disc pl-10">
                        <li>
                          Leadership training rarely includes or centers Deaf
                          voices
                        </li>
                        <li>
                          Many talented Deaf learners have the ability to guide
                          other - but lack structured spaces to practice
                          leadership
                        </li>
                        <li>
                          This program creates a pathway for Deaf-led education,
                          peer support, and public visibility{" "}
                        </li>
                      </ul>
                    </div>
                    <div className="flex flex-col gap-3">
                      <p className="text-[17px] font-[500]">
                        What Participants Do
                      </p>
                      <ul className="list-disc pl-10">
                        <li>
                          Lead internal vocabulary sessions and guide new
                          interns
                        </li>
                        <li>Support content accuracy and video flow in ISL</li>
                        <li>
                          Host group discussion and Q&A sessions for learners
                        </li>
                        <li>
                          Learn the basic of advocacy, mentorship, and
                          responsible facilitation
                        </li>
                      </ul>
                    </div>
                    <div className="flex flex-col gap-3">
                      <p className="text-[17px] font-[500]">What It Builds</p>
                      <ul className="list-disc pl-10">
                        <li>
                          A Grwoing network of Deaf leaders trained in
                          inclusive, bilingual education
                        </li>
                        <li>
                          Peer role models for younger learners entering the ISL
                          learning space
                        </li>
                        <li>
                          Increased comfort with public speaking, feedback, and
                          coordination{" "}
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            ) : isCardActive ? (
              <div
                onClick={(e) => {
                  e.stopPropagation();
                  setCardExpand({
                    card1: false,
                    card2: true,
                    card3: false,
                  });
                  setIsCardActive(true);
                }}
                className="text-white  h-full w-full overflow-hidden flex items-center justify-center bg-[#00254e] cursor-pointer"
              >
                <p className="text-center text-[27px] flex items-center flex-col justify-center leading-[28px] font-[600]">
                  <span className="text-[#d22532]">1</span>
                  <span>E</span>
                  <span>Q</span>
                  <span className="my-3"> </span>
                  <span className="text-[#d22532]">I</span>
                  <span>S</span>
                  <span>L</span>
                  <span className="my-3"> </span>
                  <span>L</span>
                  <span>e</span>
                  <span>a</span>
                  <span>d</span>
                  <span>e</span>
                  <span>r</span>
                  <span>s</span>
                  <span>h</span>
                  <span>i</span>
                  <span>p</span>
                </p>
              </div>
            ) : (
              <div className="h-full w-full flex items-end overflow-hidden">
                <div className="absolute w-full h-full left-0 top-0 brightness-[80%]">
                  <img src="program2.jpg" className="h-full w-full" alt="" />
                </div>

                <div className=" w-full z-1 bottom-shadow relative px-2 py-4 pb-7">
                  <p className="text-[26px] leading-[29px] text-white">
                    <span className="text-[#d22532]">1</span>
                    EQ ISL Leadership Programme
                  </p>

                  <p className="text-white text-[16px] leading-[18px] font-[300] mt-3">
                    A focused development program to support Deaf individuals
                    who want to become mentors, facilitators, and change makers
                    within their communities - using Indian Sign Language (ISL)
                    as their primary mode of expression and leadership. Inside
                    the page
                  </p>

                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      setIsCardActive(true);
                      setCardExpand({
                        card1: false,
                        card2: true,
                        card3: false,
                      });
                    }}
                    className="mx-auto mt-8 border-1 cursor-pointer border-white text-center flex items-center hover:bg-[#00254e] duration-300 hover:text-white hover:border-transparent justify-center py-2 px-3 w-[75%] text-white rounded-[30px]"
                  >
                    LEARN MORE
                  </button>
                </div>
              </div>
            )}
          </div>

          <div
            className={`relative rounded-2xl shrink-0 hover:scale-[101%] duration-500 font-public-sans flex items-end bg-black  overflow-hidden w-[340px] h-[600px] ${
              isCardActive && !cardExpand.card3 ? "!w-[40px]" : ""
            } ${
              cardExpand.card3 && isCardActive
                ? "w-[calc(100%-60px)]"
                : "w-[340px]"
            }`}
          >
            {cardExpand.card3 ? (
              <div className="h-full w-full flex justify-between overflow-hidden bg-[#00254e] text-[white] relative">
                <div
                  onClick={() => {
                    setIsCardActive(false);
                    setCardExpand({ card1: false, card2: false, card3: false });
                  }}
                  className="absolute rounded-[50%] bg-[#ffffffd2] z-5 right-0 translate-x-[50%] top-[50%] transform flex items-center justify-center h-15 cursor-pointer aspect-square translate-y-[-50%]"
                >
                  <IoIosArrowBack className="text-[26px] text-black translate-x-[-50%]" />
                </div>
                <div className="h-full w-[30%]">
                  <img
                    src="program1.jpg"
                    className="h-full w-full object-cover"
                    alt=""
                  />
                </div>
                <div className="grow-1 h-full overflow-scroll py-4 px-8">
                  <p className="text-center font-[500] text-[23px]">
                    <span className="text-[#d22532]">1</span>EQ ISL Internship
                    Programme
                  </p>
                  <div className="flex flex-col gap-4 mt-3">
                    <div className="flex flex-col gap-3">
                      <p className="text-[17px] font-[500]">
                        Why We Started It
                      </p>
                      <ul className="list-disc pl-10">
                        <li>
                          Leadership training rarely includes or centers Deaf
                          voices
                        </li>
                        <li>
                          Many talented Deaf learners have the ability to guide
                          other - but lack structured spaces to practice
                          leadership
                        </li>
                        <li>
                          This program creates a pathway for Deaf-led education,
                          peer support, and public visibility{" "}
                        </li>
                      </ul>
                    </div>
                    <div className="flex flex-col gap-3">
                      <p className="text-[17px] font-[500]">
                        What Participants Do
                      </p>
                      <ul className="list-disc pl-10">
                        <li>
                          Lead internal vocabulary sessions and guide new
                          interns
                        </li>
                        <li>Support content accuracy and video flow in ISL</li>
                        <li>
                          Host group discussion and Q&A sessions for learners
                        </li>
                        <li>
                          Learn the basic of advocacy, mentorship, and
                          responsible facilitation
                        </li>
                      </ul>
                    </div>
                    <div className="flex flex-col gap-3">
                      <p className="text-[17px] font-[500]">What It Builds</p>
                      <ul className="list-disc pl-10">
                        <li>
                          A Grwoing network of Deaf leaders trained in
                          inclusive, bilingual education
                        </li>
                        <li>
                          Peer role models for younger learners entering the ISL
                          learning space
                        </li>
                        <li>
                          Increased comfort with public speaking, feedback, and
                          coordination{" "}
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            ) : isCardActive ? (
              <div
                onClick={(e) => {
                  e.stopPropagation();
                  setCardExpand({
                    card1: false,
                    card2: false,
                    card3: true,
                  });
                  setIsCardActive(true);
                }}
                className="text-white  h-full w-full overflow-hidden flex items-center justify-center bg-[#00254e] cursor-pointer"
              >
                <p className="text-center text-[27px] flex items-center flex-col justify-center leading-[28px] font-[600]">
                  <span className="text-[#d22532]">T</span>
                  <span className="text-[#d22532]">E</span>
                  <span className="text-[#d22532]">X</span>
                  <span className="text-[#d22532]">T</span>
                  <span className="text-[#d22532]">-</span>
                  <span className="text-[#d22532]">B</span>
                  <span className="text-[#d22532]">A</span>
                  <span className="text-[#d22532]">S</span>
                  <span className="text-[#d22532]">E</span>
                  <span className="text-[#d22532]">D</span>
                  <span className="my-3"> </span>
                  <span>P</span>
                  <span>r</span>
                  <span>o</span>
                  <span>j</span>
                  <span>e</span>
                  <span>c</span>
                  <span>t</span>
                </p>
              </div>
            ) : (
              <div className="h-full w-full flex items-end overflow-hidden">
                <div className="absolute w-full h-full left-0 top-0 brightness-[80%]">
                  <img src="program3.jpg" className="h-full w-full" alt="" />
                </div>

                <div className=" w-full z-1 bottom-shadow relative px-2 py-4 pb-7">
                  <p className="text-[26px] leading-[29px] text-white">
                    <span className="text-[#d22532]">Text-Based </span>{" "}
                    Empowerment Project
                  </p>

                  <p className="text-white text-[16px] leading-[18px] font-[300] mt-3">
                    Lorem ipsum dolor sit amet consectetur. Mauris viverra
                    semper vel lacinia hac nulla turpis. Blandit vivamus sem
                    aenean praesent. Nunc fusce habitant gravida ac risus mauris
                    imperdiet ultricies. Feugiat quis sit et pharetra bibendum
                    ultricies at.quis sit et pharetra bibendum ultricies
                  </p>

                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      setIsCardActive(true);
                      setCardExpand({
                        card1: false,
                        card2: false,
                        card3: true,
                      });
                    }}
                    className="mx-auto mt-8 border-1 cursor-pointer border-white text-center flex items-center hover:bg-[#00254e] duration-300 hover:text-white hover:border-transparent justify-center py-2 px-3 w-[75%] text-white rounded-[30px]"
                  >
                    LEARN MORE
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FoundationPrograms;
