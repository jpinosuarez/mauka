import NavBar from './components/NavBar';
import ItemListContainer from "./components/ItemListContainer";
import ItemDetailContainer from './components/ItemDetailContainer';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Cart from './components/Cart';

function App() {
  return (
    <BrowserRouter>
      <header>
        <NavBar />
      </header>
    <Routes>
      <Route path="/" element={<ItemListContainer/>}/>
      <Route path="/categories/:id"/>
      <Route path="/product/:id"/>
      <Route path="/cart" element={<Cart/>}/>
    </Routes>
      {/* <main>
        <ItemListContainer />
        <ItemDetailContainer />
      </main> */}
    </BrowserRouter>
  )
}

export default App;
