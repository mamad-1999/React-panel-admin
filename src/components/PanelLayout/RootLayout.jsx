import { Outlet } from "react-router-dom";
import { Suspense } from "react";
import Loading from "../Loading/Loading";

function RootLayout() {
  return (
    <>
      <Suspense fallback={<Loading />}>
        <Outlet />
      </Suspense>
    </>
  );
}

export default RootLayout;
