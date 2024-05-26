// src/pages/StudyPage.jsx
import React from 'react';
import { Link, NavLink } from 'react-router-dom';

const StudyPage = () => {
  return (
    <div>
      <h1>Study Page</h1>
      <p>리액트는 페이지(URL)를 이동할 때마다 서버에서 데이터를 받는 대신 자바스크립트가 출력을 해준다.<br />
        페이지 경로를 나눠주는 것이 라우터이다.</p>
      
      <h3>⭐ Link 컴포넌트를 이용한 페이지 이동</h3>
      <p>&lt;Link&gt; 컴포넌트는 &lt;a&gt; 태그처럼 링크를 연결하지만, URL 개념이 아닌 path 개념이다.<br />
        리액트 라우터에서 페이지를 이동할 때 Link 컴포넌트를 사용하면 내가 이동하고자 하는 경로(URL)로 이동할 수 있다.<br />
        Link 컴포넌트를 사용하면 브라우저의 주소만 변경되고, 페이지를 새로 불러오지 않는다.
      </p>
      
      <h3>⭐ 특정 링크에 스타일을 넣어주는 NavLink</h3>
      <p>특정 링크에 스타일을 넣어 줄 수 있는 점이 Link 컴포넌트와 가장 큰 차이점이다.<br />
        activeStyle과 activeClassName 속성을 활용하여 현재 URL과 일치할 때 스타일을 적용할 수 있다.<br />
      </p>
      
      <Link to="/">GO HOME</Link>
    </div>
    
  );
};

export default StudyPage;
