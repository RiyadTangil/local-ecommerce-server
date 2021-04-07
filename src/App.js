import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Login from './Components/Login/Login';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './Components/Header/Header';
import Home from './Components/Home/Home';
import ManageProduct from './Components/ManageProduct/ManageProduct';
import { createContext, useContext, useState } from 'react';
import Chackout from './Components/Chackout/Chackout';
import PrivetRouter from './Components/PrivetRouter/PrivetRouter';
export const UserContext = createContext()
export const OrderContext = createContext()


function App() {
  const [loggedInUser, seLoggedInUser] = useState([])
  const [orderedProduct, setOrderedProduct] = useState([])
  return (


    <UserContext.Provider value={[loggedInUser, seLoggedInUser]}>
      <OrderContext.Provider value={[orderedProduct, setOrderedProduct]}>
        <Router>
          <Header></Header>
          <Switch>
            <Route exact path="/">
              <Home></Home>
            </Route>
            <Route path="/home">
              <Home />
            </Route>
            <Route path="/login">
              <Login></Login>
            </Route>
            <PrivetRouter path="/chackout">
              <Chackout></Chackout>
            </PrivetRouter>
            <PrivetRouter path="/ManageProduct">
              <ManageProduct></ManageProduct>
            </PrivetRouter>
          </Switch>

        </Router>

      </OrderContext.Provider>
    </UserContext.Provider >
  );

}

export default App;
