import React from "react";
import {
  DashboardNavbarWrapper,
  DropdownContent,
  StyledPopup,
} from "./DashboardNavbar.styles";
import { FaBars } from "react-icons/fa";
import { ImExit } from "react-icons/im";
import { VscBell, VscBellDot } from "react-icons/vsc";
import { AiOutlineMail, AiOutlineSearch } from "react-icons/ai";
import { useMediaQuery } from "react-responsive";

import "reactjs-popup/dist/index.css";
import SearchNavbar from "../SearchNavbar/SearchNavbar.component";
import supabase from "../../config/supabaseConfig";

const DashboardNavbar = ({ isSidebarOpen, setIsSidebarOpen, setIsLogin }) => {
  const isDesktop = useMediaQuery({ minWidth: 768 });

  const logoutFromAccount = async () => {
    setIsLogin(false);
    await supabase.auth.signOut();
  }

  return (
    <DashboardNavbarWrapper>
      <div className="navbar-brand">
        <a href="/">Maker Space</a>
        <FaBars
          size={18}
          cursor={"pointer"}
          onClick={() => setIsSidebarOpen(!isSidebarOpen)}
        />
      </div>

      <div className="navbar-right">
        {isDesktop && <SearchNavbar focusStyle={true} width={"180px"} />}

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

          <ImExit size={18} cursor={"pointer"}  onClick={logoutFromAccount} className="text-danger"/>
        </div>
      </div>
    </DashboardNavbarWrapper>
  );
};

export default DashboardNavbar;
