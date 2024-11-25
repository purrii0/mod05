import rightArrow from "../assets/right-arrow1.png";
import search from "../assets/search.png";
import video from "../assets/a.mp4";
import { useState } from "react";
function HomePage() {
  const [visible, setVisible] = useState(false);

  const toggle = () => {
    if (window.innerWidth < 768) {
      setVisible(!visible);
    }
  };
  return (
    <>
      <div className="h-screen w-full flex flex-col md:flex-row p-3">
        <div className="h-full w-full md:w-1/2 flex flex-col">
          <div className="h-[10%] w-full md:h-1/4 p-5 flex justify-between">
            <div className="h-[15px] w-[15px] rotate-45	bg-black"></div>
            <div className="text-end flex flex-col justify-start ">
              <div className="relative">
                <div
                  className="font-medium text-lg cursor-pointer"
                  onClick={toggle}
                >
                  Menu
                </div>
                <div>
                  <ul
                    className={`
            font-normal text-xs 
            mt-3 md:mt-7 
            cursor-pointer flex
            flex-col
            ${
              visible
                ? "absolute top-10 right-0 bg-white shadow-lg w-48 p-4 block"
                : "hidden"
            } 
            md:static md:flex md:w-auto md:bg-transparent md:shadow-none md:rounded-none md:p-0 md:space-x-4
          `}
                  >
                    <li className="hover:underline mb-2 md:mb-0">Home Page</li>
                    <li className="hover:underline mb-2 md:mb-0">Portfolio</li>
                    <li className="hover:underline mb-2 md:mb-0">
                      Fashion Week-2024
                    </li>
                    <li className="hover:underline mb-2 md:mb-0">
                      News/Article
                    </li>
                    <li className="hover:underline mb-2 md:mb-0">Contact</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className="h-4/5 w-full flex flex-col justify-center items-center p-0 md:p-6">
            <div className="text-5xl md:text-7xl font-extralight mr-20 md:mr-40">
              SELECT
            </div>
            <div className="text-5xl md:text-7xl font-extralight ml-20 md:ml-40">
              FASHION
            </div>
            <div className="text-5xl md:text-7xl font-extralight mr-10 md:mr-[40px] flex justify-center items-center">
              MOD.05{" "}
              <div className="inline-block w-[40px] md:w-[100px] flex-grow h-[0.5px] md:[2.5px] bg-black top-1/2"></div>
            </div>
            <div className="text-5xl md:text-7xl font-extralight ml-[20px] md:ml-[60px]">
              SCENE
            </div>
          </div>
          <div className="h-1/8 md:flex hidden items-end p-5">
            <p className=" text-start hidden md:block text-xs font-medium">
              Not trends, whispers of rebellion woven on silk. <br /> Not
              labels, a language spoken in every stitch. <br /> 29 words,
              fashion redefined.
            </p>
          </div>
        </div>

        <div className="h-1/2 md:h-full w-full md:w-1/2 flex">
          <div className="h-full w-full md:w-[95%]">
            <video
              src={video}
              className="h-full w-full object-cover"
              loop
              autoPlay
              muted
            ></video>
          </div>
          <div className="h-full w-0 md:w-[7%] hidden md:flex justify-center ">
            <img
              src={search}
              className="h-5 w-5 mt-1/2 cursor-pointer"
              alt=""
            />
          </div>
        </div>
      </div>
      <div className="h-[45px] md:h-[70px] w-[45px] md:w-[70px] top-1/2 left-1/2 cursor-pointer md:rotate-0 rotate-90 transform -translate-x-1/2 -translate-y-1/2 bg-[#f05f0b] rounded-full absolute">
        <img
          src={rightArrow}
          className="h-[17px] w-[17px] md:h-[25px] md:w-[25px] top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 absolute"
          alt=""
        />
      </div>
    </>
  );
}

export default HomePage;
