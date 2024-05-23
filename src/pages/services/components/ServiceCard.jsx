import { Link } from "react-router-dom";
import { classNames } from "../../../lib/util";
import { motion } from "framer-motion";
const colors = [
  "bg-red-400",
  "bg-blue-500",
  "bg-yellow-400",
  "bg-green-600",
  "bg-indigo-700",
  "bg-teal-700",
  "bg-amber-400",
  "bg-orange-400",
  "bg-emerald-600",
];

export default function ServiceCard({ image, title, index }) {
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
