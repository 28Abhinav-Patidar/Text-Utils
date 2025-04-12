import React from 'react';

export default function About(props){
  const sendstyle = (mode) =>{
    switch (mode){
      case 'light' : return 'white';
      case 'dark' : return 'black';
      case 'danger' : return '#ff6d6d';
      default : return 'rgba(19,170,201,1)';
  }
  }
    return(
      <div className={`container bg-${sendstyle(props.mode)}`} >
        <h1 className={`text-${props.mode==='light'?'dark':'light'}`}>About</h1>
      <div className="accordion" id="accordionExample">
      <div className="accordion-item">
        <h2 className="accordion-header">
          <button className={`accordion-button text-${props.mode==='light'?'dark':'light'}`}  style={{backgroundColor:sendstyle(props.mode)}} type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
            About UpperCase
          </button>
        </h2>
        <div id="collapseOne" style={{backgroundColor:sendstyle(props.mode)}} className="accordion-collapse collapse show" data-bs-parent="#accordionExample">
          <div className={`accordion-body text-${props.mode==='light'?'dark':'light'}`} >
            <strong>"Uppercase":</strong> refers to letters written in capital form, often used for emphasis, titles, proper nouns, and acronyms. 
          </div>
        </div>
      </div>
      <div className="accordion-item" >
        <h2 className="accordion-header" >
          <button className={`accordion-button text-${props.mode==='light'?'dark':'light'}`} style={{backgroundColor:sendstyle(props.mode)}} type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
          About LowerCase
          </button>
        </h2>
        <div id="collapseTwo" className="accordion-collapse collapse" style={{backgroundColor:sendstyle(props.mode)}} data-bs-parent="#accordionExample">
          <div className={`accordion-body text-${props.mode==='light'?'dark':'light'}`} >
            <strong>"LowerCase":</strong>Lowercase letters are the shorter, smaller versions of the alphabet, often referred to as "small letters" or "minuscule". 
          </div>
        </div>
      </div>
      <div className="accordion-item">
        <h2 className="accordion-header">
          <button className={`accordion-button text-${props.mode==='light'?'dark':'light'}`} style={{backgroundColor:sendstyle(props.mode)}} type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
          About Random Text
          </button>
        </h2>
        <div id="collapseThree" style={{backgroundColor:sendstyle(props.mode)}} className="accordion-collapse collapse" data-bs-parent="#accordionExample">
          <div className={`accordion-body text-${props.mode==='light'?'dark':'light'}`} >
            <strong>"Random Text":</strong> it generates the random text that is -'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.'
          </div>
        </div>
      </div>
      <div className="accordion-item">
        <h2 className="accordion-header">
          <button className={`accordion-button text-${props.mode==='light'?'dark':'light'}`} style={{backgroundColor:sendstyle(props.mode)}} type="button" data-bs-toggle="collapse" data-bs-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour">
          About Remove Extra Space
          </button>
        </h2>
        <div id="collapseFour" style={{backgroundColor:sendstyle(props.mode)}} className="accordion-collapse collapse" data-bs-parent="#accordionExample">
          <div className={`accordion-body text-${props.mode==='light'?'dark':'light'}`} >
            <strong>"Remove Extra Space"</strong>it removes all the extra spaces from the paragraph like double space
          </div>
        </div>
      </div>
    </div>
    </div>
    )
   
}
