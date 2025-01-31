import React, { useState } from 'react'

const Api = () => {
    let [data, setData] = useState([]);
    const getApi = ()=> {
        console.log("Get API called!");
        fetch("https://dummyjson.com/products")
          .then((res)=> res.json())
         //   .then(console.log);
          .then((a)=> {
            setData(a.products);
          });
    };
    const postApi = ()=> {
      console.log("Post API called!");
      fetch("https://dummyjson.com/products/add",{
        method: "POST",
        headers: { "Content-Type": "applicaton/json" },
        body: JSON.stringify({
          title: "BMW Pencil",
          price: 1200,
          desc: "This is desc",
        }),
      })
      .then((res)=> res.json())
      .then(console.log);
    };
  return (
    <div>
        <button onClick={()=> {getApi();}}>GET API</button>
        {data.map((item, index)=> {
            return <p key= {index}>{item.title}</p>;
        })}
        <button onClick={()=> {postApi();}}>POST API</button>
    </div>
  )
}

export default Api;