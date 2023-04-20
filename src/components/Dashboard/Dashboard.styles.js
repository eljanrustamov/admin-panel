import styled from 'styled-components';
import Popup from "reactjs-popup";
import Drawer from "react-modern-drawer";



export const DashboardWrapper = styled.div` 

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100vw;
    height: 100vh;
    background-color: #333;
    font-family: 'Poppins', sans-serif;
`

export const StyledDrawer = styled(Drawer)`
  margin-top: 63px;
  border: none;
  outline: none;
  box-shadow: none !important;
`
