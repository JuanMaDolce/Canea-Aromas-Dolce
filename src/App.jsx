import './App.css';
import NavBar from './components/NavBar/NavBar';
import { ItemListContainer } from './pages/ItemListContainer/ItemListContainer';
import { ItemDetailContainer } from './pages/ItemDetailContainer/ItemDetailContainer';
import {Routes,Route} from 'react-router-dom'
import Cart from './pages/Cart/Cart';
import Checkout from './components/Checkout/Checkout';

function App() {
  return (
      <div className="App">
        <NavBar />
        <Routes>
          <Route path='/' element={<ItemListContainer />} />
          <Route path='/cart' element={<Cart />} />
          <Route path='/checkout' element={<Checkout/>} />
          <Route path='/category/:categoryId' element={<ItemListContainer />} />
          <Route path='/item/:itemId' element={<ItemDetailContainer />} />
        </Routes>

      </div>
  );
}

export default App;
