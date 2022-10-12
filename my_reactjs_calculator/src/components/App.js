import React,  { 
    useState,
}from 'react';
import './App.css'


const App = () => {
    const [result, setResult]= useState(" ");

    const thebutton = (e) => {
        setResult(result.concat(e.target.name));
    }


    
    const clear = () => {
        setResult(" ")
    }

    const calculate= () =>{
        try{
            
            setResult(eval(result).toString());
        }catch(err){
            setResult("Error")
        }
       
    }
    return(

<div className="container">
    <div className="calculator">
        <p className="nameapp"> my_reactjs_calculator</p>

    <input className="screen" type="text" value={result} /> 

        <div class="keys">
            <button name="1" onClick={thebutton}>1</button>
            <button name="2" onClick={thebutton}> 2</button>
            <button name="3" onClick={thebutton}>3</button>
            <button name="+" onClick={thebutton} className="special">+</button>
            <button name="4" onClick={thebutton}>4</button>
            <button name="5" onClick={thebutton}>5</button>
            <button name="6" onClick={thebutton}>6</button>
            <button name="-" onClick={thebutton} className="special">-</button>
            <button name="7" onClick={thebutton}>7</button>
            <button name="8" onClick={thebutton}>8</button>
            <button name="9" onClick={thebutton}>9</button>
            <button name="*" onClick={thebutton} className="special">*</button>
            <button id="clear" onClick={clear} className="clear1">C</button>
            <button name="0" onClick={thebutton}>0</button>
            <button id="result" name="" onClick={calculate} className="ravno">=</button>
            
            <button name="/" onClick={thebutton} className="special">/</button>
          
           
        
         </div>
    </div>
</div>

    );
}

export default App