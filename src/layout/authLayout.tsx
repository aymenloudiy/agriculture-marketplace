import { Outlet } from "react-router";

const AuthLayout = () => {
  return (
    <div style={{ minHeight: "100vh" }}>
      <Outlet />
    </div>
  );
};

export default AuthLayout;
