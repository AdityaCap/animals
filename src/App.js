import {useState} from 'react';
import AnimalShow from './showAnimals';
import './App.css'
function randomAnimals(){
    const animals=['bird','cow','gator','dog','horse','cat'];
    return animals[Math.floor(Math.random()*animals.length)];
}
//console.log(randomAnimals());

export default function App(){   
    const [animals,setAnimals]=useState([]);   
    
    const handleCLick = () =>{
        setAnimals([...animals,randomAnimals()])    
       
    };
    const renderedAnimals=animals.map((animals,index) => {
        return <AnimalShow type={animals} key={index} />;
    }

    );
    
    return(
        <div className='app'>
           <button onClick={handleCLick}> Add animal</button>
           <div className='animal-list'>{renderedAnimals}</div>
        </div>

    );
}