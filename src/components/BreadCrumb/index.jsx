import { Children, cloneElement } from "react";
import { routes } from "../../navigation/routes";
import { Link } from "react-router-dom";
const BreadCrumb = ({ className = "", children }) => {
  return (
    <div className={`flex gap-2 items-center ${className}`}>
      {Children.map(children, (child, index) => {
        const isLast = index === children.length - 1;
        return (
          <>
            {cloneElement(child, { width: "100%", height: "100%" })}
            {!isLast && (
              <span className={`${child.props.className}`}>&gt;</span>
            )}
          </>
        );
      })}
    </div>
  );
};
export const BreadCrumbItem = ({ children, to, className = "" }) => {
  return (
    <Link as={"div"} className={`${className}`} to={to}>
      {children}
    </Link>
  );
};
export default BreadCrumb;
export function getBreads() {
  let paths = window.location.pathname.split("/").filter(Boolean);
  let breads = [];
  paths.forEach((element, index) => {
    let path = "/" + element;
    breads.push(path);
  });

  breads = ["/", ...breads];
  breads.forEach((path) => {
    let indexOfSimilarHref = routes.findIndex((route) => {
      return route.path === path;
    });
    breads = breads.filter((bread) => {
      return bread !== path;
    });
    let getCorrectRoute = routes[indexOfSimilarHref];
    breads.push(getCorrectRoute);
  });
  return breads;
}
