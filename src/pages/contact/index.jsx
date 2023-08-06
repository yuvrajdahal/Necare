import { CgWebsite } from "react-icons/cg";
import { motion } from "framer-motion";
import { MdEmail } from "react-icons/md";
import BreadCrumb, {
  BreadCrumbItem,
  getBreads,
} from "../../components/BreadCrumb";
import Nav from "../../layouts/Nav";
import { IoMdCall } from "react-icons/io";
import { IoLocationSharp } from "react-icons/io5";
import Footer from "../../layouts/Footer";
import { useState } from "react";

function Contact() {
  const breads = getBreads();
  const [name, setName] = useState("");
  const [option, setOption] = useState("value");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const mailtoLink = `https://mail.google.com/mail/u/0/`;
  return (
    <>
      <Nav />
      <div className="z-10 relative w-full h-[400px]  flex flex-col justify-center items-center">
        <div className="absoulte h-full w-full z-10">
          <img
            src="/assets/contact.jpg"
            className="h-full w-full object-cover object-right md:object-center  brightness-[60%]"
          />
        </div>
        <div className="absolute bg w-full h-full top-0 backdrop-blur-[1px] py-4 z-50 px-4">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2 }}
            className="h-full w-full flex flex-col justify-center items-center gap-2"
          >
            <div className="text-4xl font-bold text-white uppercase">
              Contact US
            </div>
            <BreadCrumb>
              {breads.map((bread, _index) => {
                return (
                  <BreadCrumbItem
                    to={bread.path}
                    key={bread.name}
                    className="text-white text-lg"
                  >
                    {bread.name}
                  </BreadCrumbItem>
                );
              })}
            </BreadCrumb>
          </motion.div>
        </div>
      </div>
      <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 1.2 }}
      className="md:h-[600px] container mx-auto w-full  flex justify-center items-center my-10"
    >
      <div className=" w-full flex flex-col font-poppins ">
        <div className="w-full lg:w-[90%] flex flex-col md:flex-row justify-between md:gap-4 ">
          <div className="flex w-full  md:w-[50%] flex-col gap-4  items-end px-4 ">
            <div className="w-full  lg:w-[85%] flex flex-col gap-4 text-lg md:pl-8">
              {/* contact left */}
              <div className="px-6 md:pl-4 text-gray-400 flex justify-center md:justify-start gap-2">
                <div className="text-gray-800">Contact Us</div>
                <div className="hidden md:block w-[25px] h-[3px] bg-gray-400 self-end relative bottom-1.5"></div>
              </div>
              <div className="text-blue-10  font-semibold text-justify md:text-lg text-left  md:px-6 md:pl-4 uppercase">
                If you have any questions or queries, please feel free to
                contact us on the details provided below or alternatively you
                can complete the online enquiry form and we will get back to you
                as soon as possible.
              </div>
              <div className="flex items-center gap-4 ">
                <div className="h-12 w-12 rounded-full shadow-md border text-blue-10 text-2xl flex justify-center items-center cursor-pointer">
                  <IoLocationSharp />
                </div>
                <div className="flex flex-col justify-start items-start text-[17px]">
                  <div className="text-gray-800 hover:text-blue-10">
                    Nepal, Kathmandu <br className="block sm:hidden md:block" />
                    Budhanilkantha, 44622
                  </div>
                </div>
              </div>

              <div className="flex items-center gap-4 ">
                <div className="h-12 w-12 rounded-full shadow-md border text-blue-10 text-2xl flex justify-center items-center cursor-pointer">
                  <MdEmail />
                </div>
                <div className="flex flex-col justify-start text-gray-800 hover:text-blue-10 text-lg">
                  <a href={"mailto: info@NeCare.com"}>necare@gmail.com</a>
                </div>
              </div>
              <div className="flex items-center gap-4 ">
                <div className="h-12 w-12 rounded-full shadow-md border text-blue-10 text-2xl flex justify-center items-center cursor-pointer">
                  <IoMdCall />
                </div>
                <div className="flex flex-col justify-start text-gray-800 hover:text-blue-10 text-lg">
                  <a>
                    01234569789, 0123654987,
                    <br className="block sm:hidden md:block" /> 0123852141
                  </a>
                </div>
              </div>
              <div className="flex items-center gap-4  ">
                <div className="h-12 w-12 rounded-full shadow-md border text-blue-10 text-2xl flex justify-center items-center cursor-pointer">
                  <CgWebsite />
                </div>
                <div className="flex flex-col justify-start items-start text-lg ">
                  <a
                    target="_blank"
                    href="https://www.necare.vercel.app"
                    className="text-gray-800 hover:text-blue-10"
                  >
                   www.necare.vercel.app
                  </a>
                </div>
              </div>
            </div>
          </div>
          <form
            target="_blank"
            action={mailtoLink}
            method="get"
            className="flex lg:w-[50%] flex-col font-poppins px-2 pt-6 md:pt-0"
          >
            <div className="w-full flex flex-col gap-6">
              <input type="hidden" name="view" value="cm" />
              <input type="hidden" name="to" value="info@NeCare.com" />
              <div className="flex flex-col ">
                <label className="text-gray-800 pl-1 pb-0.5">
                  Select your options
                </label>
                <select
                  className="w-full outline-none border py-2 px-4 bg-white text-gray-800"
                  name="su"
                  value={option}
                  onChange={(e) => setOption(e.target.value)}
                >
                  <option value="Feedback">Feedback</option>
                  <option value="Client Enquiry">Client Enquiry</option>
                  <option value="Client Requiest">Client Request</option>
                </select>
              </div>
              <div className="flex flex-col ">
                <label className="text-gray-800 pl-1 pb-0.5">Your Name</label>
                <input
                  required
                  onChange={(e) => setName(e.target.value)}
                  className="w-full outline-none border py-2 px-4 bg-white placeholder:"
                  placeholder="Full Name"
                />
              </div>
              <div className="flex flex-col ">
                <label className="text-gray-800 pl-1 pb-0.5">Your Email</label>
                <input
                  type="email"
                  required
                  name="from"
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full outline-none border py-2 px-4 bg-white placeholder:"
                  placeholder="Full Name"
                  value={email}
                />
              </div>
              <div className="flex flex-col ">
                <label className="text-gray-800 pl-1 pb-0.5">
                  Your Message (optional)
                </label>
                <textarea
                  required
                  value={message}
                  className="resize-none w-full h-[200px] outline-none border py-2 px-2 bg-white placeholder:"
                  placeholder="Enter your message"
                  onChange={(e) => setMessage(e.target.value)}
                />
              </div>
              <input type="hidden" name="body" value={`${name}\n${message}`} />
            </div>
            <button
              type="submit"
              className="w-full bg-blue-10 text-white mt-4 px-2 py-2 md:w-[150px]"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </motion.div>

      <Footer />
    </>
  );
}
export default Contact;
