import { useEffect, useState, cloneElement, Children } from "react";
import { classNames } from "../../lib/util";
const Carosuel = ({
  children,
  autoPlay = true,
  index = 0,
  showDots = true,
}) => {
  const [activeIndex, setIndex] = useState(index);
  const [isPaused, setPaused] = useState(false);

  let translate = `-${activeIndex * 100}%`;

  // validates and update index
  const updateIndex = (newIndex) => {
    if (newIndex < 0) {
      newIndex = Children.count(children) - 1;
      console.log(newIndex);
    } else if (newIndex >= Children.count(children)) {
      newIndex = 0;
    }
    setIndex(newIndex);
  };
  // run infinitely clearing previous intervals
  useEffect(() => {
    if (!autoPlay) return;
    const interval = setInterval(() => {
      updateIndex(activeIndex + 1);
    }, 5000);
    return () => clearInterval(interval);
  }, [activeIndex]);

  useEffect(() => {
    updateIndex(activeIndex + 1);
  }, [index]);

  return (
    <div className="relative overflow-hidden h-full w-full ">
      <div
        className={`whitespace-nowrap h-full w-full duration-[1000ms]`}
        style={{
          transform: `translateX(${translate})`,
        }}
      >
        {Children.map(children, (child, _index) => {
          return cloneElement(child, { width: "100%", height: "100%" });
        })}
      </div>
      <div className="w-full flex gap-2 absolute bottom-5 justify-center items-center">
        {showDots &&
          Children.map(children, (child, index) => {
            return (
              <div
                className={classNames(
                  ` h-4 w-4 rounded-full opacity-50 cursor-pointer`,
                  index === activeIndex ? "bg-blue-10 " : "bg-white"
                )}
                onClick={() => updateIndex(index)}
              ></div>
            );
          })}
      </div>
    </div>
  );
};
export default Carosuel;
