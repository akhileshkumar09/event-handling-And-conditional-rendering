import React from 'react'

function NumberList(props) {
    const numbers = props.numbers;
    const numberList = numbers.map(number=>
        <li key={number.toString()}>{number}</li>
    )
  return (
    <div>
    <h2>NumberList</h2>
    <ul>{numberList}</ul>
    </div>
  )
}

export default NumberList