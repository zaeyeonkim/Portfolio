import React from 'react'
import '../index.css'

const Bottom = () => {
  return (
    <div className='wrap'>
        <div className='bottom_area'>
            <ul>
                <li><img src="/img/icon/cross.png" alt='cross' /></li>
                <li><img src="/img/icon//stop.png" alt='stop' /> 0</li>
                <li><img src="/img/icon/warning.png" alt='wargning' /> 0</li>
            </ul>
            <div className='bottom_button'>
                <span className="red" />
                <span className="yellow" />
                <span className="green" />
            </div>
        </div>
    </div>
  )
}

export default Bottom