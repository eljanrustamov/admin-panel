import styled from "styled-components";
import bgImage from "../../assets/auth_bg.jpg";

export const LeftBG = styled.div`
  background: var(--primary-color-linear);
`;

export const RightBG = styled.div`
  background-image: url(${bgImage});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;

  @media (max-width:767px){
    display: none;
  }
`;
