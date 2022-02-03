import { useState } from "react";
import { Bills } from "../Bills/Bills";
import { CardBox } from "../CreditCards/CardBox";
import { OverviewPanel } from "../OverviewPanel/OverviewPanel";

export function Overview() {

  const [year, setYear] = useState(new Date().getFullYear());
  const [month, setMonth] = useState(new Date().getMonth());

  const cards = [
    {brand: 'Amex', title: 'Amex', factur: 6732.89},
    {brand: 'Visa', title: 'Visa Kelita', factur: 123.89},
    {brand: 'Visa', title: 'Visa Eder', factur: 321.89},
    {brand: 'NuBank', title: 'NuBank Kelita', factur: 432.89},
    {brand: 'Maestro', title: 'Maestro Kelita', factur: 345.89},
  ];

  return (
    <>
      <input type="number" onChange={(event) => setYear(event.target.value)} placeholder="2022" />
      <input type="number" onChange={(event) => setMonth(event.target.value)} placeholder="2" />
      <OverviewPanel year={year} month={month}/>
      <div className="payments">
            
        <Bills endpoint={`/expenses/paid?year=${year}&month=${month}`} title="Paid Bills"/>
        <Bills endpoint={`/expenses/unpaid?year=${year}&month=${month}`} title="Bills to Pay"/>
        {
          cards.map((card, index) => {
            return <CardBox key={index} data={card}/>
          })
        }
      </div>
    </>
  );
}