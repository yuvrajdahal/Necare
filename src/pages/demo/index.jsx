import { AiFillTwitterSquare } from "react-icons/ai";
import { BsInstagram } from "react-icons/bs";
import { FaFacebookSquare } from "react-icons/fa";
import { ImWhatsapp } from "react-icons/im";
import { classNames } from "../../lib/util";
import { motion } from "framer-motion";
import Carosuel from "../../components/Slider/Carosuel";
import CarosuelItem from "../../components/Slider/CarosuelItem";
import { IoLocationSharp } from "react-icons/io5";
function Demo() {
  return (
    <>
      <NavVersion1 />
      <Hero />
    </>
  );
}
export default Demo;
function NavVersion2() {
  return (
    <>
      <div className="font-poppins h-[16h] w-full bg-white">
        <div className="flex justify-between px-4 container mx-auto">
          <div className="relative  w-[150px]">
            <img src="/assets/logo.png" />
          </div>
          <div className="flex justify-center gap-4 items-center">
            <div className="flex items-center gap-1 text-[10px] text-neutral-800">
              <IoLocationSharp className="text-blue-10" />
              31 Vestley Drive Mernda, VIC, 3752
            </div>
            <div className="flex flex-col justify-center md:justify-start items-center md:items-start">
              <div className="flex justify-center  items-center gap-4">
                <FaFacebookSquare
                  className="text-blue-10 cursor-pointer"
                  size={10}
                />
                <BsInstagram
                  className="text-neutral-800 cursor-pointer"
                  size={10}
                />
                <AiFillTwitterSquare
                  className="text-neutral-800 cursor-pointer"
                  size={10}
                />
                <ImWhatsapp
                  className="text-neutral-800 cursor-pointer"
                  size={10}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full border border-neutral-100 h-[1px] px-8 "></div>
      <div className="flex justify-center items-center ">
        <div className="w-full gap-10 flex justify-center items-center bg-white py-4 ">
          <div className="text-[17px] text-blue-10 font-bold underline underline-offset-[14px]">
            Home
          </div>
          <div className="text-[17px] text-zinc-800 ">About</div>
          <div className="text-[17px] text-zinc-800 ">Service</div>
          <div className="text-[17px] text-zinc-800 ">Contact</div>
        </div>
      </div>
    </>
  );
}
function NavVersion1() {
  return (
    <div className="font-poppins h-[17vh] w-full bg-white shadow-xl ">
      <div className="flex justify-between px-4 container mx-auto">
        <div className="relative  w-[150px]">
          <img src="/assets/logo.png" />
        </div>
        <div className="flex flex-col justify-center gap-3">
          <div className="flex justify-start gap-4 items-center">
            <div className="flex justify-center items-center gap-1 text-[10px] text-neutral-800">
              <IoLocationSharp className="text-blue-10" />
              31 Vestley Drive Mernda, VIC, 3752
            </div>
            <div className="flex flex-col justify-center md:justify-start items-center md:items-start">
              <div className="flex justify-center  items-center gap-4">
                <FaFacebookSquare
                  className="text-blue-10 cursor-pointer"
                  size={10}
                />
                <BsInstagram
                  className="text-blue-10 cursor-pointer"
                  size={10}
                />
                <AiFillTwitterSquare
                  className="text-blue-10 cursor-pointer"
                  size={12}
                />
                <ImWhatsapp className="text-blue-10 cursor-pointer" size={10} />
              </div>
            </div>
          </div>

          <div className="gap-8 flex justify-center items-center">
            <div className="text-[17px] text-zinc-800 text-">Home</div>
            <div className="text-[17px] text-zinc-800 text-">About</div>
            <div className="text-[17px] text-zinc-800 text-">Service</div>
            <div className="text-[17px] text-zinc-800 text-">Contact</div>
          </div>
        </div>
      </div>
    </div>
  );
}
function Hero() {
  return (
    // <div className="h-[90vh] w-full ">
    //   <Carosuel autoPlay={true}>
    //     {images.map((image, i) => {
    //       return (
    //         <CarosuelItem key={image.url} className="blur-[1px] w-full h-full">
    //           <ShowImage image={image.url} />
    //         </CarosuelItem>
    //       );
    //     })}
    //   </Carosuel>
    //   <div className="absolute w-full h-[85%]  top-0 z-50 bg-gradient-to-b from-[#ffffff52]">
    //     <div className="h-full w-full flex flex-col  justify-center items-center z-50">
    //       <motion.div
    //         initial={{ opacity: 0 }}
    //         whileInView={{ opacity: 1 }}
    //         viewport={{ once: true }}
    //         transition={{ duration: 1 }}
    //         exit={{ opacity: 0 }}
    //         className="h-[300px] w-[90%] flex flex-col justify-center items-center pt-14"
    //       >
    //         <div className="flex  flex-col gap-2 text-white font-poppins justify-center items-center font-bold text-3xl lg:text-5xl">
    //           <div className="flex flex-col md:flex-row  justify-center items-center gap-2">
    //             <div className="flex gap-2 justify-center items-center">
    //               <div className="text-blue-10 flex  ">Responsible</div> Hands
    //             </div>
    //             For Your
    //           </div>
    //           Loved Ones.
    //         </div>
    //         <p className="text-center text-white pt-4 text-lg md:text-xl">
    //           Necare is one of the best care providers who <br />{" "}
    //           continuously focuses to provide quality care to their
    //           <br /> participants.
    //         </p>
    //       </motion.div>
    //     </div>
    //   </div>
    // </div>
    <div className="relative w-full h-[85vh] flex flex-col justify-center items-center">
      <Carosuel autoPlay={true}>
        {images.map((image) => {
          return (
            <CarosuelItem
              key={image.url}
              className="brightness-75 w-full h-full"
            >
              <ShowImage image={image.url} />
            </CarosuelItem>
          );
        })}
      </Carosuel>
      <div className="absolute backdrop-blur-[2px] py-4 px-4"></div>
    </div>
  );
}
const images = [
  { url: "/assets/background.png" },
  {
    url: "/assets/bg4.jpg",
  },
  {
    url: "/assets/bg-4.jpg",
  },
];
const ShowImage = ({ image, i }) => {
  return (
    <div className="w-full h-full">
      <img
        className={classNames(" w-full h-full object-cover object-center")}
        src={image}
      />
    </div>
  );
};
const Heros = () => {
  return (
    <div className="relative w-full h-[90vh] flex flex-col justify-center items-center">
      <Carosuel autoPlay={true}>
        {images.map((image) => {
          return (
            <CarosuelItem
              key={image.url}
              className="brightness-75 w-full h-full"
            >
              <ShowImage image={image.url} />
            </CarosuelItem>
          );
        })}
      </Carosuel>
      <div className="absolute backdrop-blur-[2px] py-4 px-4"></div>
    </div>
  );
};
