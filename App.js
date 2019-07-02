import React from 'react';
import Image from './img.js';
import photo from './aa.jpg';
import './App.css';
import Mybutton from './MyButton';
import Felsa from './felsa';

function App() {
  return (
    <div ClasName="App">

    <h1>profile</h1>

<br>
</br>
<Mybutton onSimpleClick={()=>{window.location="https://www.facebook.com/"}} 
name='My facebook'

/>>
<Felsa onSimpleClick={()=>{window.location="https://fr.linkedin.com/"}} 
name='My Linkedin'

/>>

<Image images={photo}/>




   </div>

  );
}

export default App;
