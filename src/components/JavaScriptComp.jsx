import React from 'react'

const JavaScriptComp = () => {
  const num = 5;
  console.log(num);
  let myArr = ["Apple", "Banana", "Orange", "Papaya","Watermelon"];
  console.log(myArr);
  const styles = {
    color:"violet"
  }
  let myObj  = {
    name: "Coding",
    age: 23,
    gender:"female"
  }
  var flag = false;
  var a = "C";
  return (
    <div>
        <h1>JavaScriptComp</h1>
        <p>Number is : {num}</p>
        <p>first fruit is : {myArr[0]}</p>

        {myArr.map((item, index)=> {
            return <p style={styles} key={index}>{item}</p>
        })}

        <p>{myObj.age}</p>
        {Object.keys(myObj).map((item, index)=>{
            return (
                <p key={index}>
                    {item}: {myObj[item]}
                </p>
            );
        })}
        {flag === true ? <p>Flag is true</p> : <p>Falg is false</p>}
        {a === "A" ? <p>Value is : A</p> : a === "B" ? <p>Value is B</p>: <p>Value is nothing</p>}
    </div>
  )
}

export default JavaScriptComp