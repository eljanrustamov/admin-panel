import React, { useState } from "react";
import {
  DashboardNavbarWrapper,
  DropdownContent,
  StyledPopup,
  StyledDrawer
} from "./DashboardNavbar.styles";
import { FaBars } from "react-icons/fa";
import { ImExit } from "react-icons/im";
import { VscBell, VscBellDot } from "react-icons/vsc";
import { AiOutlineMail, AiOutlineSearch } from "react-icons/ai";

//
import "reactjs-popup/dist/index.css";
//
import "react-modern-drawer/dist/index.css";

const DashboardNavbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDrawer = () => {
    setIsOpen(prevState => !prevState);
    props.isOpen;
  };

  // 1. side bar acilanda -> DashboardNavbarWrapper => width:86%

  // 2. side bar acilanda -> parent component - Dashboard => align-items:end

  // 3. side bar baglananda -> DashboardNavbarWrapper => width:100%
  // 4. side bar baglananda -> parent component - Dashboard => align-items:center;

  return (
    <>
      <DashboardNavbarWrapper width={`${isOpen ? '86%' : '100%'}`} >
        <div className="navbar-brand">
          <FaBars size={18} cursor={"pointer"} onClick={toggleDrawer} />
          <a href="/">Maker Space</a>
        </div>

        <div className="navbar-right">
          <div className="navbar-search">
            <button>
              <AiOutlineSearch />
            </button>
            <input type={"text"} placeholder="Search here..." />
          </div>

          <div className="navbar-menu">
            <StyledPopup
              arrow={false}
              trigger={
                <div>
                  <VscBell size={20} cursor={"pointer"} />
                </div>
              }
              position="bottom right"
            >
              <DropdownContent>
                <div className="header">
                  <strong>You have 4 new Notifications</strong>
                </div>

                <div className="items">
                  <li className="item">
                    <a href="/">
                      <div className="media">
                        <div className="media-left">
                          <AiOutlineMail size={20} className="text-success" />
                        </div>
                        <div className="media-right">
                          <p className="text">
                            Campaign Holiday Sale is nearly reach budget limit.
                          </p>
                          <span className="timestamp">10:00 AM Today</span>
                        </div>
                      </div>
                    </a>
                  </li>
                  <li className="item">
                    <a href="/">
                      <div className="media">
                        <div className="media-left">
                          <AiOutlineMail size={20} className="text-success" />
                        </div>
                        <div className="media-right">
                          <p className="text">
                            Campaign Holiday Sale is nearly reach budget limit.
                          </p>
                          <span className="timestamp">10:00 AM Today</span>
                        </div>
                      </div>
                    </a>
                  </li>
                  <li className="item">
                    <a href="/">
                      <div className="media">
                        <div className="media-left">
                          <AiOutlineMail size={20} className="text-success" />
                        </div>
                        <div className="media-right">
                          <p className="text">
                            Campaign Holiday Sale is nearly reach budget limit.
                          </p>
                          <span className="timestamp">10:00 AM Today</span>
                        </div>
                      </div>
                    </a>
                  </li>
                  <li className="item">
                    <a href="/">
                      <div className="media">
                        <div className="media-left">
                          <AiOutlineMail size={20} className="text-success" />
                        </div>
                        <div className="media-right">
                          <p className="text">
                            Campaign Holiday Sale is nearly reach budget limit.
                          </p>
                          <span className="timestamp">10:00 AM Today</span>
                        </div>
                      </div>
                    </a>
                  </li>
                  <li className="item">
                    <a href="/">
                      <div className="media">
                        <div className="media-left">
                          <AiOutlineMail size={20} className="text-success" />
                        </div>
                        <div className="media-right">
                          <p className="text">
                            Campaign Holiday Sale is nearly reach budget limit.
                          </p>
                          <span className="timestamp">10:00 AM Today</span>
                        </div>
                      </div>
                    </a>
                  </li>
                  <li className="item">
                    <a href="/">
                      <div className="media">
                        <div className="media-left">
                          <AiOutlineMail size={20} className="text-success" />
                        </div>
                        <div className="media-right">
                          <p className="text">
                            Campaign Holiday Sale is nearly reach budget limit.
                          </p>
                          <span className="timestamp">10:00 AM Today</span>
                        </div>
                      </div>
                    </a>
                  </li>
                  <li className="item">
                    <a href="/">
                      <div className="media">
                        <div className="media-left">
                          <AiOutlineMail size={20} className="text-success" />
                        </div>
                        <div className="media-right">
                          <p className="text">
                            Campaign Holiday Sale is nearly reach budget limit.
                          </p>
                          <span className="timestamp">10:00 AM Today</span>
                        </div>
                      </div>
                    </a>
                  </li>
                </div>
              </DropdownContent>
            </StyledPopup>

            <ImExit size={18} cursor={"pointer"} />
          </div>
        </div>
      </DashboardNavbarWrapper>

      <StyledDrawer
        open={isOpen}
        onClose={toggleDrawer}
        direction="left"
        className="drawer-sidebar"
        enableOverlay={false}
      >
        <div>Elcan adil agzinizi sa</div>
      </StyledDrawer>
    </>
  );
};

export default DashboardNavbar;
