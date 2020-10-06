import React, {Suspense, lazy} from 'react';
import './App.scss';
const Container = lazy(()=>import('./pages/Container'));

function App(props) {
  return (
    <Suspense fallback="">
      <Container {...props} />
    </Suspense>
  );
}

export default App;
