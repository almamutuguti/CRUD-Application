import './index.css'
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { useAuth } from "'/AuthContext";
import Login from "../src/components/Login"
import TodoPage from "../src/components/ToDoPage"
import { AuthProvider } from './components/AuthContext';

const PrivateRoute = ({ children }) => {
  const { user } = useAuth();
  return user ? children : <Navigate to="./login"/>;

}


function App() {
  
  return (
    <AuthProvider>
        <Router>
          <Routes>
              <Route path='/login' element={<Login/>}/>
              <Route path='/' element={<PrivateRoute><TodoPage/></PrivateRoute>}/>
          </Routes>
        </Router>
    </AuthProvider>
  )
}

export default App
