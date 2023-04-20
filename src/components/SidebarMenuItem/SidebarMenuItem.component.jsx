import React from "react";
import { SidebarMenuItemStyles } from "./SidebarMenuItem.styles";
import { RiCalendarEventLine, RiLayoutRight2Line } from "react-icons/ri";

const SidebarMenuItem = ({ active, children, activeModelIndex,setActiveModelIndex }) => {
  return (
    <SidebarMenuItemStyles active={active} onClick={() => setActiveModelIndex(activeModelIndex)}>
      <div>
        {
            children
        }
      </div>
    </SidebarMenuItemStyles>
  );
};

export default SidebarMenuItem;
