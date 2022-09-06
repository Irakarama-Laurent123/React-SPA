import {Route} from 'react-router-dom'
import MainHeader from './components/MainHeader';
import Product from './pages/Product';
import Welcome from './pages/Welcome';


function App() {
  return (
    <div>
      <header>
        <MainHeader/>
      </header>
      <main>
      <Route path='/welcome'>
        <Welcome/>
      </Route>
      <Route path='/product'>
        <Product/>
      </Route>
      </main>

    </div>
  );
}

export default App;
