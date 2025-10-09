import React from "react";
const ContactUs = () => {
  return (
    <>
      <div>
        <section className=" flex w-[90%] items-center justify-around global-width mx-auto">
          <div className="w-[40%] max-w-[500px]">
            <img
              src=" https://media.istockphoto.com/id/1906691162/vector/young-man-in-glasses-holds-laptop-professional-programmer-writing-code-freelancer-typing.jpg?s=612x612&w=0&k=20&c=RLSyJo03fzWFWR9m6cS-AC4tN74fcDF78AT28MEdjk4="
              alt="Description"
              class=" object-contain w-full h-full"
            />
          </div>
          <div className=" bg-[#00254f] min-w-[600px] max-w-[650px] w-[40%] p-16 rounded-[5px] my-10">
            <div className="flex flex-col gap-1 mb-3">
              <p className="text-white font-medium text-[24px]  leading-[36px]">
                Write to us
              </p>
              <p className="text-white text-[18px]  font-light leading-[30px]">
                Connect with us if you would like to know more about us or if
                you wish to explore collaborations.
              </p>
            </div>
            <form className=" flex flex-col gap-4 overflow-hidden">
              <input
                required
                className="  outline-0 w-full bg-white border border-black px-3 py-2.5 rounded-[3px]"
                type="text"
                placeholder="Your Name"
              ></input>
              <input
                required
                className="bg-white  outline-0 w-full border border-black px-3 py-2.5 rounded-[3px]"
                type="text"
                placeholder="Subject"
              ></input>
              <input
                required
                className="bg-white  outline-0 border w-full border-black px-3 py-2.5 rounded-[3px]"
                type="text"
                placeholder="Your Email"
              ></input>
              <textarea
                required
                rows="5"
                className="bg-white  outline-0 w-full border border-black px-3 py-2.5 rounded-[3px]"
                type="text"
                placeholder="Your Message"
              ></textarea>
              <button
                type="submit"
                className=" w-60 bg-white  text-[#00254f] rounded-sm cursor-pointer text-center  px-2 py-4"
              >
                Send Message
              </button>
            </form>
          </div>
        </section>
      </div>
    </>
  );
};
export default ContactUs;
