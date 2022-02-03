import { useEffect, useState } from "react";
import { OverviewItem } from "./OverviewItem";

export function OverviewPanel(props) {

  const [earnings, setEarnings] = useState();
  const [expenses, setExpenses] = useState();
  const [balance, setBalance] = useState();
  
  // useEffect(funcao, arrayDeCoisasQuePodemMudarParaExecutarAFuncaoAnterior)

  useEffect(() => {
    fetch(`http://localhost:3333/overview?year=${props.year}&month=${props.month}`)
      .then(response => response.json())
      .then(response => {
        setEarnings(response.earnings);
        setExpenses(response.expenses);
        setBalance(response.balance);
      });

  }, [props.year, props.month]);

  return (
    <section id="balance">
    
      <OverviewItem title="Earnings" value={earnings}/>
      <OverviewItem title="Expenses" value={expenses}/>
      <OverviewItem title="Balance"  value={balance}/>

    </section>
  );
}