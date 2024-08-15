import React, { useState, useEffect } from 'react';
import '../../css/Home.css';

const Home = () => {
  const [text, setText] = useState('');
  const welcomeText = "＜<em>h1</em>＞도전을 두려워하지않고 성장해 나가는 김재연입니다.＜／<em>h1</em>＞";
  const additionalText = "＜<em>div</em> <span>class</span>=<strong>″김재연″</strong>＞<br />　　＜<em>p</em>＞2015.06 ~ 2016.12 32사단 기동대대 병장 근무＜／<em>p</em>＞<br />　　＜<em>p</em>＞2016.12 ~ 2024.03 1공수여단 중사 전역＜／<em>p</em>＞<br /> 　　＜<em>p</em>＞2018.03 ~ 2020.02 부천대학교 재활스포츠학과 졸업＜／<em>p</em>＞<br />　　＜<em>p</em>＞2023.11 ~ 2024.05 MBC컴퓨터아카데미 개발자 과정 수료＜／<em>p</em>＞<br />＜／<em>div</em>＞";
  const combinedText = welcomeText + "<br />" + additionalText;

  useEffect(() => {
    let charIndex = 0;
    const typingInterval = setInterval(() => {
      if (charIndex <= combinedText.length) {
        setText(combinedText.substring(0, charIndex));
        charIndex++;
      } else {
        clearInterval(typingInterval);
      }
    }, 50);
    return () => clearInterval(typingInterval);
  }, []);

  return (
    <div className='wrap'>
        <div className='home_area'>
            <span className='typing' dangerouslySetInnerHTML={{ __html: text }}></span>
            <svg className='logo' viewBox="0 0 300 300" xmlns="http://www.w3.org/2000/svg" fill="currentColor"><defs></defs><path d="m218.62 29.953-105.41 96.92L54.301 82.47 29.955 96.64l58.068 53.359-58.068 53.359 24.346 14.212 58.909-44.402 105.41 96.878 51.424-24.976V54.93zm0 63.744v112.6l-74.719-56.302z" strokeWidth="17.15"></path></svg>
        </div>
    </div>
  );
};

export default Home;
