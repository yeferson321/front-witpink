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
import FormUsercv from './components/formusercv/FormUsercv';
import FormOne from './components/formone/FormOne';
import FormTwo from './components/formtwo/FormTwo';
import FormThree from './components/formthree/FormThree.js';
import Welcome from './components/welcome/Welcome.js';
import Search from './components/search/Search';
import Profile from './components/profile/Profilee.js';
import Notification from './components/notification/Notification.js';
import Update from './components/update/Update';

function App() {
  return (
    /* Routing the components to the correct path. */
    <DataProvider>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/signin" element={<Signin />} />

        <Route element={<ProtectetedRouter />}>
          <Route path="/update" element={<Update />} />
          <Route path="/acount" element={<Acount />} />

          <Route path="/formusercv" element={<FormUsercv />} >
            <Route path='one' element={<FormOne/>}></Route>
            <Route path='two' element={<FormTwo/>}></Route>
            <Route path='three' element={<FormThree/>}></Route>
          </Route>

          <Route path="/welcome" element={<Welcome />} >
            <Route path="search" element={<Search />} />
            <Route path='notification' element={<Notification />} />
            <Route path="profile" element={<Profile />} />
          </Route>

        </Route>

        <Route path="*" element={<Home />} />
      </Routes>
    </DataProvider>
  );
}

export default App;
