import { OverviewItem } from "./OverviewItem";

export function OverviewPanel() {
  return (
    <section id="balance">
    
      <OverviewItem title="Earnings" value="$4.299"/>
      <OverviewItem title="Expenses" value="$3.200"/>
      <OverviewItem title="Balance"  value="$1.300"/>

    </section>
  );
}