import styled, { css } from "styled-components";
import { MoneyDollarCircle, UserCircle } from "../components/Icons";

export const TopHeader = styled.header`

  display: flex;
  justify-content: space-between;
  align-items: center;

  background: var(--green);
  padding: 10px;
  /* text-align: left; */
  color: var(--gray);

  /* #logo {
    color: var(--gray);
    font-weight: 700;
    justify-content: left;
  } */

  /* .menu {
    display: flex;

    li {
      list-style: none;
      margin-left: 20px;
      padding: 10px;

      a {
        text-decoration: none;
        color: #ebebeb;
      }
    }
  } */
`;

const iconCSS = css`
  width: 35px;
  height: 35px;
  margin-top: -5px;
`;
export const LogoMoney = styled(MoneyDollarCircle)`${iconCSS}`;

export const UserIcon = styled(UserCircle)`${iconCSS}`;