import { Outlet } from "react-router-dom";
function PageLayout() {
  return (
    <div className="bg-background ">
      <Outlet />
    </div>
  );
}
export default PageLayout;
