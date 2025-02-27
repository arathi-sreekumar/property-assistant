import { Routes, Route } from 'react-router-dom';

import { Home } from './pages/Home';

import { AppWrapper } from './App.css';
import { BuyingCalculator } from './pages/BuyngCalculator';

const App = () => {
   return (
      <AppWrapper>
         <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/buying/calculator" element={<BuyingCalculator />} />
         </Routes>
      </AppWrapper>
   );
};

export default App;