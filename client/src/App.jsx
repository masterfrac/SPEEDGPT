import React from 'react'
import { Routes } from 'react-router-dom'
import Sidebar from './components/Sidebar'
import ChatBox from './components/ChatBox'
import Credits from './pages/Credits'
import Community from './pages/Community'
const App = () => {
  return (
    <>
    <div>
    <div className='flex h-screen w-screen'>
      <Sidebar/>
      <Routes>
     <Route path='/' elements={<ChatBox />}/>
     <Route path='/credits' elements={<Credits/>}/>
     <Route path='/community' elements={<Community/>}/>
      </Routes>
     </div>
    </div>
    </>
  )
}

export default App