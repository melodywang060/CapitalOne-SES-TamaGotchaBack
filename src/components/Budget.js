import {useState, useRef} from 'react'
import './Budget.css';
import React from 'react'
import NormalCat from './NormalCat.PNG'
import AngryCat from './AngryCat.PNG'
import HappyCat from './HappyCat.PNG'

const Budget = () => {
  const newPurchase = useRef();
  const newPurchaseAmt = useRef();
  const newDeposit = useRef();


  const [currBal, setBal]  = useState(2500);
  const [purchases, setPurchases] = useState([])

  const [img, newImg] = useState(NormalCat)

  function update() {
    var p = newPurchase.current.value;
    var amt = newPurchaseAmt.current.value;
    purchases.push(p);
    setBal(currBal - amt);
    setPurchases(purchases => [...purchases])
    p = null
    amt = null
    newImg(img => AngryCat);
  }

  function addDeposit() {
    var deposit = parseInt(newDeposit.current.value)
    setBal(currBal + deposit)
    deposit = null;
    newImg(img => HappyCat);
  }

  return (
    <>
    <div>
        <h1>Budget Remaining: ${currBal}</h1>
        <ul className='purchases'>
          {purchases.map(purchases => (
            <li className='d'>{purchases}</li>
          ))}
        </ul>
        <button onClick={update} className='addPurchase'> Add Purchase</button>
        <input ref={newPurchase} className="enterPurchase" type="text"/>
        <input ref={newPurchaseAmt} className="enterPurchase" type="text"/> 
    </div>
    <div>
            <button onClick={addDeposit} className='deposit'>Deposit</button>         
            <input ref={newDeposit} className="deposit" type="text"/>
    </div>
    <div>
      <img src={img} alt="normalcat" className='cat' width="350" height="350"/>
    </div>
    </>
  )
}

export default Budget