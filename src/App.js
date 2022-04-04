import NavBar from './components/NavBar';
import ItemListContainer from "./components/ItemListContainer";
import ItemDetailContainer from './components/ItemDetailContainer';

function App (){
  return (
    <header>
      <NavBar/>
      <ItemListContainer/>
      <ItemDetailContainer/>
    </header>
  )
}

export default App;
