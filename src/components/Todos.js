import React, { useState } from 'react'

function Todos() {
   
    const [todoList, setTodoList] = useState([])
    const [inputText, setInputText] = useState('')
   

    const handleInputChange = (e)=>{
        setInputText(e.target.value)
        
    }
    
    const handleSubmit = (e) =>{
        e.preventDefault();
        if(inputText.trim()){         
            setTodoList([...todoList,{id : Date.now(), text : inputText}])
            setInputText('')
        }
        
    }
    
    const handleDelete = (id)=>{
           setTodoList(todoList.filter( i=>i.id !== id))
    }
  return (
    <div>
    
     <div>
        <form onSubmit={handleSubmit}>
            <input
            type='text'
            value={inputText}
            onChange={handleInputChange}
            placeholder='Enter the next Todo'
            />
            <button type='submit'>Add</button>
        </form>
     </div>
     <div>
        <ul>
            {
                todoList.map((item)=>(
                    <li key={item.id}><i> {item.text} </i><button onClick={()=>handleDelete(item.id)}> Delete</button></li>
                ))
            }
        </ul>
     </div>
    </div>
  )
}

export default Todos