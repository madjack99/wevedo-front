import React, { useEffect } from 'react';
import { animateScroll as scroll } from 'react-scroll';

const withScrollToTop = () => Wrapped => props => {
  useEffect(() => {
    scroll.scrollToTop();
  });

  return <Wrapped {...props} />;
};

export default withScrollToTop;
