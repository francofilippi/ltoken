import React, { useState } from 'react';
import '../assets/css/ScrollArrow.css';


const ScrollArrow = () => {

  const [showScroll, setShowScroll] = useState(false)

  const checkScrollTop = () => {
    if (!showScroll && window.pageYOffset > 400) {
      setShowScroll(true)
    } else if (showScroll && window.pageYOffset <= 400) {
      setShowScroll(false)
    }
  };

  const scrollTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  window.addEventListener('scroll', checkScrollTop)

  return (
    <React.Fragment>
      <button className="scrollup btn-default align-items-center justify-content-center" onClick={scrollTop} style={{ display: showScroll ? 'flex' : 'none' }}>
        <i className="icofont-arrow-up"></i>
      </button>
    </React.Fragment>
  );
}


export default ScrollArrow;

