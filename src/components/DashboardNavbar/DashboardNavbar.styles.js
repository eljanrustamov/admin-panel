import styled from "styled-components";
import Popup from "reactjs-popup";


export const DashboardNavbarWrapper = styled.nav`
  display: flex;
  justify-content: space-between;
  width: 100%;
  position: fixed;
  top: 0;
  background-color: #fff;
  padding: 15px 30px;
  overflow-x:hidden;

  .navbar-brand {
    min-width: 15vw;
    display: flex;
    align-items: center;
    justify-content: space-between;
    font-size: 22px;
    color: var(--text-muted);

    a {
      color: var(--dark-blue);
      font-weight: 600;
      margin-right: 1.5rem;
    }
  }

  .navbar-right {
    display: flex;
    justify-content: center;
    align-items: center;
    color: var(--font-gray);

    .navbar-menu {
      display: flex;
      justify-content: center;
      align-items: center;
      gap: 40px;
      margin-left: 40px;

      @media (max-width: 526px){
        gap:20px;
      }
    }
  }
`;

export const StyledPopup = styled(Popup)`
  &-content {
    padding: 0 !important;
    margin-top: 10px;
    width: 350px !important;
    height: 470px !important;
    border: none;
  }

  @media (max-width: 767px) {
    &-content {
      width: 90% !important;
      left: 50% !important;
      transform: translateX(-50%) !important;
    }
  }
`;

export const DropdownContent = styled.ul`
  .header {
    width: 350px;
    position: sticky;
    padding: 30px 20px;
    background: var(--secondary-gradient);
    color: #fff;
    border-top-left-radius: 5px;
    border-top-right-radius: 5px;

    @media (max-width:767px){
        width: 100%;
    }
  }
  .items {
    height: 386px;
    overflow-y: scroll !important;
  }

  .item {
    padding: 10px 20px;
    .media {
      display: flex;
      justify-content: start;

      .media-left {
        margin-right: 20px;
      }

      .media-right {
        .text {
          font-size: 14px;
          color: var(--font-gray);
        }

        .timestamp {
          font-size: 12px;
          color: var(--text-muted);
        }
      }
    }
  }
`;
