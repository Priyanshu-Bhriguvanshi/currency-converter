import { useState } from "react";
import './InputBox.css'

function InputBox({
    label,
    currencyOption,
    amount,
    currency,
    onAmountChange,
    oncurrencyChange
}) {
    return (
        <div className="InputSection" style={{marginBottom:'10px'}}>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '20px', padding: '30px' }}>
                <label htmlFor="" style={{ fontSize: '20px' }}>{label}</label>
                <input type="number" 
                value={amount} 
                onChange={(e) => onAmountChange && onAmountChange(Number(e.target.value))}
                
                onFocus={() => onAmountChange && onAmountChange()} 
                style={{ outline: 'none', padding: '15px', fontSize: '20px', borderStyle: 'none', }} />
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '20px', padding: '30px' }}>
                <label htmlFor="" style={{ fontSize: '20px' }}>Currency Type</label>
                <select
                    name=""
                    value={currency}
                    onChange={(e)=>(oncurrencyChange && oncurrencyChange(e.target.value))}
                    style={{ outline: 'none', borderStyle: 'none', borderRadius: '10px', fontSize: '20px', padding: '20px' }}
                >
                    {currencyOption.map((currency, index) => (
                        <option key={index} value={currency}>
                            {currency}
                        </option>
                    ))}
                </select>
            </div>
        </div>
    );
}

export default InputBox;
