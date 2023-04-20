import React, { useState, useEffect } from "react";
import DashboardNavbar from "../DashboardNavbar/DashboardNavbar.component";
import { DashboardWrapper } from "./Dashboard.styles";
import "react-modern-drawer/dist/index.css";
import Sidebar from "../Sidebar/Sidebar.component";
import { TfiLayoutSlider } from "react-icons/tfi";
import { RiCalendarEventLine } from "react-icons/ri";
import SlidersMain from "../../models/Sliders/SlidersMain.component";
import supabase from "../../config/supabaseConfig";

const Dashboard = ({ setIsLogin }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [activeModelIndex, setActiveModelIndex] = useState(0);

  console.log(activeModelIndex)

  useEffect(() => {
    const checkSession = async() => {
      const session = await supabase.auth.getSession();
      if (session) {
        // login olunub, tokenin vaxtini yoxla
        const { data: authData, error } = session;
        if (authData && authData.session.expires_at && new Date(authData.session.expires_at*1000) < new Date()) {
          // tokenin vaxti bitib, logout et
          supabase.auth.signOut();
        }
      }
    }
    checkSession();
  }, []);

  const models = [
    {
      id: 0,
      name: "Sliders",
      icon: (
        <TfiLayoutSlider
          size={18}
          color={`${0 === activeModelIndex ? "#fff" : "var(--icon-color)"}`}
        />
      ),
    },
    {
      id: 1,
      name: "About",
      icon: (
        <RiCalendarEventLine
          size={18}
          color={`${1 === activeModelIndex ? "#fff" : "var(--icon-color)"}`}
        />
      ),
    },
    {
      id: 2,
      name: "Events",
      icon: (
        <RiCalendarEventLine
          size={18}
          color={`${2 === activeModelIndex ? "#fff" : "var(--icon-color)"}`}
        />
      ),
    },
    {
      id: 3,
      name: "News",
      icon: (
        <RiCalendarEventLine
          size={18}
          color={`${3 === activeModelIndex ? "#fff" : "var(--icon-color)"}`}
        />
      ),
    },
    {
      id: 4,
      name: "Newsletters",
      icon: (
        <RiCalendarEventLine
          size={18}
          color={`${4 === activeModelIndex ? "#fff" : "var(--icon-color)"}`}
        />
      ),
    },
    {
      id: 5,
      name: "Volunteers",
      icon: (
        <RiCalendarEventLine
          size={18}
          color={`${5 === activeModelIndex ? "#fff" : "var(--icon-color)"}`}
        />
      ),
    },
    {
      id: 6,
      name: "Gallery",
      icon: (
        <RiCalendarEventLine
          size={18}
          color={`${6 === activeModelIndex ? "#fff" : "var(--icon-color)"}`}
        />
      ),
    },
  ];

  return (
    <DashboardWrapper>
      <DashboardNavbar
        isSidebarOpen={isSidebarOpen}
        setIsSidebarOpen={setIsSidebarOpen}
        setIsLogin={setIsLogin}
      />

      <div className="d-flex justify-content-end w-100 h-100">
        <Sidebar
          isSidebarOpen={isSidebarOpen}
          setIsSidebarOpen={setIsSidebarOpen}
          activeModelIndex={activeModelIndex}
          setActiveModelIndex={setActiveModelIndex}
          models={models}
        />

        {
          // index 0 ?
          <SlidersMain isSidebarOpen={isSidebarOpen} setIsSidebarOpen={setIsSidebarOpen}/>

          // index - 1
          // <AboutMain/>

          // index - 2
          // <EventsMain/>
        }
      </div>
    </DashboardWrapper>
  );
};

export default Dashboard;

