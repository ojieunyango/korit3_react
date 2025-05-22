import  { useState } from 'react';



function HatchingLesson() {
  const [ count1, setCount1] = useState(0);
  const [ count2, setCount2] = useState(0);

  const increment = () => {
    setCount1(count1 + 1);
    setCount2(count1 + 2);
  }

  return (
    <>
     <p>현재 카운터: {count1} | {count2}</p>
     <button onClick={increment}>++</button>
    </>
  );
}

export default HatchingLesson