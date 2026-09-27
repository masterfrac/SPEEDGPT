import React from 'react'
import { assets } from '../assets/assets'
import { useAppContext } from '../context/AppContext'

const SideBar = () => {
  const { user, chats, setSelectedChat, theme, setTheme } = useAppContext()
  const [search, setSearch] = React.useState('')

  return (
    <div className='flex flex-col h-screen min-w-72 p-5 dark:bg-dark-800 dark:text-white bg-white text-black border-r border-gray-300 dark:border-dark-700'>

      {/* Logo */}
      <div className='flex items-center gap-3'>
        <img
          src={assets.logo}
          alt="SpeedGPT"
          className='w-12 h-12'
        />

        <div>
          <h1 className='text-3xl font-bold'>SpeedGPT</h1>
          <p className='text-sm text-purple-600'>
            Intelligent AI Assistant
          </p>
        </div>
      </div>

    </div>
  )
}

export default SideBar