
import './App.css'
import Counter from './Counter'
import Batsman from './Batsman'
import Users from './Users'
import Friends from './Friends'
import { Suspense } from 'react'
import Posts from './Posts'
import Players from './Players'

const fetchUsers = fetch('https://jsonplaceholder.typicode.com/users').then(res => res.json())

const fetchFriends = async() => {
  const res = await fetch('https://jsonplaceholder.typicode.com/users')
  return res.json();
}

const fetchPosts = async()=>{
  const res = await fetch('https://jsonplaceholder.typicode.com/posts')
  return res.json();
}

function App() {
  const friendsPromise = fetchFriends();

  const postsPromise = fetchPosts();
  
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

     
      <Players></Players>
     

     <Suspense fallback={<h4>Posts are loading.......</h4>}>
      <Posts postsPromise={postsPromise}></Posts>
     </Suspense>

    <Suspense fallback={<h3>Loading...</h3>}>
      <Users fetchUsers = {fetchUsers}></Users>
    </Suspense>

    <Suspense fallback={<h3>Friends are coming..</h3>}>
      <Friends friendsPromise={friendsPromise}></Friends>
    </Suspense>

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
