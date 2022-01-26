import { Bills } from "../Bills/Bills";
import { CardBox } from "../CreditCards/CardBox";
import { OverviewPanel } from "../OverviewPanel/OverviewPanel";

export function Overview() {
  const cards = [
    {brand: 'Amex', title: 'Amex', factur: 6732.89},
    {brand: 'Visa', title: 'Visa Kelita', factur: 123.89},
    {brand: 'Visa', title: 'Visa Eder', factur: 321.89},
    {brand: 'NuBank', title: 'NuBank Kelita', factur: 432.89},
    {brand: 'Maestro', title: 'Maestro Kelita', factur: 345.89},
  ];

  return (
    <>
      <OverviewPanel />
      <div className="payments">
            
        <Bills endpoint="/expenses/paid" title="Paid Bills"/>
        <Bills endpoint="/expenses/unpaid" title="Bills to Pay"/>
        {
          cards.map((card, index) => {
            return <CardBox key={index} data={card}/>
          })
        }
      </div>
    </>
  );
}