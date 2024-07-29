import React, {useState} from 'react'

function ToggleButton() {
    const [showDetail, setShowDetail] = useState(false)

    const toggleShowDetail = () =>{
        setShowDetail(!showDetail)
    }
  return (
    <div>
      <h2>Akhilesh Kumar</h2>
      <button onClick={toggleShowDetail}>
        {showDetail ? 'Hide Detail' : 'Show Detail'}
      </button>

      <div>
        {showDetail && (<div>
        <h2>Email: shfialjsabsc@gmail.com</h2>
        <h2>Mo. 91 768 795 4368</h2></div>)}
      </div>
    </div>
  )
}

export default ToggleButton