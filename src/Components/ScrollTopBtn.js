import React, { useEffect, useState } from 'react';

function ScrollTopBtn() {
  const [isVisible, setIsVisible] = useState(false);

  // Handler
  const toggleVisibility = () => {
    if (window.pageYOffset > 600) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behaviour: 'smooth',
    });
  };

  useEffect(() => {
    window.addEventListener('scroll', toggleVisibility);

    return () => {
      window.removeEventListener('scroll', toggleVisibility);
    };
  }, []);

  return (
    <div className="scroll-btn-wrapper">
      <button
        className={isVisible ? 'visible' : 'invisible'}
        type="button"
        onClick={scrollToTop}
      >
        <span className="icon fal fa-angle-up" />
      </button>
    </div>
  );    
}

export default ScrollTopBtn;