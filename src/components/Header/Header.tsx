import React from "react";

// import Menu from "./Menu";

import { TopHeader } from "../../styles/Header";

const Header: React.FC = () => {
  return ( 
    <TopHeader>
      <div>
        <h1 id="logo">my.bill$</h1>
      </div>
      {/* <Menu /> */}
      <div>
        <h1>login</h1>
      </div>

    </TopHeader>
  );
}

export default Header;
