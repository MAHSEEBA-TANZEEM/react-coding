import React from 'react'
import MyComp from '../components/myComp'

const About = () => {
  const num = 25;
  const fruit = "Litchi";
  return (
    <div>
      <h1>Welcome to About page!</h1>
      <MyComp number = {num} fruitname = {fruit}/>
    </div>
  )
}

export default About