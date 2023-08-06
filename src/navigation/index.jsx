import { Suspense } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { element } from "./routes";
import Loading from "../components/Loading";

const PageRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        {element.map((route, i) => {
          const LayoutElement = route.element;
          return (
            <Route
              key={route.path}
              path={route.path}
              element={<LayoutElement />}
            >
              {route.children.map((child) => {
                // nested childs
                return childrenElement({ child });
              })}
            </Route>
          );
        })}
      </Routes>
    </BrowserRouter>
  );
};
export default PageRoutes;
const childrenElement = ({ child }) => {
  const RootElement = child.element;

  return (
    <Route
      path={child.path}
      key={child.path}
      element={
        <Suspense fallback={<Loading />}>
          <RootElement />
        </Suspense>
      }
    >
      {child?.children?.map((child) => childrenElement({ child: child }))}
    </Route>
  );
};
