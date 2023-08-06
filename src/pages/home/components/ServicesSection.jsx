import { motion } from "framer-motion";
import { MdAdminPanelSettings, MdOutlineCleanHands } from "react-icons/md";
import { classNames } from "../../../lib/util";
import { RiNurseFill, Ri24HoursFill } from "react-icons/ri";
import { TiGroup } from "react-icons/ti";
import { GiHospitalCross } from "react-icons/gi";
import { TbNurse } from "react-icons/tb";
import { Link } from "react-router-dom";
import { BsArrowRight } from "react-icons/bs";
import { AiFillMedicineBox } from "react-icons/ai";
import { FaHandHoldingMedical } from "react-icons/fa";
import { images } from "../../../data/services";

function ServicesSectionV0() {
  return (
    <>
      <div className="bg-white ">
        <div className="flex flex-col justify-center items-center py-4 container mx-auto">
          <div className="text-center py-6 flex flex-col gap-[5px]">
            <div className="text-md text-gray-700 font-poppins uppercase">
              We care for your well being
            </div>
            <div className="text-3xl text-blue-10 font-bold uppercase">
              SERVICES AT NeCare
            </div>
          </div>
          <div className="w-full grid place-items-center sm:grid-cols-2 lg:grid-cols-3 group shadow-xl shadow-neutral-100 ">
            {listOfServices.map((card, i) => {
              return <ServiceCardV2 key={i} {...card} index={i} />;
            })}
          </div>
          <div className="w-full mt-6 flex justify-center">
            <Link to="/services">
              <span className="flex justify-center items-center gap-4 text-lg text-blue-10 cursor-pointer underline-offset-4 ">
                Load More <BsArrowRight />{" "}
              </span>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
function ServicesSection() {
  return (
    <div className="flex flex-col justify-center items-center py-4 container mx-auto">
      <div className="text-center py-6 flex flex-col gap-[5px]">
        <div className="text-md text-gray-700 font-poppins uppercase">
          We care for your well being
        </div>
        <div className="text-3xl text-blue-10 font-bold uppercase">
          SERVICES AT NeCare
        </div>
      </div>
      <div className="grid justify-center md:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-7 mt-10">
        {listOfServices.map((service, i) => {
          return (
            <ServiceCardV3
              image={images[i]}
              title={service.title}
              index={i}
              desc={service.desc}
              key={i}
            />
          );
        })}
      </div>
      <div className="w-full mt-6 flex justify-center">
        <Link to="/services">
          <span className="flex justify-center items-center gap-4 text-lg text-blue-10 cursor-pointer underline-offset-4 ">
            Load More <BsArrowRight />{" "}
          </span>
        </Link>
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
];
function ServiceCardV3({ image, title, desc, index }) {
  return (
    <motion.div
      initial={{ opacity: 0.8, y: -40 }}
      whileInView={{ y: 0, opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: index * 0.2, ease: "linear" }}
      className="h-full bg-white rounded-lg border shadow-md mx-4 max-w-full sm:max-w-sm md:max-w-none overflow-hidden"
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
        <Link to={"services/" + title?.split(" ").join("-").toLowerCase()}>
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
export default ServicesSection;
function ServiceCardV2({ icon, title, desc, index }) {
  const Icon = icon;

  return (
    <motion.div
      initial={{ y: -10, opacity: 0 }}
      whileInView={{ opacity: 1, y: 10 }}
      viewport={{ once: true }}
      transition={{ duration: index * 0.2 }}
      className="w-full h-full p-8 flex flex-col bg-white items-center text-center group border md:border-0  md:lg:xl:border-r md:lg:xl:border-b hover:bg-slate-50 cursor-pointer"
    >
      <motion.span
        whileHover={{ scale: 0.8 }}
        className={classNames(
          "flex flex-col justify-center items-center px-1 py-1 rounded-full text-white text shadow-lg h-[60px] w-[60px] sm:h-[70px] sm:w-[70px]"
        )}
      >
        <Icon className="h-[80%] w-[80%] text-blue-10" />
      </motion.span>{" "}
      <Link to={"services/" + title?.split(" ").join("-").toLowerCase()}>
        <p className="text-xl font-medium text-slate-700 mt-3 hover:text-blue-10">
          {title}
        </p>
      </Link>
      <p className="mt-2 text-sm text-slate-500 leading-relaxed text-justify">
        <p className="line-clamp-3">{desc}</p>
        <Link to={"services/" + title?.split(" ").join("-").toLowerCase()}>
          <p className="text-blue-10 hover:underline">Learn More</p>
        </Link>
      </p>
    </motion.div>
  );
}

const ServiceCard = ({ icon, title, desc }) => {
  const Icon = icon;
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 1.2 }}
      className="h-full lg:w-full bg-white rounded-md border flex flex-col items-center gap-4 py-4 "
    >
      <div className="h-[60px] w-[60px] sm:h-[70px] sm:w-[70px] flex justify-center items-center">
        <Icon className="h-[80%] w-[80%] text-blue-10" />
      </div>
      <div className="text-lg font-medium px-4 text-center uppercase text-xl text-slate-700 mt-3 hover:text-blue-10">
        {title}
      </div>
      <div className="text-gray-600 sm:text-sm sm:text-lg text-justify  px-4 line-clamp-6	">
        {desc}
      </div>
    </motion.div>
  );
};
const listOfServices = [
  {
    icon: TbNurse,
    title: "Nursing Care",
    desc: `Our nursing care includes providing care and support for adaptation, knowledge about diagnosis, its consequences and preventive strategies which includes Tracheostomy care etc.
`,
  },
  {
    icon: Ri24HoursFill,
    title: "Support Independent Living",
    desc: "We help you live in home by providing support you need. It includes help or supervision on daily tasks like personal care or cooking meals. We also provide you 24/7 support including overnight supervision.",
  },
  {
    icon: GiHospitalCross,
    title: "Post Hospital care",
    desc: "Following a hospitalisation, transition care aids in your recovery. It offers short-term, specialised care and support to assist you in regaining your functional freedom and confidence faster and prevent the need for longer-term care.",
  },
  {
    icon: TiGroup,
    title: "Social and community participation",
    desc: "We can connect you with community centres and social groups so you can engage in social activities. It gives you a chance to express yourself and make friends and connections outside of your house.",
  },
  {
    icon: MdOutlineCleanHands,
    title: "Personal care plus day and life style options",
    desc: "The complexity of handling home care is reduced by our skilled team. We provide you with assistance with personal care, companionship, domestic duties, transportation, gardening etc.",
  },
  {
    icon: RiNurseFill,
    title: "Community nursing and care",
    desc: "As a community nursing care provider, Necare provides you with a variety of services including community health nursing care after a hospital stay, which can include help with: wound care, taking medication etc.",
  },
];
