import { useRef } from "react";
import Counter from "./components/Counter";
import useTitle from "./useTitle";


function App() {
 const inputRef = useRef(null);  
 useTitle
  return (
    <>
     <Counter></Counter>
     <input ref={inputRef}/> <br /> 
     <button onClick={()=> inputRef.current.focus()}>
      Focus input
     </button>
  
    </>
  );
}

export default App
