import { ItemMenu } from './ItemMenu';

export function Menu() {

  return (
  <nav>
    <ul class="menu">
      <ItemMenu label="overview" />
      <ItemMenu label="dashboard" />
      <ItemMenu label="reports" /> 
    </ul>
  </nav>
  );
}