


export default function MyComponent(){
  const handleClick = ()=> alert(`버튼이 클릭되었습니다.`)
  return(
    <>

    <button onClick={handleClick}>Click!</button>  
    </>
  )
}