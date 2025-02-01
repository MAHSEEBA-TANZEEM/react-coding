import Comp2 from "./components/Comp2";
import JavaScriptComp from "./components/JavaScriptComp";
import MyComp from "./components/myComp";
import Hooks from "./components/Hooks";
import Api from "./components/Api";
import Navbar from "./components/Navbar";

function App() {
    const num = 25;
    const fruit = "Litchi";
  return(
    <>
       <h1>Hello World</h1>
       <Navbar/>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime neque, eum porro cumque eaque ducimus, 
          cupiditate, incidunt exercitationem nam ullam delectus nulla voluptate laudantium doloribus ab suscipit 
          obcaecati ad ex.
        </p>
        <img src="data:image/jpeg;base64,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" alt="" 
        />
        <MyComp number = {num} fruitname = {fruit}/>
        <Comp2 number = {num} fruitname = {fruit}/>
        <br /><br /><br /><br />
        <JavaScriptComp/>
        <Hooks/>
        <Api/>
    </>
    
  );
}

export default App;