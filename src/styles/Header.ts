import styled from "styled-components";

export const TopHeader = styled.header`

  display: flex;
  justify-content: space-between;
  align-items: center;

  background: #1bd273;
  padding: 10px;
  text-align: left;
  color: #ebebeb;

  #logo {
    color: #ebebeb;
    font-weight: 700;
    justify-content: left;
  }

  .menu {
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
  }
`;