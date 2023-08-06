import Nav from "../../layouts/Nav";
import Footer from "../../layouts/Footer";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

function Service() {
  return (
    <>
      <Nav />
      <div className="z-10 relative w-full h-[75vh] flex flex-col justify-center items-center">
        <div className="absoulte h-full w-full z-10 ">
          <img
            src="/assets/vision.png"
            className="h-full w-full object-cover brightness-[70%] "
          />
        </div>
        <div className="w-full h-full absolute z-50 backdrop-blur-[1px]">
          <div className="h-full w-full container mx-auto ">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1 }}
              className="h-full w-full  flex h-full flex-col justify-center items-center font-poppins"
            >
              <div className="text-3xl lg:text-5xl font-semibold text-white text-center">
                Misson and Vison
              </div>
              <div className="flex gap-2 mt-2">
                <Link to="/">
                  <span className="cursor-pointer text-white text-sm md:text-lg">
                    Home
                  </span>
                </Link>
                <span className="cursor-pointer text-white text-sm md:text-lg">
                  &gt;
                </span>
                <Link to="/about">
                  <span className="cursor-pointer text-white text-sm md:text-lg">
                    About
                  </span>
                </Link>
                <span className="cursor-pointer text-white text-sm md:text-lg">
                  &gt;
                </span>
                <Link to="/mission-and-vision">
                  <span className="cursor-pointer text-white text-sm md:text-lg">
                    Mission and Vison
                  </span>
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
      <div className="my-4 w-full flex flex-col-reverse md:flex-row container mx-auto items-center">
        <div className="w-full md:w-[50%] lg:p-12  ">
          <div className="flex flex-col px-6 gap-6 ">
            <div className="font-semibold text-blue-10 mt-4 text-center md:text-left text-3xl relative lg:-left-8">
              Our Mission and Vision
            </div>
            <div className="px-2 md:px-0 text-lg">
              <div className="font-medium text-xl relative lg:-left-8 mb-2">
                Our Mission is to :
              </div>
              <ul className="list-disc mb-4">
                <li>To provide quality care to our clients</li>
              </ul>
              <div className="font-medium text-xl relative lg:-left-8 mb-2">
                Our Vision is to :
              </div>
              <ul className="list-disc">
                <li>To meet our client need as their requirements</li>
                <li>To provide services that meets quality standards.</li>
                <li>
                  To improve our service based on the feedback of clients and
                  other stake holders.
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className=" h-[450px] md:w-[50%]  flex flex-col justify-center items-center p-10">
          <img
            className="h-full bg-slate-300 w-full object-cover"
            src="/assets/mission.jpg"
          />
        </div>
      </div>
      <Footer />
    </>
  );
}
export default Service;
