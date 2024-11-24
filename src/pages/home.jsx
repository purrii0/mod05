import rightArrow from "../assets/right-arrow1.png";

function HomePage() {
  return (
    <>
      <div className="h-screen w-full flex p-3">
        <div className="h-full w-1/2 flex flex-col">
          <div className="h-1/4 p-5 flex justify-between">
            <div className="h-[15px] w-[15px] rotate-45	bg-black"></div>
            <div className="text-end flex flex-col justify-start ">
              <div className=" font-medium text-lg ">Menu</div>
              <div>
                <ul className="font-normal text-xs mt-7  cursor-pointer">
                  <li className="hover:underline ">Home Page</li>
                  <li className="hover:underline ">Portfolio</li>
                  <li className="hover:underline ">Fashion Week-2024</li>
                  <li className="hover:underline ">News/Article</li>
                  <li className="hover:underline ">Contact</li>
                </ul>
              </div>
            </div>
          </div>
          <div className="h-4/5 w-full flex flex-col justify-center items-center p-6">
            <div className="text-7xl font-extralight mr-40">SELECT</div>
            <div className="text-7xl font-extralight ml-40">FASHION</div>
            <div className="text-7xl font-extralight mr-[40px] flex justify-center items-center">
              MOD.05{" "}
              <div className="inline-block w-[100px] flex-grow h-[2.5px] bg-black top-1/2"></div>
            </div>
            <div className="text-7xl font-extralight ml-[60px]">SCENE</div>
          </div>
          <div className="h-1/8 flex items-end p-5">
            <p className=" text-start text-xs font-medium">
              Not trends, whispers of rebellion woven on silk. <br /> Not
              labels, a language spoken in every stitch. <br /> 29 words,
              fashion redefined.
            </p>
          </div>
        </div>

        <div className="h-full w-1/2 bg-orange-800 flex">
          <div className="h-full w-[92%] bg-yellow-300"></div>
          <div className="h-full w-[8%] bg-pink-600"></div>
        </div>
      </div>
      <div className="h-[70px] w-[70px] top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-[#f05f0b] rounded-full absolute">
        <img
          src={rightArrow}
          className="h-[25px] w-[25px]  top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 absolute"
          alt=""
        />
      </div>
    </>
  );
}

export default HomePage;
