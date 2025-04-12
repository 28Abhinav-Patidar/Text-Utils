import react ,{useState}from 'react';

export default function Form(props) {
    const [text,setText] = useState('');
    
    const handleUpperCase = ()=>{
        let newtext = text.toUpperCase();
        setText(newtext);
        props.sendalert( "success" , "Text is converted to Uppercase!");
    }
    const handlelowerCase = () =>{
        let newtext = text.toLowerCase();
        setText(newtext);
        props.sendalert( "success" , "Text is converted to Lowercase!");
    }
    const handlerandomtext = () =>{
        let newtext = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.";
        setText(newtext);
        props.sendalert( "success" , "Random text is Generated1");
    }
    const clearText = () => {
        let newtext = "";
        setText(newtext);
        props.sendalert( "success" , "Text is Cleared! ");
    }
    const handlespace = () =>{
        let newtext = text.split(/[  ]+/) ;
        setText(newtext.join(" "));
        props.sendalert( "success" , "Extra Space has been Removed! ");
    }
    const handlechange = (event) =>{
        setText(event.target.value)
    }
   
    const changetextareamode =(mode) => {
        switch (mode){
            case 'light' : return 'white';
            case 'dark' : return 'black';
            case 'danger' : return '#f55454';
            default : return 'rgba(0,198,239,1)';
        }
    }
    return(
        <>
        <div>
            <h1 className={`text-${props.mode === 'light'?'dark':'light'}`}>{props.heading}</h1>
            <div className="mb-3">
                <textarea className={`form-control text-${props.mode==='light'?'dark':'light'}`}  value={text} onChange = {handlechange} style = {{backgroundColor : changetextareamode(props.mode) }} id="myBox" rows="6"></textarea>
            </div>
            <button className="btn btn-primary mx-2" onClick={handleUpperCase}>Convert to Upper Case</button>
            <button className="btn btn-primary mx-2" onClick={handlelowerCase}>Convert to Lower Case</button>
            <button className="btn btn-primary mx-2" onClick={handlerandomtext}>Generate Random Text</button>
            <button className="btn btn-primary mx-2" onClick={handlespace}>Remove Extra Space</button>
            <button className="btn btn-danger mx-2" onClick={clearText}>Clear Text</button>
        </div>
        <div className={`container my-3 text-${props.mode === 'light'?'dark':'light'}`} >
            <h2>Text Summery</h2>
            <p>{text.split(" ").length-1} Words and {text.length} Charecters</p>
            <p>{0.008*(text.split(" ").length-1)} average minutes required to read the text </p>
            <h3>Preview</h3>
            <p>{text}</p>
        </div>
        </>
    )
}

