import axios from "axios";
import { useEffect, useState } from "react";

export function BillItem(props) {

  const [ status, setStatus ] = useState(props.bill.paid);
  const [ classe, setClasse ] = useState('minus');

  useEffect(() => {
    if (status) {
      setClasse('paid');
    } else {
      setClasse('unpaid');
    }
  });

  function changeStatus() {
    axios.patch(`http://localhost:3333/expenses/${props.bill.id}/toggle`)
      .then((response) => {
        location.reload();
      })
      .catch((error) => {
        console.log(error);
      });
  }

  function deleteBill() {
    axios.delete(`http://localhost:3333/expenses/${props.bill.id}`)
      .then((response) => {
        location.reload();
      })
      .catch((error) => {
        console.log(error);
      });
  }

  return (
    <div className="bill">
      <div className="description">
        <div className={`description-left ${classe}`}>
          <div className="icon-bill">
            <i className="fas fa-circle fa-xs"></i>
          </div>
          <div>
            <p>{props.bill.description}</p>
            <small>{props.bill.dueDate}</small>
          </div>
        </div>
        <div className="value-bill-icon">
          <p> <span onClick={deleteBill} className="pointer">&#128465;</span> {props.bill.value}</p>
          <i className={`fas fa-${status ? 'check' : 'minus'}-circle pointer`} onClick={changeStatus}></i>
        </div>
      </div>
    </div>
  );
}