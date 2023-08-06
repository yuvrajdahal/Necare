import { FaFacebookSquare } from "react-icons/fa";
import { BsInstagram, BsPersonFill } from "react-icons/bs";
import { motion } from "framer-motion";
import { ImWhatsapp } from "react-icons/im";
import { CgWebsite } from "react-icons/cg";
import { IoMdCall } from "react-icons/io";
import { IoLocationSharp } from "react-icons/io5";
import { MdEmail } from "react-icons/md";
import { BiTimeFive } from "react-icons/bi";
import { TiGroup } from "react-icons/ti";
import Nav from "../../layouts/Nav";
import Hero from "./components/Hero";
import ServicesSection from "./components/ServicesSection";
import { RiCustomerService2Fill } from "react-icons/ri";
import { footerLinks } from "../../navigation/routes";
import Footer from "../../layouts/Footer";
import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
function Home() {
  return (
    <>
      <Hero />
      {/* <NumberSection /> */}
      <ServicesSection />
      {/* <About /> */}
      <ContactSection3 />
      <Footer />
    </>
  );
}
export default Home;
const About = () => {
  return (
    <div className="w-full font-poppins lg:py-0">
      <div className="w-full bg-[url('/assets/wheelchairman.jpg')] bg-fixed bg-center bg-cover z-10">
        <div className="w-full   bg-[#00000070] py-4 md:pt-8 ">
          <div className="w-full h-full container mx-auto  flex flex-col lg:flex-row justify-center items-end px-2">
            {/* about */}
            <div className="w-full lg:w-[500px]  bg-[#1e3874] py-4 px-4">
              <div className="flex justify-start font-semibold items-end text-white uppercase ">
                About Us
                <div className="w-[40px] bg-white ml-2 relative bottom-1.5 h-[4px]"></div>
              </div>
              <div className="mt-4 text-2xl text-white font-semibold">
                What We Believe
              </div>
              <div className="text-white  text-left pr-2 mt-4">
                Necare is one of the best care providers who continuously
                focuses to provide quality care to their participants. We are a
                group of Nurses who started to work for the betterment of the
                differently abled people to emphasize more on their priority and
                to make them easy access to the opportunity they can grab.
                <br />
                <br />
                We deliver best services to accommodate in different
                environment. With diverse expertise and experienced support
                staff we are confident in providing quality care according to
                the needs of the participants.
                <br />
                <br />
                Our mission is to focus on quality care with the services that
                we can provide and to preserve human rights, bring out change in
                people’s lives and the community, and ensure access to safe
                housing, health care, continuous learning and economic and
                social inclusion.
              </div>
              <Link to="/about">
                <button className="border h-[40px] w-[40px] mt-6 flex justify-center items-center text-white text-xl cursor-pointer active:bg-[#0a1632]">
                  &gt;
                </button>
              </Link>
            </div>
            {/*  tesamonial section */}
            <div className="w-full  w-full lg:w-[60%] xl:w-[50%] grid grid-cols-2 ">
              <div className="h-full md:h-[200px] w-full bg-blue-10 px-4 pt-6 pb-4">
                <div className="flex gap-1 justify-start font-semibold items-end text-white uppercase ">
                  Stevie
                  <div className="flex gap-4">
                    Wonder
                    <div className="hidden md:block w-[40px] self-end  h-[3px] bg-white"></div>
                  </div>
                </div>
                <div className="text-white text-left pr-2 leading-8 mt-6">
                  “Just because a man lacks the use of his eyes doesn't mean he
                  lacks vision.”
                </div>
              </div>
              <div className="h-full md:h-[200px] z-50 w-full bg-blue-10 pb-4 bg-[url('/assets/person3.jpg')] bg-center md:bg-top  bg-cover backdrop-brightness-40 relative">
                <div className="w-full h-full bg-red absolute flex flex-col justify-center items-center gap-2  backdrop-brightness-75	"></div>
              </div>
              <div className="h-full md:h-[200px] w-full  bg-blue-10 pb-4 bg-[url('/assets/person1.jpg')] bg-top bg-cover bg-no-repeat bg-cover relative">
                <div className="w-full h-full bg-red absolute flex flex-col justify-center items-center gap-2  backdrop-brightness-75	"></div>
              </div>
              <div className="h-full md:h-[200px] w-full   px-4 pt-6 pb-4 bg-blue-10">
                <div className="flex gap-1 justify-start font-semibold items-end text-white uppercase ">
                  Nido
                  <div className="flex gap-4">
                    Qubein
                    <div className="hidden md:block w-[40px] self-end  h-[3px] bg-white"></div>
                  </div>
                </div>
                <div className="text-white text-left pr-2 leading-8 pt-1.5 xl:pt-4 pb-1">
                  "Your present circumstances don't determine where you can go;
                  they merely determine where you start."
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex  justify-between pr-6">
          <div className="flex w-full font-poppins  justify-center relative -left-[100px] items-end font-semibold "></div>
        </div>
      </div>
    </div>
  );
};
function NumberSection() {
  const [isVisible, setIsVisible] = useState(false);

  return (
    <>
      <div className="container mx-auto flex flex-col justify-center items-center py-10">
        <div className="grid gap-4 lg:w-[80%] grid-cols-2 md:grid-cols-4 place-content-center place-items-center py-6">
          {totals.map((achieve, i) => {
            const Icon = achieve.icon;
            return (
              <div
                key={i}
                className={
                  "bg-white h-[200px]  min-w-[150px] lg:w-[185px] shadow border rounded-lg flex flex-col gap-4 items-center justify-center"
                }
              >
                <div className="border rounded-full">
                  <div className=" text-blue-10 text-[35px] px-2 py-2 font-bold flex justify-center items-center">
                    <Icon />
                  </div>
                </div>
                <motion.div
                  animate={{ scale: [1, 1.5, 1] }}
                  viewport={{ once: true }}
                  transition={{ duration: 1 }}
                  className="text-4xl font-bold text-blue-10 text-center"
                >
                  <AnimatedNumber
                    isVisible={isVisible}
                    value={achieve.am}
                  ></AnimatedNumber>
                </motion.div>
                <div className="text-lg text-gray-600 text-center font-light uppercase">
                  {achieve.name}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
  function AnimatedNumber({ value }) {
    const [displayValue, setDisplayValue] = useState(0);
    const ref = useRef();
    useEffect(() => {
      let timeoutId;
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            if (displayValue < value) {
              timeoutId = setTimeout(
                () => setDisplayValue(displayValue + 1),
                60
              );
            }
          }
        },
        { threshold: 0.5 }
      );

      if (ref.current) {
        observer.observe(ref.current);
      }
      return () => {
        if (ref.current) {
          observer.unobserve(ref.current);
        }
        clearTimeout(timeoutId);
      };
    }, [isVisible, displayValue, value]);
    return <div ref={ref}>{displayValue}+</div>;
  }
}

const totals = [
  {
    icon: RiCustomerService2Fill,
    am: 11,
    name: "Services",
    init: 0,
  },
  {
    icon: BsPersonFill,
    am: 30,
    name: "Doctors",
    init: 0,
  },
  {
    icon: TiGroup,
    am: 40,
    name: "Clients",
    init: 0,
  },
  {
    icon: BiTimeFive,
    am: 27,
    name: "Experince",
    init: 0,
  },
];
function Qote() {
  return <div className=""></div>;
}
function ContactSection3() {
  const [name, setName] = useState("");
  const [option, setOption] = useState("value");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const mailtoLink = `https://mail.google.com/mail/u/0/`;
  return (
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
  );
}
