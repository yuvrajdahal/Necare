import { motion } from "framer-motion";
import Nav from "../../../layouts/Nav";
import Carosuel from "../../../components/Slider/Carosuel";
import CarosuelItem from "../../../components/Slider/CarosuelItem";
import { classNames } from "../../../lib/util";

function Hero() {
  return (
    <>
      <Nav />
      <div className="relative w-full h-[500px] flex flex-col justify-center items-center">
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
        <div className="h-[90%] top-0 absolute backdrop-blur-[1px] py-4 px-4">
          <div className="h-full w-full flex flex-col  justify-center items-center z-50">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1 }}
              exit={{ opacity: 0 }}
              className="flex flex-col justify-center items-center pt-14"
            >
              <div className="flex  flex-col gap-2 text-white font-poppins justify-center items-center font-bold text-3xl lg:text-5xl">
                <div className="flex flex-col md:flex-row  justify-center items-center gap-2">
                  <div className="flex gap-2 justify-center items-center">
                    <div className="text-blue-10 flex  ">Responsible</div> Hands
                  </div>
                  For Your
                </div>
                Loved Ones.
              </div>
              <p className="text-center text-white pt-4 text-lg md:text-xl">
                Necare is one of the best care providers who <br />{" "}
                continuously focuses to provide quality care to their
                <br /> participants.{" "}
              </p>
            </motion.div>
          </div>
        </div>
      </div>
    </>
  );
}
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
export default Hero;
const images = [
  { url: "/assets/background.png" },
  {
    url: "/assets/bg4.jpg",
  },
  {
    url: "/assets/bg-4.jpg",
  },
];
