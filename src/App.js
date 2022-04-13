import NavBar from './components/NavBar/NavBar';
import ItemListContainer from "./containers/ItemList/ItemListContainer";
import ItemDetailContainer from './containers/ItemDetail/ItemDetailContainer';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Cart from './components/Cart/Cart';
import Error404 from './components/404/Error404';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <BrowserRouter>
      <header>
        <NavBar />
      </header>
      <main>
        <Routes>
          <Route path="/" element={<ItemListContainer />} />
          <Route path="/category/:id" element={<ItemListContainer />} />
          <Route path="/item/:id" element={<ItemDetailContainer />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="*" element={<Error404 />} />
        </Routes>
      </main>
      {/* <footer>
        <Footer/>
      </footer> */}
    </BrowserRouter>
  )
}

export default App;
