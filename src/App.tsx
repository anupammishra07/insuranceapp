
import './App.css';
import PrivateRoute from './components/privateRoutes';
import {  Route , Routes } from 'react-router-dom';
import HomePage from './pages/beforeLogin/homepage';
import About from "./pages/beforeLogin/about"
import Error404 from "./pages/beforeLogin/error404"
import Careers from "./pages/beforeLogin/careers"
import Login from "./pages/beforeLogin/login"
import Register from "./pages/beforeLogin/register"
import AdminAccessRoutes from './components/adminAccessRoutes';
import InsurerAccessRoutes from './components/insurerAccessRoutes';
import Admin from './pages/afterLogin/insurance provider/Admin';
import Insurers from './pages/afterLogin/insurer/Insurers';
import Contactus from './pages/beforeLogin/contactus';
function App() {
  return (
    <div className="App">
      <Routes>
        {/* <Route  path="/" element={<HomePage />}/> */}
        {/* <Route  path="/about" element={<About />}/> */}
        <Route  path="/contactus" element={<PrivateRoute component={Contactus} />}/>
        <Route  path="/careers" element={<PrivateRoute component={Careers} />}/>
        <Route  path="/login" element={<Login />}/>
        <Route  path="/register" element={<Register />}/>

        <Route
          path="/"
          element={<PrivateRoute component={HomePage} />}
        />
<Route
          path="/about"
          element={<PrivateRoute component={About} />}
        />
        <Route
          path="/admin"
          element={<AdminAccessRoutes component={Admin} />}
        />
        <Route
          path="/insurer"
          element={<InsurerAccessRoutes component={Insurers} />}
        />
      </Routes>
    </div>
  );
}

export default App;
