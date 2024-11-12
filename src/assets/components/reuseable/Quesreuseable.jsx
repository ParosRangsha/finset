import React from 'react'

function Quesreuseable({num, heading, paragraph}) {
  return (
    <div className='options'>
        <h5>{num}</h5>
        <div className='ques'>
            <h3>{heading}</h3>
            <p className='mypara'>{paragraph}</p>
        </div>
        <h4 className='hideshow'>+</h4>

    </div>
  )
}

export default Quesreuseable