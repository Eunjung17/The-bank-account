import "./transactionHistory.scss";
import { useSelector, useDispatch } from "react-redux";
import { undo } from "./transactionsSlice";

/** Displays a table row with transaction information  */
const TransactionRow = ({ transaction: { type, amount, balance, recipient } }) => (
  <tr>
    <th scope="row">{type}</th>
    <td>{amount.toFixed(2)}</td>
    <td>{balance.toFixed(2)}</td>
    <td>{recipient}</td>
  </tr>
);

/** Displays a table of the user's transaction history. */
export default function TransactionHistory() {
  // TODO: Get the transaction history from the Redux store using the useSelector hook
  const history = useSelector((state)=>state.transactions.history);
  const dispatch = useDispatch();

  const onTransaction = (e) => {
    e.preventDefault();
    const action = e.nativeEvent.submitter.name;
  
    if(action === "undo"){
      dispatch(undo());
    }
  }

  return (
    <section className="transactions-history container">
      <form onSubmit={onTransaction}>
        <div>
          <div><h2>Transaction History</h2></div>
          <div><button name="undo">Undo</button></div>
        </div>
      </form>
      <table>
        <thead>
          <tr>
            <th scope="col">Type</th>
            <th scope="col">Amount</th>
            <th scope="col">Balance</th>
            <th scope="col">Recipient</th>
          </tr>
        </thead>
        <tbody>
          {/* TODO
          Map over the transactions in `history`
          to render the appropriate `TransactionRow`s
          */}
          {
            history.map((transaction, index)=>(
              <TransactionRow key={index} transaction={transaction} />
            ))
          }
        </tbody>
      </table>
    </section>
  );
}
