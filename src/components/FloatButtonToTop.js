import React, {useState, useEffect, useRef} from 'react';
import ToTop from '../assets/images/to-top.svg';

const FloatButtonToTop = props => {
    const [showScroll, setShowScroll] = useState(false);
  
    const checkScrollTop = () => {
      if (!showScroll && window.pageYOffset > 150){
        setShowScroll(true)
      } else if (showScroll && window.pageYOffset <= 150){
        setShowScroll(false)
      }
    };
    const scrollTop = () =>{
        window.scrollTo({top: 0, behavior: 'smooth'});
    };
    window.addEventListener('scroll', checkScrollTop)
    
    return(
        <div onClick={() => scrollTop()} className={showScroll ? "float-to-top shows":"float-to-top hides"}>
            <img src={ToTop} alt="ToTop" />
        </div>
    )
}

export default FloatButtonToTop;