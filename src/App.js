import {Route, Switch} from 'react-router-dom'
import MainHeader from './components/MainHeader';
import Product from './pages/Product';
import ProductDetail from './pages/ProductDetail';
import Welcome from './pages/Welcome';


function App() {
  return (
    <div>
      <header>
        <MainHeader/>
      </header>
      <main>
        <Switch>
      <Route path='/welcome'>
        <Welcome/>
      </Route>
      <Route path='/product' exact>
        <Product/>
      </Route>
      <Route path='/product/:productId'>
        <ProductDetail/>
      </Route>
      </Switch>
      </main>

    </div>
  );
}

export default App;
