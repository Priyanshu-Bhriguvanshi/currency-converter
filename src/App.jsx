import React from "react";
import { useState } from "react"
import './App.css';
import InputBox from "./component/InputBox";
import useCurrencyInfo from './hooks/useCurrencyInfo';

function App() {
  const [amount, setAmount]=useState(0);
  const [converted, setConvertedAmount]=useState(0);
  const [from, setFrom]=useState('usd');
  const [to, setTo]=useState('inr');

  const currencyInfo= useCurrencyInfo(from);
  const option=Object.keys(currencyInfo);
  const convert = () => {
    setConvertedAmount(parseFloat((amount * currencyInfo[to]).toFixed(2)));
  }
  return (
    <>
      <div className="Parrent">

        <div className="inputParentDev">
          <form onSubmit={(e) => {
            e.preventDefault();
            convert();
            
          }}>
            <div>
              <InputBox
                label={"From"}
                currencyOption={option}
                amount={amount}
                currency={from}
                onAmountChange={(amount) => setAmount(amount)}
                oncurrencyChange={(from)=>(setFrom(from))}
              />
            </div>
            <div>
              <InputBox
                label={"To"}
                currencyOption={option}
                amount={converted}
                currency={to}
                oncurrencyChange={(to)=>(setTo(to))}

              />
            </div>

            <div>
              <button style={{backgroundColor:'green', width:'100%', height:'40px', borderRadius:'10px', fontSize:'20px', color:'white'}}>Convert </button>
              
            </div>


          </form>

        </div>
      </div>

    </>
  )
}

export default App;