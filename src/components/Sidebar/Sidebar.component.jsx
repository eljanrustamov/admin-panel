import React, { useState, useEffect } from "react";
import SearchNavbar from "../SearchNavbar/SearchNavbar.component";
import { SidebarWrappaer } from "./Sidebar.styles";
import { useMediaQuery } from "react-responsive";

import SidebarMenuItem from "../SidebarMenuItem/SidebarMenuItem.component";



const Sidebar = ({ isSidebarOpen, setIsSidebarOpen, activeModelIndex, setActiveModelIndex, models }) => {
  const isMobile = useMediaQuery({ maxWidth: 767 });

  return (
    <SidebarWrappaer x={`${isSidebarOpen ? "0px" : "250px"}`}>
      {isMobile && (
        <SearchNavbar
          focusStyle={false}
          width={"150px"}
          border={"1px solid var(--font-gray)"}
        />
      )}

      <ul className="sidebar-menu">
        
        {models.map((model) => (

          <SidebarMenuItem
            active={model.id === activeModelIndex}
            activeModelIndex={model.id}
            setActiveModelIndex={setActiveModelIndex}
            key={model.id}
          >
            {model.icon}
            <span>{model.name}</span>
          </SidebarMenuItem>

        ))}
      </ul>
    </SidebarWrappaer>
  );
};

export default Sidebar;
