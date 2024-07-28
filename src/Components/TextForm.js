import React, {useState} from 'react'


export default function TextForm() {
  const textChanger = () =>{
    console.log("Random Button was clicked");
    let newText = text.toUpperCase();
    alert('This Button converts all the text to UpperCase')
    setText(newText)
  }
  const handleChange = (event) =>{
    setText(event.target.value)
  
  }
  const speak = () => {
    let msg = new SpeechSynthesisUtterance();
    msg.text = text;
    window.speechSynthesis.speak(msg);
  }
  
  const [text, setText] = useState('');
  return (
<>
    <div className="mb-3">
  <label htmlFor="exampleFormControlTextarea1" className="form-label">Enter Texts</label>
  <textarea className="form-control" value={text} onChange={handleChange} id="exampleFormControlTextarea1" rows="8"></textarea>
  <button className="btn btn-primary my-3" onClick={textChanger}>Random Button</button>
  <button type="submit" onClick={speak} className="btn btn-warning mx-2 my-2">Speak</button>


  </div>
  <div className='container my-2' >
    <h1>Your Text Got These:</h1>
    <p>{text.split(" ").length} Words and {text.length} Characters! </p>
    <p>This can be read in {0.008 * text.split(" ").length} Minutes!</p>
    <p>Preview:</p>
    <p>{text}</p>
  </div>
  </>
  )
}
