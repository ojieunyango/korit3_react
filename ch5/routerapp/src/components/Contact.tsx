import { Routes, Route } from "react-router-dom"
import ContactBusan from "./ContactBusan"

function Contact() {
  

  return (
    <>
      <h3>Contact Componets</h3>
      <Routes>
        <Route path="busan" element ={<ContactBusan/>}></Route>
      </Routes>
    </>
  )
}

export default Contact