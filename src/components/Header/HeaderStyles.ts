import styled, { css } from "styled-components";
import { MoneyDollarCircle, UserCircle } from "../Icons";

export const TopHeader = styled.header`

  display: flex;
  justify-content: space-between;
  align-items: center;

  background: var(--green);
  padding: 10px;
  color: var(--gray);

  .username {
    @media (max-width: 780px) {
      display: none;
    }
  }

`;

const iconCSS = css`
  width: 35px;
  height: 35px;
  margin-top: -5px;
`;

export const LogoMoney = styled(MoneyDollarCircle)`${iconCSS}`;

export const UserIcon = styled(UserCircle)`${iconCSS}`;
