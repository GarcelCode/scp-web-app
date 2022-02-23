import { Routes, Route } from 'react-router-dom'
import { ProtectedRoute } from './Components/ProtectedRoutes';
import { AuthProvider } from './Contexts/Auth';
import { Home } from './Views/Home';
import { Login } from './Views/Login';
import { Register } from './Views/Register';

function App (){
    return (
        <AuthProvider>
            <Routes>
                <Route path="/" element={
                    <ProtectedRoute>
                        <Home />
                    </ProtectedRoute>
                }/>
                <Route path="/login" element={<Login/>}/>
                <Route path="/register" element={<Register/>}/>
            </Routes>
        </AuthProvider>  
    );
}

export default App;