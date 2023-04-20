import React from "react";
import { HeaderStyled, DropdownContent } from "./Header.styles";
import HeaderTopBar from "../HeaderTopBar/HeaderTopBar.component";
import { useMediaQuery } from "react-responsive";
import { FaAngleDown } from "react-icons/fa";
import { PopupStyled } from "./Header.styles";
import "reactjs-popup/dist/index.css";
import { motion } from "framer-motion";

const Header = () => {
  const isDesktop = useMediaQuery({ minWidth: 992 });

  const [isHover, toggleHover] = React.useState(false);
  const toggleHoverMenu = () => {
    toggleHover(!isHover);
  };

  const subMenuAnimate = {
    enter: {
      y: 10,
      opacity: 1,
      transition: {
        duration: 0.5,
      },
      display: "block",
    },

    exit: {
      y: -15,
      opacity: 0,
      transition: {
        duration: 0.2,
        delay: 0.1,
      },
      transitionEnd: {
        display: "none",
      },
    },
  };

  return (
    <HeaderStyled>
      {
        //     isDesktop && (
        //     <HeaderTopBar/>
        //   )
      }

      <div className="header-navbar">
        <div className="header-brand">
          <a className="logo" href="/">
            LOGO
          </a>
        </div>

        <nav className="header-mainnav">
          <ul className="mainmenu">
            <li className="menu-item">Ana Səhifə</li>
            <li className="menu-item">Haqqımızda</li>
            <motion.li
              className="menu-itemdropdown"
              onHoverStart={toggleHoverMenu}
              onHoverEnd={toggleHoverMenu}
            >
              Kurslar <FaAngleDown />
              <motion.div
                className="sub-menu"
                initial="exit"
                animate={isHover ? "enter" : "exit"}
                variants={subMenuAnimate}
              >
                <DropdownContent>
                  <li>
                    <a href="/">AI Engineering</a>
                  </li>
                  <li>
                    <a href="/">Blockchain Developer</a>
                  </li>
                  <li>
                    <a href="/">Data Science</a>
                  </li>
                  <li>
                    <a href="/">Data Analytics</a>
                  </li>
                  <li>
                    <a href="/">Cyber Security</a>
                  </li>
                  <li>
                    <a href="/">Back-End Development</a>
                  </li>
                  <li>
                    <a href="/">Front-End Development</a>
                  </li>
                </DropdownContent>
              </motion.div>
            </motion.li>




            <li className="menu-item">Əlaqə</li>
          </ul>
        </nav>

        <div className="header-right"></div>
      </div>
    </HeaderStyled>
  );
};

export default Header;

// <PopupStyled
//   arrow={false}
//   trigger={
//     <li>
//       Kurslar <FaAngleDown />
//     </li>
//   }
//   on={"hover"}
//   position="bottom right"
// >
//   <DropdownContent>
//     <li>
//       <a href="/">AI Engineering</a>
//     </li>
//     <li>
//       <a href="/">Blockchain Developer</a>
//     </li>
//     <li>
//       <a href="/">Data Science</a>
//     </li>
//     <li>
//       <a href="/">Data Analytics</a>
//     </li>
//     <li>
//       <a href="/">Cyber Security</a>
//     </li>
//     <li>
//       <a href="/">Back-End Development</a>
//     </li>
//     <li>
//       <a href="/">Front-End Development</a>
//     </li>
//   </DropdownContent>
// </PopupStyled>;
