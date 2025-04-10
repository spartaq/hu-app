import React, { useRef, useState, useEffect } from 'react';

const FullscreenButton = () => {
  const elementRef = useRef(null);
  const [isFullscreen, setIsFullscreen] = useState(false);

  const requestFullscreen = () => {
    if (elementRef.current) {
      if (elementRef.current.requestFullscreen) {
        elementRef.current.requestFullscreen();
      } else if (elementRef.current.mozRequestFullScreen) { /* Firefox */
        elementRef.current.mozRequestFullScreen();
      } else if (elementRef.current.webkitRequestFullscreen) { /* Chrome, Safari & Opera */
        elementRef.current.webkitRequestFullscreen();
      } else if (elementRef.current.msRequestFullscreen) { /* IE/Edge */
        elementRef.current.msRequestFullscreen();
      }
    }
  };

  const exitFullscreen = () => {
    if (document.exitFullscreen) {
      document.exitFullscreen();
    } else if (document.mozCancelFullScreen) { /* Firefox */
      document.mozCancelFullScreen();
    } else if (document.webkitExitFullscreen) { /* Chrome, Safari and Opera */
      document.webkitExitFullscreen();
    } else if (document.msExitFullscreen) { /* IE/Edge */
      document.msExitFullscreen();
    }
  };

  const toggleFullscreen = () => {
    if (!document.fullscreenElement &&    // alternative standard method
      !document.mozFullScreenElement && !document.webkitFullscreenElement && !document.msFullscreenElement) {  // current working methods
      requestFullscreen();
      setIsFullscreen(true);
    } else {
      exitFullscreen();
      setIsFullscreen(false);
    }
  };

  useEffect(() => {
    document.addEventListener('fullscreenchange', () => setIsFullscreen(!!document.fullscreenElement));
    document.addEventListener('mozfullscreenchange', () => setIsFullscreen(!!document.mozFullScreenElement));
    document.addEventListener('webkitfullscreenchange', () => setIsFullscreen(!!document.webkitFullscreenElement));
    document.addEventListener('msfullscreenchange', () => setIsFullscreen(!!document.msFullscreenElement));

    return () => {
      document.removeEventListener('fullscreenchange', () => setIsFullscreen(!!document.fullscreenElement));
      document.removeEventListener('mozfullscreenchange', () => setIsFullscreen(!!document.mozFullScreenElement));
      document.removeEventListener('webkitfullscreenchange', () => setIsFullscreen(!!document.webkitFullscreenElement));
      document.removeEventListener('msfullscreenchange', () => setIsFullscreen(!!document.msFullscreenElement));
    };
  }, []);

  return (
    <div ref={elementRef} className={isFullscreen ? 'fullscreen-enabled' : ''}>
      <button onClick={toggleFullscreen}>Toggle Fullscreen</button>
    </div>
  );
};

export default FullscreenButton;
