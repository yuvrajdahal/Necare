import { motion } from "framer-motion";
import { BsPersonFill } from "react-icons/bs";
import { BiTimeFive } from "react-icons/bi";
import { TiGroup } from "react-icons/ti";
import { RiCustomerService2Fill } from "react-icons/ri";
import Footer from "../../layouts/Footer";
import BreadCrumb, {
  BreadCrumbItem,
  getBreads,
} from "../../components/BreadCrumb";
import Nav from "../../layouts/Nav";
import { IoMdCall } from "react-icons/io";
import { Link } from "react-router-dom";

function About() {
  const breads = getBreads();

  return (
    <>
      <Nav />
      <div className="z-10 relative w-full h-[400px]  flex flex-col justify-center items-center">
        <div className="absoulte h-full w-full z-10">
          <img
            src="/assets/group.jpg"
            className="h-full w-full object-cover brightness-[60%]"
          />
        </div>
        <div className="absolute bg w-full h-full top-0 backdrop-blur-[1px] py-4 z-50 px-4">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="h-full w-full flex flex-col justify-center items-center gap-2"
          >
            <div className="text-4xl font-bold text-white uppercase">
              About US
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

      <QouteSection />
      <div className="w-full font-poppins lg:py-0 mt-4 z-10">
        <div className="w-full my-4 bg-[url('/assets/wheelchairman.jpg')] bg-fixed bg-center bg-cover z-10">
          <div className="w-full bg-[#00000070] py-4 md:pt-8">
            <div className="container mx-auto flex flex-col px-2">
              <div className="flex flex-col lg:flex-row  justify-center items-end px-2">
                {/* about */}
                <div className="w-full lg:w-[40%]  bg-[#1e3874] py-4 px-4">
                  <div className="flex justify-start font-semibold items-end text-white uppercase ">
                    About Us
                    <div className="w-[40px] bg-white ml-2 relative bottom-1.5 h-[4px]"></div>
                  </div>
                  <div className="mt-4 text-2xl text-white font-semibold">
                    What We Believe
                  </div>
                  <div className="text-white  text-left pr-2 mt-4">
                    Necare stands out as a premier care provider, unwaveringly
                    committed to delivering top-notch care to its participants.
                    We are a dedicated team of nurses who have come together
                    with the aim of enhancing the lives of differently abled
                    individuals. Our primary focus is to prioritize their needs
                    and facilitate their seamless access to various
                    opportunities that they can seize.
                    <br />
                    <br />
                    We deliver best services to accommodate in different
                    environment. With diverse expertise and experienced support
                    staff we are confident in providing quality care according
                    to the needs of the participants.
                    <br />
                    <br />
                    Our mission is to focus on quality care with the services
                    that we can provide and to preserve human rights, bring out
                    change in people’s lives and the community, and ensure
                    access to safe housing, health care, continuous learning and
                    economic and social inclusion.
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
                      “Just because a man lacks the use of his eyes doesn't mean
                      he lacks vision.”
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
                      "Your present circumstances don't determine where you can
                      go; they merely determine where you start."
                    </div>
                  </div>{" "}
                </div>
              </div>
              <div className="flex flex-col  my-4 lg:px-20">
                <div className="text-lg font-poppins text-white">
                  The Foundation
                </div>
                <div className="text-3xl font-bold font-poppins flex flex-col lg:flex-row  gap-2 text-white uppercase">
                  Our organisation is based on the
                  <div className="flex gap-4">
                    mnemonics
                    <div className="hidden md:block w-[40px] self-end  h-[3px] bg-white"></div>
                  </div>
                </div>
                <div className="flex flex-col justify-start items-start pt-8 pb-4 gap-8 pl-4">
                  <div className="flex justify-center font-poppins items-center gap-6">
                    <div className="h-[50px] w-[50px] rotate-45 flex justify-center items-center bg-blue-10">
                      <div className="text-xl font-bold text-white -rotate-45">
                        N
                      </div>
                    </div>
                    <div className="text-white font-bold text-xl">
                     Nurturing - Cultivating Compassionate Care
                    </div>
                  </div>

                  <div className="flex justify-center font-poppins items-center gap-6">
                    <div className="h-[50px] w-[50px] rotate-45 flex justify-center items-center bg-white">
                      <div className="text-xl font-bold text-blue-10 -rotate-45">
                        E
                      </div>
                    </div>
                    <div className="text-white font-bold text-xl">
                    Empathy - Understanding Hearts
                    </div>
                  </div>
                  <div className="flex justify-center font-poppins items-center gap-6 ">
                    <div className="h-[50px] w-[50px] rotate-45 flex justify-center items-center bg-white">
                      <div className="text-xl font-bold text-blue-10 -rotate-45">
                        C
                      </div>
                    </div>
                    <div className="text-white font-bold text-xl">
                    Compassion - Kindness in Action
                    </div>
                  </div>
                  <div className="flex justify-center font-poppins items-center gap-6 ">
                    <div className="h-[50px] w-[50px] rotate-45 flex justify-center items-center bg-white">
                      <div className="text-xl font-bold text-blue-10 -rotate-45">
                        A
                      </div>
                    </div>
                    <div className="text-white font-bold text-xl">
                    Advocacy - Amplifying Voices
                    </div>
                  </div>
                  <div className="flex justify-center font-poppins items-center gap-6 ">
                    <div className="h-[50px] w-[50px] rotate-45 flex justify-center items-center bg-blue-10">
                      <div className="text-xl font-bold text-white -rotate-45">
                        R
                      </div>
                    </div>
                    <div className="text-white font-bold text-xl">
                    Respect - Honoring Every Soul
                    </div>
                  </div>
                  <div className="flex justify-center font-poppins items-center gap-6 ">
                    <div className="h-[50px] w-[50px] rotate-45 flex justify-center items-center bg-blue-10">
                      <div className="text-xl font-bold text-white -rotate-45">
                        E
                      </div>
                    </div>
                    <div className="text-white font-bold text-xl">
                    Excellence - Pursuit of Perfection
                    </div>
                  </div>

                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}
export default About;
const totals = [
  {
    icon: RiCustomerService2Fill,
    am: "15+",
    name: "Services",
  },
  {
    icon: BsPersonFill,
    am: "30+",
    name: "Doctors",
  },
  {
    icon: TiGroup,
    am: "140+",
    name: "Clients",
  },
  {
    icon: BiTimeFive,
    am: "27+",
    name: "Experince",
  },
];
function QouteSection() {
  return (
    <div className="container mx-auto py-4 md:h-[500px] w-full flex flex-col-reverse	 md:flex-row pt-8 md:pl-8">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
        className="h-full bg-white  w-full md:w-[50%] flex flex-col justify-center  items-center py-4 md:py-0"
      >
        <div className="w-full  flex flex-col items-center md:items-start justify-center md:justify-start px-4 pl-0 md:pl-10">
          <div className="font-poppins text-lg text-gray-700 font-bold pl-1.5 ">
            A Few Words
          </div>
          <div className="flex items-end justify-center md:justify-start gap-2  ">
            <div className="font-bold  pt-4 text-3xl lg:text-5xl font-poppins text-blue-10">
              OUR VISON
            </div>
            <div className="w-12 mb-1 h-[4px] bg-blue-10 hidden md:block"></div>
          </div>
          <div className="font-charmoman  text-3xl sm:text-4xl lg:text-[2.5rem] text-center md:text-left">
            <div className="leading-loose">
              "Empowering <br className="hidden md:block" /> Individuals with{" "}
              <br /> different abilities to
              <br />
              lead an independent life."
            </div>
          </div>
        </div>
      </motion.div>
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
        className="w-full md:w-[50%] h-full px-4"
      >
        <img src="/assets/care1.jpg" className="h-full w-full object-cover" />
      </motion.div>
    </div>
  );
}
function AboutNumberSection() {
  return (
    <div className="container mx-auto flex flex-col justify-center items-center py-6 relative">
      <div className="absolute h-[50px] w-[50px] -top-6 z-50 rotate-45 bg-[#F1F1F1]"></div>
      <div className="grid gap-4 lg:w-[90%] grid-cols-2 md:grid-cols-4 place-content-center place-items-center ">
        {totals.map((achieve, i) => {
          const Icon = achieve.icon;
          return (
            <motion.div
              key={i}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1.2 }}
              className={
                "bg-white h-[200px]  min-w-[150px] lg:w-[185px] shadow border rounded-lg flex flex-col gap-4 items-center justify-center"
              }
            >
              <div className="border rounded-full">
                <div className=" text-blue-10 text-[35px] px-2 py-2 font-bold flex justify-center items-center">
                  <Icon />
                </div>
              </div>
              <div className="text-4xl font-bold text-blue-10 text-center">
                {achieve.am}
              </div>
              <div className="text-lg text-neutral-500 text-center font-light uppercase">
                {achieve.name}
              </div>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}
