import PropTypes from 'prop-types';
import css from './Transactions.module.css';

export const TransactionHistory = ({ items }) => (
  <table className={css.transactionhistory}>
    <thead className={css.header}>
      <tr className={css.item}>
        <th className={css.title}> Type</th>
        <th className={css.title}>Amount</th>
        <th className={css.title}>Currency</th>
      </tr>
    </thead>

    <tbody className={css.tbody}>
      {items.map(item => (
        <tr className={css.dataitem} key={item.id}>
          <td className={css.data}>{item.type}</td>
          <td className={css.data}>{item.amount}</td>
          <td className={css.data}>{item.currency}</td>
        </tr>
      ))}
    </tbody>
  </table>
);

TransactionHistory.protoType = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      type: PropTypes.string.isRequired,
      amount: PropTypes.number.isRequired,
      currency: PropTypes.number.isRequired,
    })
  ).isRequired,
};