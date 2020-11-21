import React, {Suspense, lazy} from 'react';
import './App.scss';
import "slick-carousel/slick/slick.scss"; 
import "slick-carousel/slick/slick-theme.css";
import { Provider } from 'react-redux';
import store from './stores';

const Container = lazy(()=>import('./pages/Container'));
const Navbar = lazy(()=>import('./components/Navbar'));
const NavbarBack = lazy(()=>import('./components/NavbarBack'));
const Footer = lazy(()=>import('./components/Footer'));
const FloatButtonToTop = lazy(() => import('./components/FloatButtonToTop'))

function App(props) {
  let navbarComp = "";
  if(props.location.pathname == "/payment" || props.location.pathname == "/customer-care" || props.location.pathname == "/checkout/login"){
    navbarComp = <NavbarBack {...props}/>
  }else{
    navbarComp = <Navbar {...props}/>
  }
  return (
    <Provider store={store}>
      <Suspense fallback={<div />}>
          {navbarComp}
          <Container {...props} />
          <Footer />
          <FloatButtonToTop />
        </Suspense>
    </Provider>
  );
}

export default App;
