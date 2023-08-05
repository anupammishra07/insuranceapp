import React from 'react'

type Props = {}

const careers = (props: Props) => {
  return (
    <div>
    <p>carrers page</p>
    <p>only user can access it </p>
    <div className="social_icons">
    <a href='/about' className='in'>about</a>
    <a href='/' className='in'>home</a>
    <a href='/contactus' className='in'>contactus</a>
    </div>
  </div>
  )
}

export default careers