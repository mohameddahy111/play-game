import { RouterProvider } from 'react-router-dom';
import { AuthContextProvider } from './contexts/AuthContext';
import Router from './Routers/Router';

function App() {
  return (
    <AuthContextProvider>
      <RouterProvider router={Router}></RouterProvider>
    </AuthContextProvider>
  );
}

export default App;
