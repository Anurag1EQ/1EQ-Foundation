import { Link } from "react-router-dom";
import { FaXTwitter } from "react-icons/fa6";
import { FaYoutube } from "react-icons/fa6";
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaTelegram } from "react-icons/fa";
import { CiMail } from "react-icons/ci";

const Footer = () => {
  return (
    <footer className="bg-[#00254f] py-5">
      <div className=" mx-auto flex  justify-between gap-5 font-public-sans  w-[90%] global-width ">
        <div className="flex flex-col gap-3">
          <div className="flex items-center gap-3">
            <div>
              <svg
                width="62"
                height="35"
                viewBox="0 0 62 35"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M62.0005 22.7015L48.8374 15.6431L46.3574 19.7446L62.0005 29.3785V22.7015Z"
                  fill="white"
                />
                <path
                  d="M47.8682 29.2404C45.6019 29.2404 43.5187 28.7138 41.6186 27.6608C39.7186 26.5849 38.2077 25.1083 37.0859 23.2311C35.9871 21.3311 35.4377 19.1906 35.4377 16.8098C35.4377 14.429 35.9871 12.3001 37.0859 10.4229C38.2077 8.52282 39.7186 7.04627 41.6186 5.99322C43.5187 4.94017 45.6019 4.41365 47.8682 4.41365C50.1575 4.41365 52.2407 4.94017 54.1178 5.99322C56.0179 7.04627 57.5173 8.52282 58.6162 10.4229C59.715 12.3001 60.2644 14.429 60.2644 16.8098C60.2644 19.1906 59.715 21.3311 58.6162 23.2311C57.5173 25.1083 56.0179 26.5849 54.1178 27.6608C52.2178 28.7138 50.1346 29.2404 47.8682 29.2404ZM47.8682 22.9908C49.5852 22.9908 50.9358 22.4299 51.9202 21.3082C52.9274 20.1865 53.4311 18.687 53.4311 16.8098C53.4311 14.8869 52.9274 13.376 51.9202 12.2772C50.9358 11.1554 49.5852 10.5946 47.8682 10.5946C46.1284 10.5946 44.7663 11.1554 43.7819 12.2772C42.7976 13.376 42.3054 14.8869 42.3054 16.8098C42.3054 18.7099 42.7976 20.2208 43.7819 21.3425C44.7663 22.4414 46.1284 22.9908 47.8682 22.9908Z"
                  fill="white"
                />
                <rect
                  x="13.5449"
                  y="5.91406"
                  width="6.86771"
                  height="23.4647"
                  fill="white"
                />
                <rect
                  x="13.5449"
                  y="24.0371"
                  width="19.7583"
                  height="5.33474"
                  fill="#ED1B2F"
                />
                <rect
                  x="13.5449"
                  y="15.0708"
                  width="19.7583"
                  height="5.33474"
                  fill="#ED1B2F"
                />
                <rect
                  x="13.5449"
                  y="5.91406"
                  width="19.7583"
                  height="5.33474"
                  fill="white"
                />
                <path
                  d="M0.324308 11.9464V5.20081H11.3183V28.9077H3.76197V11.9464H0.324308Z"
                  fill="#ED1B2F"
                />
              </svg>
            </div>

            <p className="font-[400] leading-[29px] text-[35px] text-white px-3 border-l-1 border-white">
              FOUNDATION
            </p>
          </div>

          <div className="text-[15px] font-[300] leading-[17px] text-white">
            <p>1EQ Foundation</p>
            <p>907, OCUS Quantum</p>
            <p>Sector 51 Gurgaon 122003</p>
          </div>
        </div>

        <div className="flex justify-between flex-col items-end gap-5">
          <div className="text-white text-[20px] w-max flex items-center gap-4">
            <Link>
              <FaXTwitter />{" "}
            </Link>
            <Link>
              <FaYoutube />{" "}
            </Link>
            <Link>
              <FaFacebookF />{" "}
            </Link>
            <Link>
              <FaInstagram />{" "}
            </Link>
            <Link>
              <FaTelegram />{" "}
            </Link>
            <Link>
              <CiMail />{" "}
            </Link>
          </div>

          <div className="flex items-center text-white">
            <Link className="text-[16px] font-[500] leading-[13px] px-3 border-r-2 border-white ">
              PRIVACY POLICY
            </Link>
            <Link className="text-[16px] font-[500] leading-[13px] px-3 border-r-2 border-white ">
              PRIVACY POLICY
            </Link>
            <Link className="text-[16px] font-[500] leading-[13px] ps-3 ">
              PRIVACY POLICY
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
