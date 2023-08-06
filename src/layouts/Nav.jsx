import { motion } from "framer-motion";
import { AiFillCaretDown, AiFillTwitterSquare } from "react-icons/ai";
import { BsInstagram } from "react-icons/bs";
import { FaFacebookSquare } from "react-icons/fa";
import { ImWhatsapp } from "react-icons/im";
import { IoLocationSharp } from "react-icons/io5";
import { Disclosure, Menu, Transition } from "@headlessui/react";
import { BiMenu } from "react-icons/bi";
import { Link, NavLink } from "react-router-dom";
import { classNames } from "../lib/util";
import { navigationLinks } from "../navigation/routes";
import React, { useEffect, useRef, useState } from "react";
import useOverflow from "../hooks/useOverflow";

export default NavVersion1;
function NavVersion1() {
  const [isOpen, setOpen] = useState(false);
  const [show, setShow] = useState([false, 0]);
  const [showForMobile, setShowForMobile] = useState(false);
  const [showContactMenu, setShowContactMenu] = useState(false);
  const [showAboutMenu, setShowAboutMenu] = useState(false);
  const [isShowingModal, setShowingModal] = useState(false);
  const [isModalOnCursor, setModalOnCursor] = useState(false);
  const [isHoveringOnTheNav, setIsHoveringOnTheNav] = useState(false);
  useEffect(() => {
    let interval;
    // if (isShowingModal && show[0]) {
    // interval = setTimeout(() => {
    //   setShow((prev) => [false, prev[1]]);
    // }, 800);
    // }
    if (
      isModalOnCursor === false &&
      isShowingModal &&
      isHoveringOnTheNav == false
    ) {
      interval = setTimeout(() => {
        setShow((prev) => [false, prev[1]]);
      }, 800);
    }
    return () => clearTimeout(interval);
  }, [isShowingModal, show[0], isHoveringOnTheNav]);
  return (
    <>
      <Disclosure as="nav" className="h-[100px] w-full relative bg-white ">
        <div className="font-poppins h-full w-full shadow z-50 ">
          <div className="flex justify-between px-4 container mx-auto">
            <NavLink to="/">
              <div className="relative top-2 w-[140px]">
                <img src="/assets/logo.png" />
              </div>
            </NavLink>

            <div className="flex flex-col items-start justify-center gap-3">
              <div className="hidden md:flex gap-4 items-center">
                <div className="flex justify-center items-center gap-1 text-[10px] text-slate-500 relative -left-1">
                  <IoLocationSharp className="text-slate-500" />
                  Nepal, Kathmandu Budhanilkantha, 44622
                </div>
                <div className="flex flex-col justify-center md:justify-start items-center md:items-start">
                  <div className="flex justify-center  items-center gap-4">
                    <FaFacebookSquare
                      className="text-slate-500 cursor-pointer"
                      size={10}
                    />
                    <BsInstagram
                      className="text-slate-500 cursor-pointer"
                      size={10}
                    />
                    <AiFillTwitterSquare
                      className="text-slate-500 cursor-pointer"
                      size={12}
                    />
                    <ImWhatsapp
                      className="text-slate-500 cursor-pointer"
                      size={10}
                    />
                  </div>
                </div>
              </div>

              <div className="gap-8 hidden md:flex justify-center items-center">
                {navigationLinks.map((link, i) => (
                  <div
                    aria-controls={"mobile-menu"}
                    aria-expanded={"false"}
                    className={classNames(
                      "cursor-pointer lg:text-xl font-medium hover:text-blue-10 ",
                      window.location.pathname === link.href
                        ? "transition-all duration-300 ease-in-out text-[17px] text-blue-10 font-semibold underline underline-offset-[42px] decoration-blue-10 decoration-4"
                        : "/" + window.location.pathname.split("/")[1] ===
                          link.href
                        ? "transition-all duration-300 ease-in-out text-[17px] text-blue-10 font-semibold underline underline-offset-[42px] decoration-blue-10 decoration-4"
                        : "text-slate-500 hover:underline hover:underline-offset-[42px] hover:decoration-blue-10 hover:decoration-4"
                    )}
                  >
                    {link?.children ? (
                      <NavLinkWithDropdown navLink={link} i={i} />
                    ) : (
                      <NavLink to={link.href} key={i}>
                        {link.name}
                      </NavLink>
                    )}
                  </div>
                ))}
              </div>

              <div className="flex relative top-2 justify-end">
                <Disclosure.Button
                  onClick={() => setOpen((prev) => !prev)}
                  className={" block md:hidden "}
                >
                  <BiMenu className="w-10 h-10 text-blue-10 z-50" />
                </Disclosure.Button>
              </div>
            </div>
          </div>
        </div>
        <div className="absolute bg-white w-full z-50 top-24 md:hidden">
          <Disclosure.Panel>
            <div className="space-y-1 px-2 pt-2 pb-3">
              {navigationLinks
                .filter(
                  (item) =>
                    item.name !== "Our Services" &&
                    item.name !== "Contact Us" &&
                    item.name !== "About Us"
                )
                .map((item, i) => (
                  <div key={i} onClick={() => setOpen(false)}>
                    <Disclosure.Button as={"div"}>
                      <NavLink
                        to={item.href}
                        className={classNames(
                          "text-neutral-500 active:bg-blue-10 active:text-white",
                          "block px-3 py-2 rounded-md text-base font-medium outline-blue-10"
                        )}
                      >
                        {item.name}
                      </NavLink>
                    </Disclosure.Button>
                  </div>
                ))}

              <div
                onClick={() => {
                  setShowAboutMenu((prev) => !prev);
                }}
                className={classNames(
                  "text-neutral-500 active:bg-blue-10 active:text-white flex gap-2 justify-between items-center",
                  "block px-3 py-2 rounded-md text-base font-medium outline-blue-10"
                )}
              >
                About Us
                <AiFillCaretDown />
              </div>

              {showAboutMenu && (
                <ShowMenu
                  toggle={showAboutMenu}
                  array={["About", ...navigationLinks[1].children]}
                  conditions={(i, child) =>
                    i === 0
                      ? `/${child?.split(" ").join("-").toLowerCase()}`
                      : `/about/${child?.split(" ").join("-").toLowerCase()}`
                  }
                />
              )}
              <div
                onClick={() => {
                  setShowForMobile((prev) => !prev);
                }}
                className={classNames(
                  "text-neutral-500 active:bg-blue-10 active:text-white flex gap-2 justify-between items-center",
                  "block px-3 py-2 rounded-md text-base font-medium outline-blue-10"
                )}
              >
                Our Services <AiFillCaretDown />
              </div>

              {showForMobile && (
                <ShowMenu
                  toggle={showForMobile}
                  array={["Services", ...navigationLinks[2].children]}
                  conditions={(i, child) =>
                    i === 0
                      ? `/${child?.split(" ").join("-").toLowerCase()}`
                      : `/services/${child?.split(" ").join("-").toLowerCase()}`
                  }
                />
              )}
              <div
                className={classNames(
                  "bg-blue-10 text-white",
                  "block px-3 py-2 mt-2 rounded-md text-base font-medium outline-blue-10 flex justify-between items-center"
                )}
                onClick={() => {
                  setShowContactMenu((prev) => !prev);
                }}
              >
                <button>Contact Us</button>
                <AiFillCaretDown className="relative top-.5" />
              </div>
              {showContactMenu && (
                <ShowMenu
                  array={["Contact", ...navigationLinks[3].children]}
                  toggle={showContactMenu}
                  conditions={(i, child) => {
                    if (i === 0) {
                      return `/${child?.split(" ").join("-").toLowerCase()}`;
                    } else {
                      return `/contact/${child
                        ?.split(" ")
                        .join("-")
                        .toLowerCase()}`;
                    }
                  }}
                />
              )}
              <div className="flex md:hidden px-3 justify-start pt-4 gap-4 items-center">
                <div className="flex justify-center items-center gap-1 text-[12px] text-slate-500 relative -left-1">
                  <IoLocationSharp className="text-slate-500" />
                  31 Vestley Drive Mernda, VIC, 3754
                </div>
                <div className="flex flex-col justify-center md:justify-start items-center md:items-start">
                  <div className="flex justify-center  items-center gap-4">
                    <FaFacebookSquare
                      className="text-slate-500 cursor-pointer"
                      size={12}
                    />
                    <BsInstagram
                      className="text-slate-500 cursor-pointer"
                      size={12}
                    />
                    <AiFillTwitterSquare
                      className="text-slate-500 cursor-pointer"
                      size={13}
                    />
                    <ImWhatsapp
                      className="text-slate-500 cursor-pointer"
                      size={12}
                    />
                  </div>
                </div>
              </div>
            </div>
          </Disclosure.Panel>
        </div>
      </Disclosure>
    </>
  );
}
function ShowMenu({ array, conditions, toggle = false }) {
  return (
    <Menu
      as="div"
      className="relative inline-block md:hidden text-left w-full z-[100]"
    >
      <Transition
        show={toggle}
        as={React.Fragment}
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
      >
        <Menu.Items className=" border w-full bg-white rounded-md shadow-lg py-1 focus:outline-none">
          {array.map((child, i) => (
            <Menu.Item key={child}>
              {({ active }) => (
                <NavLink
                  key={child}
                  to={conditions(i, child)}
                  className={`${
                    active
                      ? "bg-blue-10 text-white  border-b"
                      : "text-slate-500"
                  } block px-4 py-2 text-sm ${
                    array.length - 1 !== i && "border-b border-slate-200"
                  }`}
                >
                  <Disclosure.Button as={"div"}>{child}</Disclosure.Button>
                </NavLink>
              )}
            </Menu.Item>
          ))}
        </Menu.Items>
      </Transition>
    </Menu>
  );
}

