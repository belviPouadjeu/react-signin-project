import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Signin from './page/Signin'; 

const router = createBrowserRouter([
  {
    path: '/',
    element: <Signin/>,
    // Si vous avez besoin d'une action pour le formulaire :
    // action: async ({ request }) => {
    //   const formData = await request.formData();
    //   // Traitement des données du formulaire
    //   return null;
    // }
  }
  // Ajoutez d'autres routes ici si nécessaire
]);


const App = () => {
  return (
    <RouterProvider router={router} />
  );
}

export default App