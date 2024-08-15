import React from 'react';
import '../index.css';

const Top = () => {
  return (
    <div className='wrap'>
        <div className='top_area'>
            <ul>
                <li><img src="/img/icon/vscode.png" alt='vscodeicon' /></li>
                <li>File</li>
                <li>Edit</li>
                <li>View</li>
                <li>Go</li>
                <li>Run</li>
                <li>Terminal</li>
                <li>Help</li>
            </ul>
            <div className='title'>
                KIM JAE YEON - Visual Studio Code
            </div>
            <div className='top_button'>
                <span className="red" />
                <span className="yellow" />
                <span className="green" />
            </div>
        </div>
    </div>
  )
}

export default Top