import styled from "styled-components";


export const Container = styled.div`
  display: flex;
  width: calc(100% - 300px);
  max-width: 600px;
  justify-content: space-evenly;
    
  font-weight: 400;

  @media (max-width: 779px) {
    width: calc(100% - 200px);
    justify-content: space-evenly;
  }
`;
export const MenuTitle = styled.div`
  font-size: 19px;
  color: var(--gray);

  cursor: pointer;

  &:hover {
    color: var(--text);
  }

  @media (max-width: 600px) {
    display: none;
  }
`;