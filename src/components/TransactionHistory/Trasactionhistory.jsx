import React from 'react';
import PropTypes from 'prop-types';
import css from './TransactHistory.module.css';


export const TransactHistory = ({ items }) => (
    <table className={css.transactHistory}>
        <thead>
            <tr>
                <th>Type</th>
                <th>Amount</th>
                <th>Currency</th>
            </tr>
        </thead> 
        <tbody>    
        {items.map(elem => (<tr key={elem.id} className={css.item}>
            <td>{elem.type}</td>
            <td>{elem.amount}</td>
            <td>{elem.currency}</td>
        </tr>))}
       </tbody>         
  </table>
);

TransactHistory.propTypes = {
  items: PropTypes.array.isRequired,
}

