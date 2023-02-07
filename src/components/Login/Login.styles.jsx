import styled from "styled-components";

export const LoginWrapper = styled.div`

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 350px;
  margin-top: 280px;
  margin-left: 150px;
  background-color: #fff;
  border-radius: 6px;
  padding: 30px;
  padding-bottom: 45px;

  @media (max-width: 767px) {
    width: 100%;
    margin-left: 0;
  }

  .logo{
    width: 150px;
    margin-bottom: 10px;
  }

  .title {
    font-size: 20px;
    font-weight: bold;
    margin-bottom: 40px;
  }



`;
