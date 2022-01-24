import { BillItem } from "./BillItem";

export function ToPay() {

  const dados = [
    {title: 'Carro', date: '2022-01-10', price: 1800.00},
    {title: 'Cartão', date: '2022-01-10', price: 3500.00},
    {title: 'Cartão', date: '2022-01-10', price: 3500.00},
    {title: 'Cartão', date: '2022-01-10', price: 3500.00},
    {title: 'Cartão', date: '2022-01-10', price: 3500.00},
    {title: 'Cartão', date: '2022-01-10', price: 3500.00},
    {title: 'Cartão', date: '2022-01-10', price: 3500.00},
    {title: 'Cartão', date: '2022-01-10', price: 3500.00},
    {title: 'Cartão', date: '2022-01-10', price: 3500.00},
    {title: 'Cartão', date: '2022-01-10', price: 3500.00},
    {title: 'Cartão', date: '2022-01-10', price: 3500.00},
    {title: 'Cartão', date: '2022-01-10', price: 3500.00},
    {title: 'Cartão', date: '2022-01-10', price: 3500.00},
    {title: 'Cartão', date: '2022-01-10', price: 3500.00},
    {title: 'Cartão', date: '2022-01-10', price: 3500.00},
  ];

  return (

    <section className="pay-card-boxes">
      <div  className="title">
        <h3>Bills to Pay</h3>
      </div>
      <div className="container-bills">
        
        {
          dados.map((item, indice) => {
            return <BillItem key={indice} dados={item} status="minus" />
          })
        }

      </div>
    </section>

  );
}