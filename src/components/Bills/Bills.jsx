import { useEffect, useState } from "react";
import { BillItem } from "./BillItem";

export function Bills(props) {

  const [list, setList] = useState([]);
  const [total, setTotal] = useState([]);

// O fetch é uma forma de usar um GET nativo. Para um PUT e POST preciso do AXIOS. 
  useEffect(() => { 
    fetch('http://localhost:3333' + props.endpoint) 
      .then(response => response.json())
      .then(apiResponse => { 
        setList(apiResponse.data);
        setTotal(apiResponse.total);
      })
  }, [props.endpoint]);

  return (
      <section className="pay-card-boxes">
        <div  className="title">
          <h3>{props.title}</h3>
          <h3 className="total">€ {total}</h3>
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
