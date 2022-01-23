import { MenuItem } from "./MenuItem";

export function Menu() {
  return (
    <nav>
      <ul className="menu">

        <MenuItem title="Overview" link="/overview" />
        <MenuItem title="Dashboard" link="/dashboard" />
        <MenuItem title="Reports" link="/reports" />
        <MenuItem title="Integration" link="/integration" />
        
      </ul>
    </nav>
  );
}