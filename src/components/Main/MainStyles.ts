import styled, { css } from "styled-components";
import { HomeCircle, PieChart2, Plus, Spreadsheet } from "../Icons";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  
  width: 100%;

  @media (min-width: 600px) {
  }
`;

export const BottomMenu = styled.div`
  position: fixed;
  bottom: 0;
  left: 0;

  background-color: var(--green);
  width: 100%;
  border-top: 1px solid var(--text);

  display: flex;
  justify-content: space-between;

  padding: 18px min(46px, max(10vh, 10px));

  @media (min-width: 500px) {
    display: none;
  }
`;

const menuIconCss = css`
 width: 40px;
 height: 40px;

 cursor: pointer;

 fill: var(--gray);

 &:hover{
   fill: var(--text);
 }

`;

export const OverviewIcon = styled(HomeCircle)`${menuIconCss}`;

export const DashboardIcon = styled(PieChart2)`${menuIconCss}`;

export const ReportsIcon = styled(Spreadsheet)`${menuIconCss}`;

export const AddIcon = styled(Plus)`${menuIconCss}`;