const NavLinkWithDropdown = ({ navLink, i }) => {
  const [showDropdown, setShowDropdown] = useState(false);

  const handleMouseEnter = () => {
    setShowDropdown(true);
  };

  const handleMouseLeave = () => {
    setShowDropdown(false);
  };

  return (
    <>
      <Menu
        as="div"
        className=" relative z-50 inline-block text-left"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <div>
          <Menu.Button className="z-50">
            <NavLink to={navLink.href}>
              {navLink.children ? (
                <div className="flex gap-2 items-center">
                  {navLink.name}
                  <AiFillCaretDown size={12} />
                </div>
              ) : (
                navLink.name
              )}
            </NavLink>
          </Menu.Button>
        </div>

        <div
          className={classNames(
            "absolute z-50 top-9",
            navigationLinks.length - 1 === i && "right-10"
          )}
        >
          <Transition
            show={showDropdown}
            as={React.Fragment}
            enter="transition ease-out duration-200"
            enterFrom="opacity-0 translate-y-1"
            enterTo="opacity-100 translate-y-0"
            leave="transition ease-in duration-150"
            leaveFrom="opacity-100 translate-y-0"
            leaveTo="opacity-0 translate-y-1"
          >
            <Menu.Items
              static
              className={classNames(
                "border w-48 bg-white rounded-md shadow-lg py-1 focus:outline-none "
              )}
            >
              {navLink.children.map((dropdownLink, dropIndex) => {
                return (
                  <Menu.Item key={dropdownLink}>
                    {({ active }) => (
                      <div className=" block">
                        <NavLink
                          to={`${navLink.href}/${dropdownLink
                            ?.split(" ")
                            .join("-")
                            .toLowerCase()}`}
                          className={`${
                            active ? "bg-blue-10 text-white" : "text-slate-500"
                          } block px-4 py-2 text-sm  border-slate-200 font-light ${
                            navLink.length - 1 === dropIndex ? "" : "border-b"
                          }`}
                        >
                          {dropdownLink}
                        </NavLink>
                      </div>
                    )}
                  </Menu.Item>
                );
              })}
            </Menu.Items>
          </Transition>
        </div>
      </Menu>
    </>
  );
};
