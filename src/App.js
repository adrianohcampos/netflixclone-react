import React, { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";

import Header from './components/Header'

import Helmet from "react-helmet";
const App = () => {

  const [blackHeader, setBlackHeader] = useState(false);

  useEffect(() => {
    const scrollListener = () => {
      if (window.scrollY > 10) {
        setBlackHeader(true);
      } else {
        setBlackHeader(false);
      }
    }
    window.addEventListener('scroll', scrollListener);

    return () => {
      window.removeEventListener('scroll', scrollListener)
    }
  }, [])


  return (
    <div className="App">
      <Helmet>
        <title>Netflix</title>
        <meta name="description" content="Clone Netflix in React" />
      </Helmet>
      <Header black={blackHeader} />
      <Outlet />
    </div>
  );
}

export default App;