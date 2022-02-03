import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export function BillItem(props) {

  const navigate = useNavigate();

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

  function editBill() {
    navigate('/add', { state: props.bill })

  }


  return (
    <div className="bill">
      <div className="description">
        <div className={`description-left ${classe}`}>
          <div className="icon-bill">
            <i className="fas fa-circle fa-xs"></i>
          </div>
          <div>
            <p>{props.bill.description}
               {props.bill.installments > 0 ? ` - ${props.bill.currentInstallment}/${props.bill.installments}`: ''}
            </p>
            <small>{props.bill.dueDate}</small>
          </div>
        </div>
        <div className="value-bill-icon">
          <p> 
            <span onClick={editBill} className="pointer">&#9999;&#65039;</span> 
            <span onClick={deleteBill} className="pointer">&#128465;</span> 
            {props.bill.value}
          </p>
          <i className={`fas fa-${status ? 'check' : 'minus'}-circle pointer`} onClick={changeStatus}></i>
        </div>
      </div>
    </div>
  );
}