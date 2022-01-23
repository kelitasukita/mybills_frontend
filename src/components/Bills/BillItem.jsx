import { useEffect, useState } from "react";

export function BillItem(props) {

  const [ status, setStatus ] = useState(props.status);
  const [ classe, setClasse ] = useState('minus');

  useEffect(() => {
    if (status == 'minus') {
      setClasse('unpaid');
    } else {
      setClasse('paid');
    }
  });

  function changeStatus() {
    if (status == 'minus'){
      setStatus('check');
      setClasse('paid');
    } else {
      setStatus('minus');
      setClasse('unpaid');
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
            <p>{props.dados.title}</p>
            <small>{props.dados.date}</small>
          </div>
        </div>
        <div className="value-bill-icon">
          <p>{props.dados.price}</p>
          <i className={`fas fa-${status}-circle`} onClick={changeStatus}></i>
        </div>
      </div>
    </div>
  );
}