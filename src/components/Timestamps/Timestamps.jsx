
import { useEffect, useState } from "react";
const Timestamps = () => {
    const [selectedText, setSelectedText] = useState();
    const textString = `The 1ISL Vocabulary Project is a large-scale effort to create a rich, usable vocabulary database in Indian Sign Language (ISL) - starting with words relevant to SSC exam preparation, legal awareness, and everyday literacy.`;
    // let textArray = textString.split(" ").filter((elem) => elem !== "-" );
    let textArray = textString.split(" ");
    
    const newWords = [
      "1ISL",
      "Vocabulary",
      "Project",
      "Indian",
      "Sign",
      "Language",
      "(ISL)",
      "SSC",
      "exam",
      "preparation,",
      "legal",
      "awareness",
      "everyday",
      "literacy",
    ];
  
    useEffect(() => {
      let indexNo = 0;
      console.log(textArray);
      const timer = setInterval(() => {
        if (indexNo > textArray.length) {
          indexNo = 0;
        } else {
          setSelectedText(textArray[indexNo] === '-' ? ++indexNo : indexNo);
          indexNo++;
        }
      }, 800);
  
      return () => clearInterval(timer);
    }, []);
  return (
    <p className="text-[23px] font-[400] text-[#00254E] flex flex-wrap gap-1">
    {textString.split(" ").map((elem, index) => (
      <span key={index}>
        {newWords.some((word) => elem.includes(word)) ? (
          <span
            className={` ${
              index === selectedText ? "bg-[#ed1c2f] text-white" : ""
            } text-[#ed1c2f] duration-300 rounded-sm px-1`}
          >
            {elem}
          </span>
        ) : elem === "" ? (
          " "
        ) : (
          <span
            className={` ${
              index === selectedText ? "bg-gray-400" : ""
            } duration-300 rounded-sm px-1`}
          >
            {elem}
          </span>
        )}
      </span>
    ))}
  </p>
  )
}

export default Timestamps