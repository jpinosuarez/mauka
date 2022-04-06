import NavBar from './components/NavBar';
import ItemListContainer from "./components/ItemListContainer";
import ItemDetailContainer from './components/ItemDetailContainer';
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
      <Route path="/categories/:name" element={<ItemListContainer/>}/>
      <Route path="/product/:id" element={<ItemDetailContainer/>}/>
      <Route path="/cart" element={<Cart/>}/>
      <Route path="*" element={<Error404/>}/>
    </Routes>
      {/* <main>
        <ItemListContainer />
        <ItemDetailContainer />
      </main> */}
    </BrowserRouter>
  )
}

export default App;
