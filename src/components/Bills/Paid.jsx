import { BillItem } from "./BillItem";

export function Paid() {

  const dados = [
    {title: 'Vodafone', date: '2022-01-10', price: '€ 105,00'},
    {title: 'Vitens', date: '2022-01-10', price: '€ 35,00'},
  ];


  return (
      <section class="pay-card-boxes">
        <div  class="title">
          <h3>Bills Paid</h3>
        </div>
        <div class="container-bills">
          {
            dados.map(conta => {
              return <BillItem dados={conta} classe="check" />
            })
          }
        </div>
     
      </section>
  );
}
