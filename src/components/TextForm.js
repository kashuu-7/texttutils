import React, {useState} from 'react'


export default function TextForm(props) {
    const handleUpClick = ()=>{
        // console.log("Uppercase was clicked" + text)
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert("converted to UpperCase", "success")
    }

    
    const handleLoClick = ()=>{
        // console.log("Uppercase was clicked" + text)
        let newText = text.toLowerCase();
        setText(newText);
        props.showAlert("converted to LowerCase", "success")
    }
    
    const handleClearClick = ()=>{
        // console.log("Uppercase was clicked" + text)
        let newText = '';
        setText(newText)
        props.showAlert("Text Cleared", "success")
    }
    
    const speak = () => {
        let msg = new SpeechSynthesisUtterance(text);
        window.speechSynthesis.speak(msg);
        const toogle = document.getElementById('toggle')
        if (toogle.textContent === "Speak") {
            toogle.innerHTML = "Stop"
        }
        else {
            toogle.innerHTML = "Speak"
            if (toogle.innerHTML === "Speak"){
                window.speechSynthesis.cancel()
            }
        }
        props.showAlert("Speaking:", "success")
    }


    const copyText = () => {
    navigator.clipboard.writeText(text)
    props.showAlert("Copied To ClipBoard", "success")
    }
    
    const handleOnChange = (event)=>{
        // console.log("On change")
        setText(event.target.value);
    }

    const [text, setText] = useState("Enter Text Here");
    // text = "new text";   // Wrong way to change the state
    // setText("new text");   // correct way to change the state
  return (
    <>
    <div className="container" style={{color: props.mode=== 'dark'?'white':'#181b37'}}>
        <h1>{props.heading}</h1>
        <div className="mb-3">
        <textarea className="form-control" value={text} onChange={handleOnChange} id="myBox" style={{backgroundColor: props.mode=== 'light'?'white':'#2b5174', color: props.mode=== 'dark'?'white':'#181b37'}} rows="10"></textarea>
        </div>
        <button className="btn btn-primary mx-1" onClick={handleUpClick}>Convert to Uppercase</button>
        <button className="btn btn-primary mx-1" onClick={handleLoClick}>Convert to Lowercase</button>
        <button className="btn btn-primary mx-1" onClick={handleClearClick}>Text Clear</button>
        <button className="btn btn-primary mx-1" onClick={copyText}>Text Copy</button>
        <button type="submit" onClick={speak} className="btn btn-warning mx-2 my-2" id="toggle">Speak</button>
    </div>
    <div className="container my-5" style={{color: props.mode=== 'dark'?'white':'#181b37'}}>
        <h1>Your Text Summary</h1>
        <p>{text.split(" ").length} words and {text.length} characters</p>
        <p>{0.008 * text.split(" ").length} Minutes Read</p>
        <h2>Preview</h2>
        <p>{text.length>0?text:"Enter something in the textBox above to preview it here"}</p>
    </div>
    </>
  )
}
