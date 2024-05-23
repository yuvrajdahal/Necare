import { motion } from "framer-motion";
import { AiFillTwitterSquare } from "react-icons/ai";
import { BsInstagram } from "react-icons/bs";
import { FaFacebookSquare } from "react-icons/fa";
import { ImWhatsapp } from "react-icons/im";
import { footerLinks } from "../navigation/routes";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="relative md:h-[450px]  bg-white flex flex-col justify-center w-full font-poppins bg-no-repeat bg-contain bg-center bg-white md:bg-bottom bg-fixed">
      <div className="h-full relative flex flex-col justify-around items-center	  z-50 ">
        <div className="h-full w-full container mx-auo flex flex-col md:flex-row relative md:-top-14 justify-center items-center gap-4 z-50 ">
          <div className=" md:h-[230px] w-[230px] h-[250px] w-[250px]  ">
            <img
              src="/assets/logo.png"
              className="h-full w-full object-contain"
              alt="Logo"
            />
          </div>

          <div className="py-6 px-6 flex flex-col md:flex-row gap-10 items-center justify-center md:items-start">
            {footerLinks.map((link) => {
              return (
                <div
                  className="flex flex-col justify-center md:justify-start items-center md:items-start"
                  key={link.name}
                >
                  <div className="font-bold text-[#1e3874] text-2xl">
                    {link.name}
                  </div>
                  {link.subLinks.map((subLink, i) => {
                    return (
                      <Link
                        className="font-medium text-gray-800  hover:underline"
                        key={subLink.name}
                        to={subLink.href}
                        as={"div"}
                      >
                        <motion.div
                          initial={{ y: -(i * 0.2) }}
                          whileInView={{ y: i * 0.2 }}
                          viewport={{ once: true }}
                          transition={{ duration: i * 0.2 }}
                        >
                          {subLink.name}
                        </motion.div>
                      </Link>
                    );
                  })}
                </div>
              );
            })}

            <div className="flex flex-col justify-center md:justify-start items-center md:items-start">
              <div className="font-bold text-[#1e3874] text-2xl">
                Stay Updated
              </div>
              <div className="flex justify-center pt-2 items-center gap-4">
                <FaFacebookSquare
                  className="text-gray-800 cursor-pointer"
                  size={26}
                />
                <BsInstagram
                  className="text-gray-800 cursor-pointer"
                  size={26}
                />
                <AiFillTwitterSquare
                  className="text-gray-800 cursor-pointer"
                  size={28}
                />
                <ImWhatsapp
                  className="text-gray-800 cursor-pointer"
                  size={26}
                />
              </div>
            </div>
          </div>
        </div>
        <div className="hidden sm:block md:absolute -bottom-4 h-[200px] -z-10 w-[90%] ">
          <img
            src="/assets/footer1.png"
            className="h-full w-full object-cover lg:object-contain "
          />
        </div>
        <div className=" block sm:hidden md:absolute -bottom-4 h-[200px] -z-10 w-[90%]">
          <img
            src="/assets/footer.png"
            className="h-full w-full object-contain"
          />
        </div>
      </div>

      <div className="h-[10vh] bg-blue-500">
        <div className="w-full text-white py-4 font-light flex justify-center items-center">
          Copyright © 2023 Necare
        </div>
      </div>
    </footer>
  );
}
export default Footer;
