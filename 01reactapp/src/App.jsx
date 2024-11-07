import { useState } from 'react'
import Product from './Product'


function App() {

  const [a,b] = useState(false)
  const [c,d]= useState(false)

  return (
    <>
      <h1 className={`${a===false ? "bg-red-400" : "bg-fuchsia-400"}`}>hey</h1>
      <button onClick={()=>{b(!a)}}  className='px-3 py-1 bg-slate-600 rounded-md'>Change</button>
      <div className='w-full h-[70vh] bg-zinc-600'>

      <Product water="apple" bio={{name:"zafar",age:25,gender:"male",city:"faisalabad"}}/>

      <Product water="=====guava" bio={{name:"zafar",age:25,gender:"male",city:"faisalabad"}}/>

        <div>
        <h1 className={`text-[100px] ${c===true?"text-red-500":"text-green-500"}`}>{c===false?"not hello":"hello"}</h1>
          <button onClick={()=>d(!c)}  className={`px-3 py-1 bg-cyan-700 rounded ml-5 ${c===false?"scale-110":"scale-105"}`}>{c===false?"change again":"change"}</button>
        </div>



      </div>
    </>
  )
}

export default App
