import React from 'react'

export default function Alert(props) {
    const capital=(word)=>{
      if(word==="danger"){
        word= "Error";
      }
        let upper = word.toLowerCase();
        return upper.charAt(0).toUpperCase() + upper.slice(1);
    }
  return (
     <div  style={{height:'50px'}}>
      { props.alert && <div className={`alert alert-${props.alert.type} alert-dismissible fade show ps-5`} role="alert">
         <strong>{capital(props.alert.type)} : {props.alert.message}</strong> 
       </div>}
      </div>
  )
}
