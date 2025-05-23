import { HelloProps } from  "../types";



function HelloComponent({name, age}: HelloProps) {
 

  return (
    <>
      <h1> Hello Component!</h1>
      <h2>{name} {age} 살이네요</h2>
    </>
  )
}

export default HelloComponent
