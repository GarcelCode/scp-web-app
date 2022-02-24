import { Routes, Route, Navigate } from 'react-router-dom'
import { ProtectedRoutes } from './Components/ProtectedRoutes';
import { AuthProvider } from './Contexts/Auth';
import { Home } from './Views/Home';
import { Login } from './Views/Login';
import { News } from './Views/News';
import { Register } from './Views/Register';
import { ToDo } from './Views/ToDo';

function App (){
    return (
        <AuthProvider>
            <Routes>
            
                <Route index element={<Navigate to="/app"/>}/>
                <Route path="/app" element={
                    <ProtectedRoutes>
                        <Home/>
                    </ProtectedRoutes>
                }>
                    <Route index element={<ToDo/>}/>
                    <Route path="/app/todo" element={<ToDo />}/>
                    <Route path="/app/news" element={<News/>}/>
                </Route>
                <Route path="/login" element={<Login/>}/>
                <Route path="/register" element={<Register/>}/>
            </Routes>
        </AuthProvider>  
    );
}

export default App;