import { useEffect, useState } from 'react';
import './App.css'

function App() {
 const [weather, setWeather ] = useState({
  temp: '',
  desc: '',
  icon: ''
 });
 useEffect(()=>{
  fetch('http://api.openweathermap.org/data/2.5/weather?q=Busan&units=Metric&APIkey=75fee4aa87b3ad4dbf21eb4ced1b0b56')
  .then(response=>response.json())
  .then(result=>{
    setWeather({
      temp: result.main.temp,
      desc: result.weather[0].description,
      icon: result.weather[0].icon,
    });
  })
  .catch(err=>console.log(err))
 },[]);

  if(weather.icon){
  
  return (
    <>
     <p>온도: {weather.temp}</p>
     <p>설명: {weather.desc}</p>
     <p>아이콘: {weather.icon}</p>
     <img src={`http://openweathermap.org/img/wn/${weather.icon}@2x.png`} alt="날씨 아이콘입니다." />
    </>
  )

  } else{
    return <h1>로딩중...</h1>
  }
}


export default App
