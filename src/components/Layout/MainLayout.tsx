import { Outlet } from "react-router-dom";
import Header from "../Header";
import Sidebar from "../Sidebar";
import { useEffect, useState } from "react";

function MainLayout() {
  const [showNav, setShowNav] = useState(true);

  const handleResize = () => {
    if (innerWidth <= 768) {
      setShowNav(false);
    } else {
      setShowNav(true);
    }
  };

  useEffect(() => {
    if (typeof window != undefined) {
      addEventListener("resize", handleResize);
    }

    return () => {
      removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div>
      {/* header */}
      <Header />
      <div className="flex h-[calc(100vh-80px)]">
        <Sidebar showNav={showNav} />
        {/* sidebar */}
        {/* dashboard */}
        <Outlet />
      </div>
    </div>
  );
}

export default MainLayout;
