import React, {useState} from 'react'


export default function Textarea(props) {
    const handleonclick=()=>{
        // console.log("on uppercase is clicked"+ text);
        let newText=text.toUpperCase();
        setText(newText);
            
     }
     const handleonlowclick=()=>{
        // console.log("on uppercase is clicked"+ text);
        let newText=text.toLowerCase();
        setText(newText);
            
     }
     const handleonclearclick=()=>{
        // console.log("on uppercase is clicked"+ text);
        let newText=" ";
        setText(newText);
            
     }
     
     const handleonchange=(event)=>{
      //   console.log("on change is clicked");
        setText(event.target.value);
     }

    const [text,setText]=useState('');
    
  return (
    <>
    <div className='container' style={{color:props.mode==='dark'?'white':'#040f3c'}}>
        <h1>{props.heading}</h1>
      <div className="mb-3">
          <textarea className="form-control" value={text} onChange={handleonchange} style={{backgroundColor:props.mode==='dark'?'#040f3c':'white',color:props.mode==='dark'?'white':'#040f3c'}} id="exampleFormControlTextarea1" rows="8"></textarea>
      </div>
      <button className="btn btn-primary mx-2" onClick={handleonclick}>conver to upper case</button>
      <button className="btn btn-primary mx-2" onClick={handleonlowclick}>conver to lower case</button>
      <button className="btn btn-primary mx-2" onClick={handleonclearclick}>clear</button>
    </div>
    <div className="container my-3" style={{color:props.mode==='dark'?'white':'#040f3c'}}>
          <h2>your text summary</h2>
          <p>{text.split(" ").length} words and {text.length} characters</p>
          <p>{0.008*text.split(" ").length} minutes to read</p>
          <h2>preview</h2>
          <p>{text}</p>
    </div>
    </>
  )
}

