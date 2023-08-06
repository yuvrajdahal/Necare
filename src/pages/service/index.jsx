import Nav from "../../layouts/Nav";
import Footer from "../../layouts/Footer";
import { images, listOfServicesv2 } from "../../data/services";
import { motion } from "framer-motion";
import { Link, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
function Service() {
  const [serviceContent, setServiceContent] = useState(null);
  const serviceName = window.location.pathname
    .split("/")[2]
    .split("-")
    .join(" ")
    .toUpperCase();

  const hardCheck = listOfServicesv2.find((service, i) => {
    return (
      service.name.split(" ").join("-").toLowerCase() ===
      window.location.pathname.split("/")[2]
    );
  });
  const Description = hardCheck.desc;
  const Icon = hardCheck.icon;
  const location = useLocation();
  useEffect(() => {
    setServiceContent(hardCheck);
  }, [location]);
  return (
    <>
      <Nav />
      <div className="z-10 relative w-full h-[400px]  flex flex-col justify-center items-center">
        <div className="absoulte h-full w-full z-10 ">
          <img
            src="/assets/services.jpg"
            className="h-full w-full object-cover brightness-[60%]"
          />
        </div>
        <div
          className="w-full h-full absolute z-50 backdrop-blur-[2px]"
          key={hardCheck}
        >
          <div className="h-full w-full container mx-auto ">
            <motion.div
              key={hardCheck}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1 }}
              className="h-full w-full  flex h-full flex-col justify-center items-center font-poppins"
            >
              <div className="text-3xl lg:text-5xl font-semibold text-white text-center">
                {hardCheck.name.toUpperCase()}
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
                <Link to="/services">
                  <span className="cursor-pointer text-white text-sm md:text-lg">
                    Services
                  </span>
                </Link>
                <span className="cursor-pointer text-white text-sm md:text-lg">
                  &gt;
                </span>

                <span className="cursor-pointer text-white text-sm md:text-lg">
                  {hardCheck.name.toUpperCase()}
                </span>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
      <div
        className=" my-4 w-full flex flex-col-reverse md:flex-row container mx-auto "
        key={hardCheck}
      >
        <div className="w-full md:w-[50%] lg:p-12  ">
          <div className="flex flex-col px-4 md:items-start gap-6 p-5">
            <div className="font-semibold text-blue-10 mt-4 text-center md:text-left text-3xl ">
              {hardCheck?.name?.toUpperCase()}
            </div>
            <div className="px-2 md:px-0 text-justify text-lg">
              <Description />
            </div>
          </div>
        </div>
        <div className="h-[450px] md:w-[50%]  flex flex-col justify-center items-center p-10">
          {hardCheck?.image ? (
            <img
              src={hardCheck?.image}
              key={hardCheck?.image}
              className="h-full bg-slate-300 w-full object-cover"
            />
          ) : (
            <div className="h-full w-full bg-slate-300" />
          )}
        </div>
      </div>
      <Footer />
    </>
  );
}
export default Service;
