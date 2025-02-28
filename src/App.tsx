import { Routes, Route } from 'react-router-dom';

import { Home } from './pages/Home';

import { AppWrapper } from './App.css';
import { BuyingCalculator } from './pages/BuyngCalculator';

const App = () => {
   return (
      <AppWrapper>
         <Routes>
            <Route path="/buying/calculator" element={<BuyingCalculator />} />
            <Route path="/home" element={<Home />} />
            <Route path="/" element={<Home />} />
         </Routes>
      </AppWrapper>
   );
};

export default App;