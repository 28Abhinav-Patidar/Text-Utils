import React from 'react';

export default function Alert (props){
    const capatalize = (text) =>{
      let char = text.toLowerCase();
      return char.charAt(0).toUpperCase()+ char.slice(1);
    }
    return(
    props.alert &&<div className={`alert alert-${props.alert.msg} alert-dismissible fade show`} role="alert">
    <strong> {capatalize(props.alert.msg)}: </strong> {props.alert.text}
  </div>
    )
}
