import { BillItem } from "./BillItem";

export function Paid() {

  const dados = [
    {title: 'Vodafone', date: '2022-01-10', price: '€ 105,00'},
    {title: 'Vitens', date: '2022-01-10', price: '€ 35,00'},
    {title: 'Vitens', date: '2022-01-10', price: '€ 35,00'},
    {title: 'Vitens', date: '2022-01-10', price: '€ 35,00'},
    {title: 'Vitens', date: '2022-01-10', price: '€ 35,00'},
    {title: 'Vitens', date: '2022-01-10', price: '€ 35,00'},
    {title: 'Vitens', date: '2022-01-10', price: '€ 35,00'},
    {title: 'Vitens', date: '2022-01-10', price: '€ 35,00'},
    {title: 'Vitens', date: '2022-01-10', price: '€ 35,00'},
    {title: 'Vitens', date: '2022-01-10', price: '€ 35,00'},
    {title: 'Vitens', date: '2022-01-10', price: '€ 35,00'},
    {title: 'Vitens', date: '2022-01-10', price: '€ 35,00'},
    {title: 'Vitens', date: '2022-01-10', price: '€ 35,00'},
    {title: 'Vitens', date: '2022-01-10', price: '€ 35,00'},
    {title: 'Vitens', date: '2022-01-10', price: '€ 35,00'},
    
  ];


  return (
      <section className="pay-card-boxes">
        <div  className="title">
          <h3>Bills Paid</h3>
        </div>
        <div className="container-bills">
          {
            dados.map((conta, indice) => {
              return <BillItem key={indice} dados={conta} status="check" />
            })
          }
        </div>
     
      </section>
  );
}
