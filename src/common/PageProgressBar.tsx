import { useTheme } from '@material-ui/core';
import { Router } from 'next/dist/client/router';
import NProgress from 'nprogress';
import 'nprogress/nprogress.css';

Router.events.on('routeChangeStart', () => {
  NProgress.start();
});
Router.events.on('routeChangeComplete', () => NProgress.done());
Router.events.on('routeChangeError', () => NProgress.done());

function PageProgressBar() {
  const theme = useTheme();
  const color = theme.palette.secondary.light;

  return (
    <style jsx global>
      {`
        #nprogress .bar {
          background: ${color};
          z-index: ${theme.zIndex.appBar};
        }

        #nprogress .peg {
          box-shadow: 0 0 10px ${color}, 0 0 5px ${color};
        }

        #nprogress .spinner-icon {
          display: none;
        }
      `}
    </style>
  );
}

export default PageProgressBar;
