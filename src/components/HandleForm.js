import React, {useState} from 'react'

function HandleForm() {
    const [inputValue, setInputValue] = useState('')
    const handleInputChange = (event) =>{
        setInputValue(event.target.value)
    }

    const handleSubmit = (event)=>{
        event.preventDefault();
        alert('your entered message in input: ' + inputValue)
    }
  return (
    <div>
        <form onSubmit={handleSubmit}>
            <input
            type='text'
            value={inputValue}
            onChange={handleInputChange}
            placeholder='Enter your message'
            />
            <button type='submit'>submit</button>
        </form>
    </div>
  )
}

export default HandleForm