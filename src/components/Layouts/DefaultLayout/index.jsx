import React from 'react'
import NavBar from '../../../pages/Landing/NavBar'

const DefaultLayout = ({children}) => {
  return (
    <div>
      <NavBar/>
      {children}
    </div>
  )
}

export default DefaultLayout