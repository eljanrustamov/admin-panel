import styled from "styled-components";

export const SidebarMenuItemStyles = styled.li`
  width: 100%;
  ${({ active }) => `
    ${active?`background: var(--primary-color-linear);`:''}`}
  margin-top: 6px;
  border-radius: 5px;
  cursor: pointer;
  div {
    display: flex;
    align-items: center;
    padding: 12px 24px;
    ${({ active }) => `
    ${active ? `color:#fff;` : `color: var(--font-gray);`}`}

    font-size: 14px;
    transition: all 0.3s ease-out;

    span {
      margin-left: 10px;
    }
  }
`;
