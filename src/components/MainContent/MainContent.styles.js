import styled from "styled-components";

export const MainContentWrapper = styled.div`
  ${({ forWidth }) => `
    width: calc(100% - ${forWidth});
  `}
  margin-top: 63px;
  padding: 80px 48px;
  background-color: var(--body-color);
  transition: 500ms all;
  overflow-x: hidden;

  @media (max-width: 767px) {
    padding: 24px;
  }

  @media (max-width: 978px) {
    width: 100%;
  }

  .content-header {
    display: flex;
    justify-content: space-between;
    margin-bottom: 40px;

    .title {
    }

    .prev-btn {
      display: flex;
      align-items: center;
      background-color: transparent;
      color: var(--font-color);
    }

    .create-btn {
      display: flex;
      justify-content: end;
      align-items: center;
      background-color: var(--color-green);
      color: #fff;
      padding: 0 30px;
      border-radius: 5px;

      svg {
        margin-left: 10px;
      }
    }
  }
`;
