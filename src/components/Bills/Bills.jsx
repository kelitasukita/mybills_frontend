import { useEffect, useState } from "react";
import { BillItem } from "./BillItem";

export function Bills(props) {

  const [list, setList] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3333' + props.endpoint)
      .then(response => response.json())
      .then(apiResponse => setList(apiResponse.data))
  }, []);

  return (
      <section className="pay-card-boxes">
        <div  className="title">
          <h3>{props.title}</h3>
        </div>
        <div className="container-bills">
          {
            list.map(bill => {
              return <BillItem key={bill.id} bill={bill} />
            })
          }
        </div>
     
      </section>
  );
}
