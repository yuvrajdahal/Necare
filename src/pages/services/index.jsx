import { motion } from "framer-motion";
import { MdAdminPanelSettings, MdOutlineCleanHands } from "react-icons/md";
import { RiNurseFill, Ri24HoursFill } from "react-icons/ri";
import { TiGroup } from "react-icons/ti";
import { GiHospitalCross } from "react-icons/gi";
import { TbNurse } from "react-icons/tb";
import BreadCrumb, {
  BreadCrumbItem,
  getBreads,
} from "../../components/BreadCrumb";
import Footer from "../../layouts/Footer";
import Nav from "../../layouts/Nav";
import { classNames } from "../../lib/util";
import { AiFillMedicineBox } from "react-icons/ai";
import { FaHandHoldingMedical } from "react-icons/fa";
import { images, listOfServices } from "../../data/services";
import { Link } from "react-router-dom";

function Service() {
  return (
    <>
      <ServiceHero />
      <ServicesSection />
      <Footer />
    </>
  );
}
export default Service;
function ServiceHero() {
  const breads = getBreads();

  return (
    <>
      <Nav />
      <div className="relative z-10 w-full h-[400px] flex flex-col justify-center items-center">
        <div className="absoulte h-full w-full z-10">
          <img
            src="/assets/services.jpg"
            className="h-full w-full object-cover brightness-[60%]"
          />
        </div>

        <div className="absolute bg w-full h-full top-0 backdrop-blur-[1px] py-4 z-50 px-4">
          <div className="h-full w-full flex flex-col  justify-center items-center z-50">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1.2 }}
              className="h-full w-full flex flex-col justify-center items-center gap-2 "
            >
              <div className="text-4xl font-bold text-white uppercase">
                Services
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
      </div>
    </>
  );
}
function ServicesSection() {
  return (
    <div className="">
      <div className="flex flex-col justify-center items-center py-4 container mx-auto">
        <div className="text-center py-6 flex flex-col gap-[5px] justify-center items-center font-poppins ">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2 }}
            className="text-md text-gray-700 uppercase"
          >
            We care for your well being
          </motion.div>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2 }}
            className="text-3xl text-blue-10 font-bold uppercase"
          >
            SERVICES AT NeCare
          </motion.div>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2 }}
            className="mt-4 text-justify md:text-center text-gray-700 px-4"
          >
            Our experience speaks louder than words”. Our specialised nursing
            team prioritises the care needs, provides best care through years of
            experiences in different fields of nursing like Mental health,
            disability care, aged care and ED to medical surgical environment.
            We Pay attention to the needs of the participants and takes
            appropriate action to deliver best services. We are a team of
            diverse group and we welcome equality and diversity to deliver
            quality services to our participants.Service that we provide are :
          </motion.div>
        </div>
        <div className="flex justify-center items-center py-4">
          {/* <div className="w-full grid place-items-center sm:grid-cols-2 lg:grid-cols-3 group shadow-xl shadow-neutral-100 border"> */}
          <div className="grid grid place-items-center justify-center md:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-7 mt-10">
            {listOfServices.map((card, i) => {
              return (
                <ServiceCardV3
                  key={i}
                  desc={card.desc}
                  title={card.name}
                  image={images[i]}
                  index={i}
                />
              );
            })}
          </div>
          {/* <div className="grid md:gap-x-0 lg:gap-x-4 w-full sm:grid-cols-2 lg:grid-cols-3 gap-y-4 place-items-center">
            {listOfServices.map((card, i) => {
              return <ServiceCard key={i} {...card} />;
            })}
          </div> */}
        </div>
      </div>
    </div>
  );
}
const colors = [
  "bg-red-400",
  "bg-blue-10",
  "bg-yellow-400",
  "bg-green-600",
  "bg-indigo-700",
  "bg-teal-700",
  "bg-amber-400",
  "bg-orange-400",
  "bg-emerald-600",
];
function ServiceCardV3({ image, title, desc, index }) {
  return (
    <motion.div
      initial={{ opacity: 0.8, y: -40 }}
      whileInView={{ y: 0, opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: index * 0.2, ease: "linear" }}
      className="h-full w-full bg-white rounded-lg border shadow-md mx-4 max-w-full sm:max-w-sm md:max-w-none overflow-hidden"
    >
      {image ? (
        <img
          className="h-56 lg:h-60 w-full object-cover bg-white"
          src={image}
        />
      ) : (
        <div className="h-[60%] p-10 w-full border-b shadow">
          <img
            class=" h-full w-full object-contain bg-white"
            src={"/assets/logo.png"}
          />
        </div>
      )}
      <div
        className={classNames(
          "p-3 h-[40%] flex flex-col justify-center items-center",
          colors[index]
        )}
      >
        <h3 className="font-semibold text-center text-xl leading-6 text-white ">
          {title}
        </h3>
        {/* <p className="paragraph-normal text-gray-600 line-clamp-4 text-justify">
          {desc}
        </p>*/}
        <Link to={title?.split(" ").join("-").toLowerCase()}>
          <button
            className="my-3 block w-[150px] text-white px-3 py-3 border "
            target="_blank"
          >
            Read More
          </button>
        </Link>
      </div>
    </motion.div>
  );
}

