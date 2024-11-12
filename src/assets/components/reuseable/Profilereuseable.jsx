import React from 'react'

function Profilereuseable({img, title, designation, alt}) {
  return (
    <div className='profile'>
        <div className='profilepic'>
            <img src={img} alt={alt} />
        </div>
        <div className='position'>
            <h5>{title}</h5>
            <h6>{designation}</h6>
        </div>
    </div>
  )
}

export default Profilereuseable