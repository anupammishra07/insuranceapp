import React from 'react'

type Props = {}

const homepage = (props: Props) => {
  return (
    <div>
      <p>homepage</p>
      <p>only user can access it </p>
      <div className="social_icons">
      <a href='/about' className='in'>about</a>
      <a href='/careers' className='in'>carrers</a>
      <a href='/contact' className='in'>contactus</a>
      </div>
    </div>
    
  )
}

export default homepage