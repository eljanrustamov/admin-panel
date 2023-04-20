import styled from "styled-components";
import Popup from "reactjs-popup";

export const HeaderStyled = styled.div`
  .header-navbar {
    display: flex;
    align-items: center;
    height: 90px;
    padding-left: 22px;
    padding-right: 22px;
    background-color: var(--color-white);
    box-shadow: 0 6px 15px 0 rgb(0 0 0 / 5%);
    position: relative;

    .header-brand {
      .logo {
        margin-right: 40px;
      }
    }

    .header-mainnav {
      display: flex;
      flex: 1 1;

      .mainmenu {
        display: flex;
        align-items: center;

        .menu-item {
          display: flex;
          align-items: center;
          padding: 0 26px;
          color: var(--color-heading);
          font-size: 15px;
          /* font-weight: 600; */
          line-height: 90px;
          transition: 0.3s all;
          cursor: pointer;

          svg {
            margin-left: 8px;
          }

          &:hover {
            color: var(--color-primary);
          }
        }

        .menu-itemdropdown {
          display: flex;
          align-items: center;
          padding: 0 26px;
          color: var(--color-heading);
          font-size: 15px;
          /* font-weight: 600; */
          line-height: 90px;
          transition: 0.3s all;
          cursor: pointer;

          &:hover {
            color: var(--color-primary);
          }
        }
      }
    }

    .header-right {
    }
  }
`;

export const PopupStyled = styled(Popup)`
  &-content {
    width: 290px !important;
    min-width: 300px;
    border: none;
    border-radius: 0 !important;
    /* transition: 0.3s all; */
    /* -webkit-animation: anvil 0.3s cubic-bezier(0.38, 0.1, 0.36, 0.9) alternate; */
  }

  /* @keyframes anvil {
    0% {
      transform: scale(1) translateY(-20px);
      opacity: 0;
      box-shadow: 0 0 0 rgba(241, 241, 241, 0);
    }
    
    100% {
      transform: scale(1) translateY(0px);
      opacity: 1;
      box-shadow: 0 0 500px rgba(241, 241, 241, 0);
    }
  } */
`;

export const DropdownContent = styled.ul`
  width: 290px !important;
  min-width: 300px;
  border: none;
  border-radius: 0 !important;
  padding: 20px 0;
  box-shadow: 0 10px 40px rgb(0 0 0 / 8%);
  position: absolute;
  top: 30px;
  right: 0;
  background-color: var(--color-white);

  li {
    padding: 6px 30px;
    line-height: initial;
    font-size: 15px;
    cursor: pointer;

    a {
      color: initial;
      outline: none;
    }
    &:hover {
      a {
        color: var(--color-primary);
      }
    }
  }
`;
