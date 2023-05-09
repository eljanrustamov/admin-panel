import styled from "styled-components";

export const GalleryMainStyled = styled.div`
  ${({ forWidth }) => `
    width: calc(100% - ${forWidth});
  `}
  margin-top: 63px;
  padding: 80px 64px;
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

export const GalleryDisplayStyled = styled.div`
display: flex;
justify-content: center;
align-items: center;
  table {
    width: 100%;
    max-width: 100%;
    color: #7286a2;
    font-size: 14px;
    table-layout: fixed;

    tr th:first-child {
      padding-right: 15px;
    }

    thead th {
      color: var(--dark-blue);
    }

    th,
    td {
      padding: 1.5rem 1.5rem 1.75rem 0;
      text-overflow: clip;
    }

    .actions {
      display: flex;
      flex-direction: column;
      svg {
        cursor: pointer;

        &:first-child {
          margin-right: 15px;
        }
      }
    }
    @media (max-width: 526px) {
    }
  }
`;
