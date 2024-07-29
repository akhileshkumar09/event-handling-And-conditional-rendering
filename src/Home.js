import React from 'react'
import {BrowserRouter as Router, Routes, Route,  Link} from 'react-router-dom'
import OnClick from './components/OnClick'
import HandleForm from './components/HandleForm'
import BucketList from './components/BucketList'
import ToggleButton from './components/ToggleButton'
import FetchData from './components/FetchData'
import NumberList from './components/NumberList'
import Todos from './components/Todos'


function Home() {
    const number = [1,2,3,4,5,6,7,8,9]
  return (
    <Router>
    <div>
        <h2>This is Home</h2>
        <div className='menu'>
            <span>
                <Link to='/onclick'>OnClick</Link>
            </span>
            <span>
                <Link to='/handle-submit'>HandleForm</Link>
            </span>
            <span>
                <Link to='bucket-list'>Bucket List</Link>
            </span>
            <span>
                <Link to='/toggle-button'>ToggleButton</Link>
            </span>
            <span>
                <Link to='/fetch-data'>Fetch-Data</Link>
            </span>
            <span>
                <Link to='/number-list'>NumberList</Link>
            </span>
            <span>
                <Link to='/todos'>Todos</Link>
            </span>
        </div>

        <Routes>
            <Route path='/onclick' element={<OnClick/>}/>
            <Route path='/handle-submit' element ={<HandleForm/>}/>
            <Route path='/bucket-list' element = {<BucketList/>}/>
            <Route path='/toggle-button' element = {<ToggleButton/>}/>
            <Route path='/fetch-data' element = {<FetchData/>}/>
            <Route path='/number-list' element = {<NumberList numbers={number}/>}/>
            <Route path='/todos' element = {<Todos/>}/>
        </Routes>
    </div>
    </Router>
  )
}

export default Home