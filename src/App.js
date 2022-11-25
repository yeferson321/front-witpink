import './App.css';
/* Css bootstrap icons css */
import 'bootstrap-icons/font/bootstrap-icons.css';
/* Css bootstrap min */
import 'bootstrap/dist/css/bootstrap.min.css';
/* JavaScript bootstrap Bundle with Popper  */
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
/* Importing the Route and Routes from the react-router-dom package. */
import { Route, Routes } from 'react-router-dom';
/* Importing the DataContext.js file from the context folder. */
import DataProvider from './context/DataContext.js';
/* Importing the ProtectedRoute.js file from the components folder. */
import ProtectetedRouter from './components/ProtectedRoute.js';
/* Importing the components from the components folder. */
import Home from './components/home/Home.js';
import Signup from './components/signup/Signup.js';
import Signin from './components/signin/Signin.js';
import Acount from './components/acount/Acount.js';
import Usercv from './components/usercv/Usercv.js';
import Welcome from './components/welcome/Welcome.js';
import Search from './components/search/Search';
import Profile from './components/profile/Profilee';

function App() {
  return (
    /* Routing the components to the correct path. */
    <DataProvider>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/signin" element={<Signin />} />

        <Route path="personcv" element={<Usercv />} />
          <Route path="acount" element={<Acount />} />

        <Route element={<ProtectetedRouter />}>

          <Route path="/welcome" element={<Welcome />} >
            <Route path="search" element={<Search />} />
            <Route path="profile" element={<Profile />} />
          </Route>
        </Route>

        <Route path="*" element={<Home />} />
      </Routes>
    </DataProvider>
  );
}

export default App;
