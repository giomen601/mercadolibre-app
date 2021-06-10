import { BrowserRouter as Router, Switch, Route, Link, BrowserRouter } from 'react-router-dom';

import { Home } from './Pages/Home';
import { DetalleProducto } from './Pages/DetalleProducto';
import { Layout } from './Components/Layout';

import './scss/App.scss';

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Switch>
          <Route exact path="/items/:itemId"> <DetalleProducto /> </Route>
          <Route exact path="/home"> <Home /> </Route>
          <Route path="/"> <Home /> </Route>
          
        </Switch>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
