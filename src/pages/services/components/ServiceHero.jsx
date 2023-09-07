import Nav from "../../../layouts/Nav";
import BreadCrumb, {
  BreadCrumbItem,
  getBreads,
} from "../../../components/BreadCrumb";
import { motion } from "framer-motion";

export default function ServiceHero() {
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
