import css from '../TransactionHistory/TransactionHistory.module.css'

export const TransactionHistory = ({items}) => {
    return (
        <table className={css.transactionHistory}>
        <thead>
          <tr>
            <th>Type</th>
            <th>Amount</th>
            <th>Currency</th>
          </tr>
        </thead>
        <tbody>
            {items.map((item) => {
              return (
              <tr>
                <td>{item.type}</td>
                <td>{item.amount}</td>
                <td>{item.currency}</td>
              </tr>
              )
            })}
            </tbody>
      </table> 
    );
  };