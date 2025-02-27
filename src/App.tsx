import { Routes, Route } from 'react-router-dom';

import { Home } from './pages/Home';

import { AppWrapper } from './App.css';

const App = () => {
  return (
     <AppWrapper>
        <Routes>
           <Route path="/" element={<Home />} />
        </Routes>
     </AppWrapper>
  );
};

export default App;