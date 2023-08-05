import React from 'react'

type Props = {}

const about = (props: Props) => {
  return (
    <div>
      <p>about</p>
      <p>only user can access it </p>
      <div className="social_icons">
      <a href='/' className='in'>homepage</a>
      <a href='/careers' className='in'>carrers</a>
      <a href='/contactus' className='in'>contactus</a>
      </div>
    </div>
  )
}

export default about