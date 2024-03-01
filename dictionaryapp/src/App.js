import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';

const customDictionary = 
[

    { word: "React", 
      meaning: "A JavaScript library for building user interfaces." 
    },

    { word: "Component", 
      meaning: "A reusable building block in React." 
    },

    { word: "State", 
      meaning: "An object that stores data for a component." 
    }

]
// console.log(customDictionary[1].word)
// console.log(customDictionary[1].meaning)
function App() {
  const[input, setinput] = useState("");
  const[result, setResult] = useState("");
  const[isClicked, setIsClicked] = useState(false)
  // console.log(input)
  
  const checkChange = () => {
    for(let i = 0; i<customDictionary.length; i++){
      let currentWord = customDictionary[i].word.toLowerCase();
      if(input == currentWord){
        console.log(customDictionary[1].meaning)
        setResult(customDictionary[i].meaning);
        return
      }
      else{
        setResult("Word not found in the dictionary.");
      }
    }
  }
  useEffect(() =>{
    checkChange();
    // setIsClicked(!isClicked)
  },[isClicked])

  return (
    <div className="App">
      <h1>Dictionary App</h1>
      <input type='text' placeholder="Search for a word..." onChange={(e) => setinput(e.target.value.toLowerCase())}></input>
      <button onClick={(e) => {e.preventDefault(); setIsClicked(!isClicked)}}>Search</button>
      <h4>Definition:</h4>
      {isClicked && <p>{result}</p>}
    </div>
  );
}

export default App;
