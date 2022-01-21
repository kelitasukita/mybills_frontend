import { Menu } from "./Menu";

export function Header() {
  return (
    <header>
      <div>
        <h1 id="logo">my.bill$</h1>
      </div>
      <Menu />
      <div>
        <h1>login</h1>
      </div>

    </header>
  );
}