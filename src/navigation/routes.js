import { lazy } from "react";
import PageLayout from "../layouts/PageLayout";

export function lazyLoad(page) {
  const LazyComp = lazy(() =>
    import(/* @vite-ignore */ `../pages/${page}/index.jsx`)
  );
  return LazyComp;
}

export const element = [
  {
    path: "/",
    element: PageLayout,
    children: [
      {
        path: "/",
        element: lazyLoad("home"),
        name: "Home",
      },
      {
        path: "/contact",
        element: lazyLoad("contact"),
        name: "Contact",
      },
      {
        path: "/about",
        element: lazyLoad("about"),
        name: "About",
      },
      {
        path: "/about/mission-and-vision",
        element: lazyLoad("mission-and-vision"),
        name: "Mission",
      },
      {
        path: "/services",
        element: lazyLoad("services"),
        name: "Services",
      },
      {
        path: "/contact/feedback",
        element: lazyLoad("feedback"),
        name: "Feedback",
      },
      {
        path: "/contact/carrers",
        element: lazyLoad("carrers"),
        name: "Carrers",
      },
      {
        path: "/services/:id",
        element: lazyLoad("service"),
        name: "Service",
      },
    ],
  },
];
export const routes = element[0].children;
export const navigationLinks = [
  {
    href: "/",
    name: "Home",
    private: false,
  },
  {
    href: "/about",
    name: "About Us",
    private: false,
    children: ["Mission And Vision"],
  },

  {
    href: "/services",
    name: "Our Services",
    private: false,
    children: [
      "Nursing Care",
      "Support Independent Living",
      "Post Hospital care",
      "Social and community participation",
      "Personal care plus day and life style options",
      "Community nursing and care",
      "Medication management",
      "Palliative care",
      "Administration",
    ],
  },
  {
    name: "Contact Us",
    href: "/contact",
    private: false,
    children: ["Feedback", "Carrers"],
  },
];
export const footerLinks = [
  {
    name: "Links",
    subLinks: [...navigationLinks],
  },
  {
    name: "Contact Us",
    subLinks: [
      {
        name: "01234569789",
      },
      { name: "01236549878" },
      { name: "012385214782" },
    ],
  },
];
