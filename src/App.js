import NavBar from './components/NavBar';
import ItemListContainer from "./containers/ItemList/ItemListContainer";
import ItemDetailContainer from './containers/ItemDetail/ItemDetailContainer';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Cart from './components/Cart';
import Error404 from './components/Error404';

function App() {
  return (
    <BrowserRouter>
      <header>
        <NavBar />
      </header>
    <Routes>
      <Route path="/" element={<ItemListContainer/>}/>
      <Route path="/category/:id" element={<ItemListContainer/>}/>
      <Route path="/item/:id" element={<ItemDetailContainer/>}/>
      <Route path="/cart" element={<Cart/>}/>
      <Route path="*" element={<Error404/>}/>
    </Routes>
    </BrowserRouter>
  )
}

export default App;
