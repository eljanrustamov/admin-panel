import React, { useState, useEffect } from "react";
import DashboardNavbar from "../DashboardNavbar/DashboardNavbar.component";
import { DashboardWrapper } from "./Dashboard.styles";
import "react-modern-drawer/dist/index.css";
import Sidebar from "../Sidebar/Sidebar.component";
// icons
import { TfiLayoutSlider, TfiGallery } from "react-icons/tfi";
import { RiCalendarEventLine } from "react-icons/ri";
import { BsInfoCircle } from "react-icons/bs";
import { GiNewspaper } from "react-icons/gi";
import { SlEnvolopeLetter } from "react-icons/sl";
import { FiUsers } from "react-icons/fi";

// 
import SlidersMain from "../../models/Sliders/SlidersMain.component";
import AboutMain from "../../models/About/AboutMain.component";
import EventsMain from "../../models/Events/EventsMain.component";
import NewsMain from "../../models/News/NewsMain.component";
import NewslettersMain from '../../models/Newsletters/NewslettersMain.component'
import VolunteersMain from '../../models/Volunteers/VolunteersMain.component'
import GalleryMain from '../../models/Gallery/GalleryMain.component'
import supabase from "../../config/supabaseConfig";

const Dashboard = ({ setIsLogin }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [activeModelIndex, setActiveModelIndex] = useState(0);

  console.log(activeModelIndex);

  useEffect(() => {
    const checkSession = async () => {
      const session = await supabase.auth.getSession();
      if (session) {
        // login olunub, tokenin vaxtini yoxla
        const { data: authData, error } = session;
        if (
          authData &&
          authData.session?.expires_at &&
          new Date(authData.session?.expires_at * 1000) < new Date()
        ) {
          // tokenin vaxti bitib, logout et
          supabase.auth.signOut();
        }
      }
    };
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
        <BsInfoCircle
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
        <GiNewspaper
          size={18}
          color={`${3 === activeModelIndex ? "#fff" : "var(--icon-color)"}`}
        />
      ),
    },
    {
      id: 4,
      name: "Newsletters",
      icon: (
        <SlEnvolopeLetter
          size={18}
          color={`${4 === activeModelIndex ? "#fff" : "var(--icon-color)"}`}
        />
      ),
    },
    {
      id: 5,
      name: "Volunteers",
      icon: (
        <FiUsers
          size={18}
          color={`${5 === activeModelIndex ? "#fff" : "var(--icon-color)"}`}
        />
      ),
    },
    {
      id: 6,
      name: "Gallery",
      icon: (
        <TfiGallery
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

        {activeModelIndex === 0 ? (
          <SlidersMain
            isSidebarOpen={isSidebarOpen}
            setIsSidebarOpen={setIsSidebarOpen}
          />
        ) : activeModelIndex === 1 ? (
          <AboutMain
            isSidebarOpen={isSidebarOpen}
            setIsSidebarOpen={setIsSidebarOpen}
          />
        ) : activeModelIndex === 2 ? (
          <EventsMain
            isSidebarOpen={isSidebarOpen}
            setIsSidebarOpen={setIsSidebarOpen}
          />
        ) : activeModelIndex === 3 ? (
          <NewsMain
            isSidebarOpen={isSidebarOpen}
            setIsSidebarOpen={setIsSidebarOpen}
          />
        ) : activeModelIndex === 4 ? (
          <NewslettersMain
            isSidebarOpen={isSidebarOpen}
            setIsSidebarOpen={setIsSidebarOpen}
          />
        ) : activeModelIndex === 5 ? (
          <VolunteersMain
            isSidebarOpen={isSidebarOpen}
            setIsSidebarOpen={setIsSidebarOpen}
          />
        ) : activeModelIndex === 6 ? (
          <GalleryMain
            isSidebarOpen={isSidebarOpen}
            setIsSidebarOpen={setIsSidebarOpen}
          />
        ) : null
      }
      </div>
    </DashboardWrapper>
  );
};

export default Dashboard;
