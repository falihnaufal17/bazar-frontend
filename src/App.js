import React, {Suspense, lazy} from 'react';
import './App.scss';
import "slick-carousel/slick/slick.scss"; 
import "slick-carousel/slick/slick-theme.css";

const Container = lazy(()=>import('./pages/Container'));
const Navbar = lazy(()=>import('./components/Navbar'));
const Footer = lazy(()=>import('./components/Footer'));
const FloatButtonToTop = lazy(() => import('./components/FloatButtonToTop'))

function App(props) {
  return (
    <Suspense fallback="">
      <Navbar/>
      <Container {...props} />
      <Footer />
      <FloatButtonToTop />
    </Suspense>
  );
}

export default App;
