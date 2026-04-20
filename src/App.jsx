
import './App.css'
import Counter from './Counter'
import Batsman from './Batsman'

function App() {
  
  function handleClick(){
    alert('I am Clicked 1')
  }

  const handleClick3 = () =>{
    alert('I am clicked 3')
  }

  const handleAdd5 = (num) =>{
    const newNum = num + 5;
    alert(newNum);
  }

  return (
    <>
     <h1>Vite + React</h1>

    <Batsman></Batsman>
     <Counter></Counter>


     <button onClick={handleClick}>Click Me 1</button>

     <button onClick={function handleClick2(){
      alert('clicked 2')
     }}>Click Me 2</button>

     <button onClick={handleClick3}>Click Me 3</button>
     
     <button onClick={()=>alert('Click 4')}>Click Me 4</button>
     
     <button onClick={()=>handleAdd5(7)}>Click Add 5</button>
     {/* <button onClick={()=>handleAdd5(10)}>Click Add 5</button> */}
    </>
  )
}

export default App
