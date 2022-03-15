import React from "react";

import Menu from "../Menu";

import { TopHeader, LogoMoney, UserIcon } from "./HeaderStyles";

const Header: React.FC = () => {
  return ( 
    <TopHeader>
      <div>
        <h1 id="logo">my.bill<LogoMoney /></h1>
      </div>
      <Menu />
      <div>
        <h1>Kelita <UserIcon /></h1>
      </div>

    </TopHeader>
  );
}

export default Header;
