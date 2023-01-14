import React from 'react'

export default function Transaction({ transaction })
{
    const sign = transaction.amount < 0 ? '-' : '+';
  return (
      <li className={transaction.amount < 0 ? 'minus' : 'plus'}>
          {/* Math.abs() returns the absolute value of a number */}
          {transaction.text} <span>{sign}${Math.abs(transaction.amount)}</span> 
      <button className="delete-btn">x</button>
    </li>
  );
}
