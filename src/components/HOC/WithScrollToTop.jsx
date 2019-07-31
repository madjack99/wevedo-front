import React, { useEffect } from 'react';
import { withRouter } from 'react-router-dom';

import { animateScroll as scroll } from 'react-scroll';

const withScrollToTop = () => Wrapped =>
  withRouter(({ location, ...props }) => {
    useEffect(() => {
      scroll.scrollToTop();
    }, [location.pathname]);

    return <Wrapped {...props} />;
  });

export default withScrollToTop;
