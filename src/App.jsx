import React, { useState } from 'react'
import topicon from '../images/topicon.png'
import { MdAdd } from "react-icons/md";
import { FaCheckSquare } from "react-icons/fa";
import { RiDeleteBinLine } from "react-icons/ri";


const App = () => {
 
  const[data,setdata]=useState('');
  const[items,setitems]=useState([]);


  const addToDo=()=>{
    if(!data){
       alert('Please add something')
    }
    else{
      setitems([...items,data]);
      setdata('');
    }
  }


  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      addToDo();
    }
  };

  const handleDelete=(id)=>{
    const filterData = items.filter((elem,ind)=>{
      return ind!=id;
    })
    setitems(filterData);

  }

  const removeAll=()=>{
    setitems([]);
  }
 
  


  return (
    <div>
      <div className='flex flex-col items-center justify-center mx-3 '>
        <figure>
          <img className='h-[125px] w-[100px] flex items-center m-9' src={topicon} alt="topicon" />
        </figure>
        <figcaption className='font-bold text-4xl' > Add your list here 😃</figcaption>
        <div className="flex items-center  mt-10">
          <input placeholder={`hey👋 What to do next?`} value={data} onChange={(e)=>{setdata(e.target.value)}} className='font-semibold placeholder:text-gray-500 border-[1px] border-r-0 border-black h-[60px] grow shadow-sm rounded-md rounded-e-none px-4 focus-visible:outline-green-400 text-lg transition-all duration-300"' type="text" />
          <button onClick={addToDo} onKeyPress={handleKeyPress} className='w-[60px] h-[60px]  rounded-md rounded-s-none bg-green-500 flex justify-center items-center cursor-pointer transition-all duration-300 hover:bg-green-400'><MdAdd size={30} color="#fff" /></button>
        </div>

        <div>

          {
            items.map((elem , ind)=>{
              return (
        <div key={ind} className='my-10 flex flex-row items-center justify-center space-x-4'>
        <FaCheckSquare className=' hover:text-red-500 active:text-red-500 mt-[3px]' size={20} />
          <div className='text-2xl '>{elem}</div>
          <RiDeleteBinLine onClick={()=>{handleDelete(ind)}} className='hover:text-red-500 mt-[3px] ' size={20} />
        </div>)
            })}
          
        </div>
        
        <div>
          <button onClick={removeAll} className=' w-[100px] h-[50px] text-white font-semibold bg-green-500 hover:bg-white hover:border-2 hover:border-green-500 hover:text-black rounded-md mt-4 '>All Done</button>
          </div>
      </div>
    </div>
  )
}

export default App
