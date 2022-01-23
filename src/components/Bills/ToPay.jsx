import { BillItem } from "./BillItem";

export function ToPay() {

  const dados = [
    {title: 'Carro', date: '2022-01-10', price: 1800.00},
    {title: 'Cartão', date: '2022-01-10', price: 3500.00},
  ];

  return (

    <section class="pay-card-boxes">
      <div  class="title">
        <h3>Bills to Pay</h3>
      </div>
      <div class="unpaid">
        
        {
          dados.map(item => {
            return <BillItem dados={item} classe="minus" />
          })
        }

      </div>
    </section>

  );
}