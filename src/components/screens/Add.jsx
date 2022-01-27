export function Add() {
  return (
    <div className="form-add-bill">
      <form methodName="post">
        <h3>Add Bill</h3>
        <div>
          <label>Description</label>
          <input type="text" name="description" placeholder="Vodafone..."/>
        </div>
        <div>
          <label>Value</label>
          <input type="number" name="value" min="0.00" step="0.01"/>
          <label><input type="checkbox" name="paid"/> Already Paid </label>
        </div>
        <div>
          <label>Due Date</label>
          <input type="date" name="dueDate"/>
        </div>
        <div>
          <label><input type="checkbox" name="automaticDebit"/> Automatic Debit</label>
          <label><input type="checkbox" name="recurrent"/> Recurrent</label>
        </div>
        <div>
          <label>Installments</label>
          <input type="number" name="currentInstallment" className="small-input"/><span> of </span>
          <input type="number" name="installments"  className="small-input" />
        </div>
        <div>
          <label>Observation</label>
          <input type="text" name="obs" placeholder="Celphones included..."/>
        </div>
        <div className="actions">
          <button className="btn-add">Add</button>
        </div>
      </form>
    </div>
  );
}