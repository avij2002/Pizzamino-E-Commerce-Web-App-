import logo from './logo.svg';
import './App.css';
import bootstrap from '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import {BrowserRouter,Link,Switch,Route} from 'react-router-dom'
import Navbar from './components/Navbar';
import Homescreen from './screens/Homescreen';
import Cartscreen from './screens/Cartscreen';
import Loginscreen from './screens/Loginscreen';
import Registerscreen from './screens/Registerscreen';

function App() {
  return (
    <div className="App">
      <Navbar/>

      <BrowserRouter>
      
        <Route path="/" exact component={Homescreen} />
        <Route path="/cart" exact component={Cartscreen} />
        <Route path="/login" exact component={Loginscreen} />
        <Route path="/register" exact component={Registerscreen} />
       
      </BrowserRouter>
    </div>
  );
}

export default App;