function ServiceCardV2({ icon, name, desc, index }) {
  const Icon = icon;

  return (
    <motion.div
      initial={{ y: -40 }}
      whileInView={{ y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: index * 0.2, ease: "linear" }}
      className="w-full  h-full p-8 flex flex-col items-center text-center group md:lg:xl:border-r bg-white md:lg:xl:border-b hover:bg-slate-50 cursor-pointer"
    >
      <motion.span
        whileHover={{ scale: 0.8 }}
        className={classNames(
          "flex flex-col justify-center items-center px-1 py-1 rounded-full text-white text shadow-lg h-[60px] w-[60px] sm:h-[70px] sm:w-[70px]"
        )}
      >
        <Icon className="h-[80%] w-[80%] text-blue-10" />
      </motion.span>
      <Link to={name?.split(" ").join("-").toLowerCase()}>
        <p class="text-xl font-medium text-slate-700 mt-3 hover:text-blue-10">
          {name}
        </p>
      </Link>
      <p className="mt-2 text-sm text-slate-500 leading-relaxed text-justify">
        <p className="line-clamp-3">{desc}</p>
        <Link to={name?.split(" ").join("-").toLowerCase()}>
          <p className="text-blue-10 hover:underline">Learn More</p>
        </Link>
      </p>
    </motion.div>
  );
}

const ServiceCardv1 = ({ icon, name, desc }) => {
  const Icon = icon;
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 1.2 }}
      className="h-full w-[350px] sm:w-[280px]  md:w-[300px] lg:w-[330px] bg-white rounded-md border flex flex-col items-center gap-4 py-4 "
    >
      <div className="h-[60px] w-[60px] sm:h-[80px] sm:w-[80px] flex justify-center items-center">
        <Icon className="h-[80%] w-[80%] text-blue-10" />
      </div>
      <div className="text-lg sm:text-xl text-gray-600 font-bold px-4 text-center uppercase">
        {name}
      </div>
      <div className="text-gray-600 sm:text-sm sm:text-lg text-justify  px-4 line-clamp-6	self-end">
        {desc}
      </div>
    </motion.div>
  );
};
function Version1() {
  return (
    <div className="h-[70vh] w-full bg-[url('/assets/services.jpg')]  bg-fixed bg-[15%] bg-cover">
      <div className="bg-gradient-to-b from-[#ffffff5c] w-full h-full flex flex-col justify-center items-center gap-2 z-60 backdrop-brightness-[65%]	backdrop-blur-[2px]">
        <Nav />
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2 }}
          className="h-full w-full flex flex-col justify-center items-center gap-2 "
        >
          <div className="text-4xl font-bold text-white uppercase">
            Services
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
  );
}
