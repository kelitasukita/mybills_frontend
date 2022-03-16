import styled from "styled-components";


export const Container = styled.div`
  display: flex;
  width: calc(100% - 290px);
  justify-content: space-evenly;
    
  font-weight: 400;
`;
export const MenuTitle = styled.div`
  font-size: 19px;
  color: var(--gray);

  cursor: pointer;

  &:hover {
    color: var(--text);
  }
`;