import React,{useState} from 'react'

function BucketList() {
    const [inputValue, setInputValue] =  useState('')
    const [items, setItems] = useState([])

    const handleChangeInput = (e)=>{
        setInputValue(()=>e.target.value);
    }

    const handleSubmit = (e) =>{
        e.preventDefault();
        if(inputValue.trim()){
            setItems((prevItems) => [...prevItems, inputValue]);
            setInputValue('')
        }
    }

    const deleteItem = (index)=>{
          setItems((prevItems) => prevItems.filter((_, itemIndex) => itemIndex !== index))
    }
  return (
    <div>
    <h2>BucketList</h2>
    <div>
        <form onSubmit={handleSubmit}>
            <input
            type='text'
            value={inputValue}
            onChange={handleChangeInput}
            placeholder='Enter a list item'
            />
            <button type='submit'>Add</button>
        </form>
        <div>
            <ul>
                {items.length === 0 ? <h3>List is empty</h3> : items.map((item,index)=>{
                    return (<li key={index}><h4>{item}</h4> <button onClick={()=>deleteItem(index)}>Delete</button></li>)
                })}
            </ul>
        </div>
    </div>
    </div>
  )
}

export default BucketList


// ----------------------------------------------------------
// import React, { useState } from 'react';

// function BucketList() {
//   const [items, setItems] = useState([]);
//   const [inputValue, setInputValue] = useState('');

//   const handleInputChange = (event) => {
//     setInputValue(event.target.value);
//   };

//   const handleAddItem = (event) => {
//     event.preventDefault();
//     if (inputValue.trim()) {
//       setItems([...items, inputValue]);
//       setInputValue('');
//     }
//   };

//   const handleDeleteItem = (index) => {
//     const newItems = items.filter((_, i) => i !== index);
//     setItems(newItems);
//   };

//   return (
//     <div>
//       <form onSubmit={handleAddItem}>
//         <input
//           type="text"
//           value={inputValue}
//           onChange={handleInputChange}
//           placeholder="Add new item"
//         />
//         <button type="submit">Add Item</button>
//       </form>
//       <ul>
//         {items.map((item, index) => (
//           <li key={index}>
//             {item} 
//             <button onClick={() => handleDeleteItem(index)}>Delete</button>
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// }

// export default BucketList;
