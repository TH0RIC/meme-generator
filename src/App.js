import { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import html2canvas from 'html2canvas';

function App() {

  const [text1,setText1] = useState('');
  const [text2,setText2] = useState('');
  const [image,setImage] = useState('');

  const onChangeText1= function(event){
      
      setText1(event.target.value);
  }


  const onChangeText2= (e) => {setText2(e.target.value);}


  const onChangeImage= function(event){

      setImage(event.target.value);
  }

  const onClickButton= function(){
    
    html2canvas(document.querySelector("#meme")).then(canvas => {
      document.body.appendChild(canvas)
    });
  }

  return (
    <div className="App">
      
      <select onChange={onChangeImage}>
          <option value="rana.jpg">Rana</option>
          <option value="shrek.jpg">Shrek</option>
          <option value="futurama.jpg">Futurama</option>
          <option value="caprio.png">Caprio</option>
      </select><br/><br/>
      <input onChange={onChangeText1} type="text" placeholder="Text 1"/><br/><br/>
      <input onChange={onChangeText2} type="text" placeholder="Text 2"/><br/><br/>
      <button onClick={onClickButton}>Submit</button>

      <div className="meme">
        <span id="text1">{text1}</span><br/>
        <span id="text2">{text2}</span>
        <img src={"/img/"+image} />
      </div>
    </div>
  );
}

export default App;
