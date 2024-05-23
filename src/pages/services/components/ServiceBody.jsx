import { images, listOfServices } from "../../../data/services";
import { motion } from "framer-motion";
import ServiceCard from "./ServiceCard";

export default function ServicesBody() {
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
            className="text-3xl text-blue-500 font-bold uppercase"
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
          <div className="grid grid place-items-center justify-center md:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-7 mt-10">
            {listOfServices.map((card, i) => {
              return (
                <ServiceCard
                  key={i}
                  desc={card.desc}
                  title={card.name}
                  image={images[i]}
                  index={i}
                />
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
