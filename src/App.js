import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import HomePage from './copmonents/Home/HomePage/HomePage';
import NavBar from './copmonents/Shared/NavBar/NavBar';
import AddService from './copmonents/AddService/AddService';
import Booking from './copmonents/Booking/Booking';
import AuthProvider from './context/AuthProvider';
import PrivateRoute from './copmonents/PrivateRoute/PrivateRoute';
import Login from './copmonents/Login/Login';
import ManageBookings from './copmonents/ManageBookings/ManageBookings';
import MyBookings from './copmonents/MyBookings/MyBookings';
import NotFound from './copmonents/NotFound/NotFound';


function App() {
  return (
    
      <AuthProvider>
        <Router>
        <NavBar></NavBar>
        <Switch>
          <Route exact path='/'>
              <HomePage></HomePage>
          </Route>
          <Route path='/home'>
              <HomePage></HomePage>
          </Route>
          <PrivateRoute path='/booking/:serviceId'>
            <Booking></Booking>
          </PrivateRoute>
          <Route path='/login'>
            <Login></Login>
          </Route>
          <PrivateRoute path='/addservice'>
            <AddService></AddService>
          </PrivateRoute>
          <PrivateRoute path='/manageBookings'>
            <ManageBookings></ManageBookings>
          </PrivateRoute>
          <PrivateRoute path='/myBookings'>
            <MyBookings></MyBookings>
          </PrivateRoute>
          <Route path='*'>
            <NotFound></NotFound>
          </Route>
        </Switch>
      </Router>
      </AuthProvider>
    
  );
}

export default App;
