import React,{useContext} from 'react'
import {GlobalContext} from '../context/GlobalState'

export const Transaction = ({transaction}) => {
    const{deleteTransaction} = useContext(GlobalContext);

    // Get sign
    const sign = transaction.amount < 0 ? '-' : '+';

    return (
        <li class={transaction.amount<0?'minus':'plus'}>
            {transaction.text}<span>{sign}Rs.{Math.abs(transaction.amount)}</span><button 
            onClick={()=>deleteTransaction(transaction.id)} className="delete-btn">x</button>
        </li>
    )
}
