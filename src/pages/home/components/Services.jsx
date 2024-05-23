import { motion } from "framer-motion";
import { MdOutlineCleanHands } from "react-icons/md";
import { classNames } from "../../../lib/util";
import { RiNurseFill, Ri24HoursFill } from "react-icons/ri";
import { TiGroup } from "react-icons/ti";
import { GiHospitalCross } from "react-icons/gi";
import { TbNurse } from "react-icons/tb";
import { Link } from "react-router-dom";
import { BsArrowRight } from "react-icons/bs";
import { images } from "../../../data/services";

function ServicesSection() {
  return (
    <div className="flex flex-col justify-center items-center py-4 container mx-auto">
      <div className="text-center py-6 flex flex-col gap-[5px]">
        <div className="text-md text-gray-700 font-poppins uppercase">
          We care for your well being
        </div>
        <div className="text-3xl text-blue-500 font-bold uppercase">
          SERVICES AT NeCare
        </div>
      </div>
      <div className="grid justify-center md:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-7 mt-10">
        {listOfServices.map((service, i) => {
          return (
            <ServiceCard
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
          <span className="flex justify-center items-center gap-4 text-lg text-blue-500 cursor-pointer underline-offset-4 ">
            Load More <BsArrowRight />{" "}
          </span>
        </Link>
      </div>
    </div>
  );
}
const colors = [
  "bg-red-400",
  "bg-blue-500",
  "bg-yellow-400",
  "bg-green-600",
  "bg-indigo-700",
  "bg-teal-700",
];
function ServiceCard({ image, title, desc, index }) {
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
export default ServicesSection;
