import {Routes, Route} from 'react-router-dom';
import AppHeader from './components/AppHeader/AppHeader';
import Home from './pages/Home';
import Shop from './pages/Shop';

const App = () => {
  return (
    <div>
      <AppHeader />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="shop" element={<Shop />} />
      </Routes>
    </div>
  );
};

export default App;
