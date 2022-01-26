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
    if (status){
      setStatus(false);
      setClasse('unpaid');
    } else {
      setStatus(true);
      setClasse('paid');
    }
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
          <p>{props.bill.value}</p>
          <i className={`fas fa-${status ? 'check' : 'minus'}-circle`} onClick={changeStatus}></i>
        </div>
      </div>
    </div>
  );
}