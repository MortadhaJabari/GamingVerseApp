import './App.css';
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom';
import UserProfile from './routes/user_profile'
import {Layout1 , Layout2 , Layout3} from './components/layout';
import Login from './routes/login';
import Register from './routes/register';
import { AuthProvider } from './context/useAuth';
import PrivateRoute from './components/private_root';
import Home from './routes/home';
import CreatePost from './routes/create_post';
import Feed from './routes/feed';
import Search from './routes/search';
import EditProfile from './routes/edit_profile';

function App() {
  return (
    <chakraProvider>
      <Router>
        <AuthProvider>
          <Routes>
            <Route element = {<Layout3><Home/></Layout3>} path='/'/>
            <Route element= {<Layout3><PrivateRoute><UserProfile /></PrivateRoute></Layout3>}path='/:username'/>
            <Route element= {<Layout3><PrivateRoute><CreatePost /></PrivateRoute></Layout3>}path='/create-post'/>
            <Route element= {<Layout3><PrivateRoute><Feed /></PrivateRoute></Layout3>}path='/feed'/>
            <Route element= {<Layout3><PrivateRoute><Search /></PrivateRoute></Layout3>}path='/search'/>
            <Route element= {<Layout3><PrivateRoute><EditProfile /></PrivateRoute></Layout3>}path='/edit-profile'/>
            <Route element= {<Layout1><Login /></Layout1>}path='/login'/>
            <Route element= {<Layout2><Register /></Layout2>}path='/register'/>
          </Routes>
        </AuthProvider>
      </Router>
    </chakraProvider>
   
  );
}

export default App;
