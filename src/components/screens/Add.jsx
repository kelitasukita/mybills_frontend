import axios from "axios";
import { useState } from "react";

export function Add() {
  const [description, setDescription] = useState('');
  const [value, setValue] = useState(0);
  const [paid, setPaid] = useState(false);
  const [dueDate, setDueDate] = useState('');
  const [automaticDebit, setAutomaticDebit] = useState(false);
  const [recurrent, setRecurrent] = useState(false);
  const [currentInstallment, setCurrentInstallment] = useState(0);
  const [installments, setInstallments] = useState(0);
  const [obs, setObs] = useState('');


  function handleCreateNewBill(event) {
    event.preventDefault();

    const data = {
      description,
      value,
      paid,
      dueDate,
      automaticDebit,
      recurrent,
      currentInstallment,
      installments,
      obs,
    };

    axios.post('http://localhost:3333/expenses', data)
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      });
  }

  return (
    <div className="form-add-bill">
      <form onSubmit={handleCreateNewBill}>
        <h3>Add Bill</h3>
        <div>
          <label>Description</label>
          <input 
            type="text" 
            name="description" 
            value={description} 
            onChange={event => setDescription(event.target.value)} 
            placeholder="Vodafone..."
          />
        </div>
        <div>
          <label>Value</label>
          <input 
            type="number" 
            name="value" 
            value={value} 
            onChange={event => setValue(event.target.value)} 
            min="0.00" 
            step="0.01"
          />
          <label>
            <input 
              type="checkbox" 
              name="paid" 
              value={paid}
              onChange={event => setPaid(event.target.value)} 
            /> Already Paid </label>
        </div>
        <div>
          <label>Due Date</label>
          <input 
            type="date" 
            name="dueDate" 
            value={dueDate}
            onChange={event => setDueDate(event.target.value)} 
          />
        </div>
        <div>
          <label>
            <input
             type="checkbox" 
             name="automaticDebit" 
             value={automaticDebit}
             onChange={event => setAutomaticDebit(event.target.value)} 
            /> Automatic Debit</label>
          <label>
            <input 
              type="checkbox" 
              name="recurrent" 
              value={recurrent}
              onChange={event => setRecurrent(event.target.value)} 
            /> Recurrent</label>
        </div>
        <div>
          <label>Installments</label>
          <input 
            type="number" 
            name="currentInstallment" 
            value={currentInstallment} 
            className="small-input"
            onChange={event => setCurrentInstallment(event.target.value)} 
          />
          <span> of </span>
          <input 
            type="number" 
            name="installments" 
            value={installments} 
            className="small-input"
            onChange={event => setInstallments(event.target.value)} 
          />
            
        </div>
        <div>
          <label>Observation</label>
          <input 
            type="text" 
            name="obs" 
            value={obs} 
            placeholder="Celphones included..."
            onChange={event => setObs(event.target.value)} 
          />
        </div>
        <div className="actions">
          <input type="submit" value="Add" className="btn-add"/>
        </div>
      </form>
    </div>
  );
}