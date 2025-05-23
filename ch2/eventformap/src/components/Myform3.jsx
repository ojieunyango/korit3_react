import { useState } from "react";

export default function MyForm(){
  const [user, setUser] = useState({
    firstName: '',
    lastName: '',
    email: ''
  });
  const handleSubmit = event => {
    alert(`안녕하세요, ${user.firstName} ${user.lastName}. Email주소는 ${user.email}입니다.`);
    event.prevetDefault()
  }
  const handleChange = event=>{
    setUser({...user, [event.target.name]: event.target.value})
  }

  
  return(
    <>
    <form onSubmit={handleSubmit}>
      <label >frist Name </label>
      <input type="text" name="firstName" value={user.firstName} onChange ={handleChange} /><br />
      <label >last Name </label>
      <input type="text" name="lastName" value={user.lastName} onChange ={handleChange} /><br />
      <label >email </label>
      <input type="text" name="email" value={user.email} onChange ={handleChange} /><br />
      <button type = "submit"> 제출 </button>  
      
    </form>
    </>
  );
}

