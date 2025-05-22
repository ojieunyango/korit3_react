import { useState, useEffect } from "react";
import useTitle from "../useTitle";
import '../App.css'


export default function Counter(){  // 컴포넌트가 하나일때 아래에 안쓰고 이렇게 쓸수있음
  const [ count, setCount] = useState(0);
  useTitle(`당신은 ${count} 번 클릭`) // 순수 JS 함수 그래서 백틱으로 작성 

  useEffect(()=>{
    console.log('useEffect가 호출되었습니다.')
    return()=>{
      console.log('clean-up 함수가 호출되었습니다.');
    }
  }, [count]);
  return (
  <div>
    <p>Counter = {count}</p>
    <button onClick={() => setCount(prevCount => prevCount + 1)}>
      증가
    </button>
  </div>);
}

