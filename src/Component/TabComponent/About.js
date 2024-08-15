import React, { useState } from 'react';
import '../../css/About.css';
import me1 from '../images/me1.jpg';
import me2 from '../images/me2.png';

const About = () => {
  const [currentImage, setCurrentImage] = useState(me2);
  const handleMouseOver = () => {
    setCurrentImage(me1); 
  };

  const handleMouseOut = () => {
    setCurrentImage(me2); 
  };

  return (
    <div className='wrap'>
      <div className='about_area'>
        <div className='about_photo'>
          <img
            src={currentImage}
            alt='me'
            onMouseOver={handleMouseOver}
            onMouseOut={handleMouseOut}
          />
        </div>
        <div className='about_text'>
          <span><em>1</em>김재연</span>
          <span><em>2</em>1995. 3. 13.</span>
          <span><em>3</em>ziveon95@naver.com</span>
          <span><em>4</em>010-4094-4231</span>
          <div className='introduce'>
            <em>5</em>안녕하세요!<br />
            <em>6</em>도전을 두려워하지않는 <strong>웹 퍼블리셔 김재연</strong>입니다.<br />
            <br />
            <em>7</em>저는 웹 퍼블리싱하는 작업을 좋아하고 제가 생각하고 기획한대로 만들어가는 <br />
            <em>8</em>결과물을 보며 성취감과 자부심을 갖게 됩니다.<br />
            <em>9</em><strong>"너의 시작은 미약했으나, 그 끝은 창대하리라"</strong> 제가 제일 좋아하는 문구입니다.<br />
            <em className='last'>10</em>웹 퍼블리셔로서 미약하고 부족한 부분이 있지만, 부족하기에 채울수 있어서 성장 하는데<br />
            <em className='last'>11</em>가장 필요한 동기와 밑거름이 된다고 생각합니다.<br />
            <em className='last'>12</em>지치지 않는 열정과 꾸준한 의지로 끈임없이 발전해가는 제 미래가 설레이고 기대가 됩니다.<br />
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
