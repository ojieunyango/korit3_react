import { useState } from "react";

export default function MyForm2(){
 const [text, setText] = useState('');
 const handleSubmit =(event)=>{
 alert(`${text}라고 입력하셨습니다!`);
 event.preventDefalut();
}
 const handleChange = (event)=>{
  setText(event.target.value);
}
  return(
    <>
    <form onSubmit={handleSubmit} >
      <input type="text" onChange={handleChange} value={text}/>
      <br />
      <br />
      <input type="submit" value ="클릭하세요" />
    </form>
    </>
  );
}