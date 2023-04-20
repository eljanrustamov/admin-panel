import styled from "styled-components";

export const ContentTableWrapper = styled.table`
  width: 100%;
  color: #7286a2;
  font-size: 14px;

  thead th{
    color: var(--dark-blue);
  }


  th, td{
    padding: 0.75rem;
  }

  .actions {
    display: flex;
    border-bottom: none;
    svg {
      cursor: pointer;

      &:first-child {
        margin-right: 15px;
      }
    }
  }
  @media (max-width: 526px) {
    
  }
`;
