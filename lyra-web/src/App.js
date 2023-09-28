import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import {Home} from "./components/Home";


const router = createBrowserRouter([
  {
    path: "/",
    element: 
      <Home />,
    errorElement: <h1>ERROR</h1>,
  },
]);

function App() {
  return (
    <RouterProvider router={router}/>
  );
}

export default App;
