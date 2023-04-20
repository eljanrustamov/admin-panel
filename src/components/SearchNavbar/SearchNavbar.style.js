import styled from "styled-components";

export const SearchNavbarBox = styled.div`
  display: flex;

  button {
    background: transparent;
    border: none;
  }

  input {
    ${({ width }) => `
      width: ${width};
    `}
    font-size: 14px;
    padding: 6px 20px;
    border: none;
    outline: none;
    transition: 0.3s all;
    color: var(--font-gray);
    border-radius: 0 !important;
    ${({border}) => `
      border-bottom: ${border};
    `}

    ${({ focusStyle }) => `
    ${
      focusStyle &&
      `
      &:focus {
      width: 240px;
    }
    `
    }
    `}


  }
`;
