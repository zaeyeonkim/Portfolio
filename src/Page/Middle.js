import React, { useState } from 'react';
import '../index.css';
import Tab from '../Component/Tab'
import CenterTab from '../Component/CenterTab'

const Middle = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [activeTab, setActiveTab] = useState(0);

  const handleButtonClick = (index) => {
    setActiveIndex(index);
    setActiveTab(index);
  };

  return (
    <div className='wrap'>
        <div className='middle_area'>
            <div className='middle_left'>
                <div className='button_top'>
                    {[...Array(5)].map((_, index) => (
                    <button
                        key={index}
                        className={activeIndex === index ? 'active' : ''}
                        onClick={() => handleButtonClick(index)}
                    >
                        {index === 0 && (
                        <svg width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="rgb(106, 115, 125)"><path d="M17.5 0h-9L7 1.5V6H2.5L1 7.5v15.07L2.5 24h12.07L16 22.57V18h4.7l1.3-1.43V4.5L17.5 0zm0 2.12l2.38 2.38H17.5V2.12zm-3 20.38h-12v-15H7v9.07L8.5 18h6v4.5zm6-6h-12v-15H16V6h4.5v10.5z"></path></svg>
                        )}
                        {index === 1 && (
                        <svg width="16" height="16" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" fill="rgb(106, 115, 125)"><path d="M4.708 5.578L2.061 8.224l2.647 2.646-.708.708-3-3V7.87l3-3 .708.708zm7-.708L11 5.578l2.647 2.646L11 10.87l.708.708 3-3V7.87l-3-3zM4.908 13l.894.448 5-10L9.908 3l-5 10z"></path></svg>
                        )}
                        {index === 2 && (
                        <svg width="16" height="16" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" fill="rgb(106, 115, 125)"><path d="M13.23 1h-1.46L3.52 9.25l-.16.22L1 13.59 2.41 15l4.12-2.36.22-.16L15 4.23V2.77L13.23 1zM2.41 13.59l1.51-3 1.45 1.45-2.96 1.55zm3.83-2.06L4.47 9.76l8-8 1.77 1.77-8 8z"></path></svg>
                        )}
                        {index === 3 && (
                        <svg width="16" height="16" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" fill="rgb(106, 115, 125)"><path fillRule="evenodd" clipRule="evenodd" d="M1 3.5l.5-.5h13l.5.5v9l-.5.5h-13l-.5-.5v-9zm1 1.035V12h12V4.536L8.31 8.9H7.7L2 4.535zM13.03 4H2.97L8 7.869 13.03 4z"></path></svg>
                        )}
                        {index === 4 && (
                        <svg width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="rgb(106, 115, 125)"><path fillRule="evenodd" clipRule="evenodd" d="M13.5 1.5L15 0h7.5L24 1.5V9l-1.5 1.5H15L13.5 9V1.5zm1.5 0V9h7.5V1.5H15zM0 15V6l1.5-1.5H9L10.5 6v7.5H18l1.5 1.5v7.5L18 24H1.5L0 22.5V15zm9-1.5V6H1.5v7.5H9zM9 15H1.5v7.5H9V15zm1.5 7.5H18V15h-7.5v7.5z"></path></svg>
                        )}
                    </button>
                    ))}
                </div>
                <div className='button_bottom'>
                    <button><img src="/img/icon/user.png" alt='user' fill="rgb(106, 115, 125)" /></button>
                    <button><img src="/img/icon/setting.png" alt='setting' fill="rgb(106, 115, 125)" /></button>
                </div>
            </div>
            <div className='middle_center'>
                <CenterTab activeTab={activeTab} setActiveTab={setActiveTab} />
            </div>
            <div className='middle_right'>
                <Tab activeTab={activeTab} setActiveTab={setActiveTab} />
            </div>
        </div>
    </div>
  )
}

export default Middle;
