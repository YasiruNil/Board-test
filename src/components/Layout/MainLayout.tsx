import { Outlet } from "react-router-dom";
import Header from "../Header";
import Sidebar from "../Sidebar";
import { useEffect, useState } from "react";

function MainLayout() {
  const [showNav, setShowNav] = useState(true);

  const handleResize = () => {
    if (innerWidth <= 960) {
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
    <div className="no-scrollbar overflow-y-hidden">
      {/* header */}
      <Header />
      <div className="flex h-[calc(100vh-80px)]">
        {/* sidebar */}
        <Sidebar showNav={showNav} />
        {/* dashboard */}
        <Outlet context={{ isNavShow: showNav }} />
      </div>
    </div>
  );
}

export default MainLayout;
