import React, {Suspense, lazy} from 'react';
import './App.scss';

const Container = lazy(()=>import('./pages/Container'));
const Navbar = lazy(()=>import('./components/Navbar'));
const Footer = lazy(()=>import('./components/Footer'));

function App(props) {
  return (
    <Suspense fallback="">
      <Navbar/>
      <Container {...props} />
      <Footer />
    </Suspense>
  );
}

export default App;
