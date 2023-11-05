import { RouterProvider, createBrowserRouter } from "react-router-dom";
import HomePage from "./Pages/HomePage";
import SorterPage from "./Pages/SorterPage";
import Root from "./Components/Root";
import SearchPage from "./Pages/SearchPage";


const router = createBrowserRouter(
  [

    {path : "/", 
    element: <Root/>,
    children:[
      {index:true, element:<HomePage/> },
      {path: "sort/:id", element:<SorterPage/> },
      {path: "search/:id", element:<SearchPage/> },
    ]}

  ]
)

function App() {
  return (
    <RouterProvider router={router}/>  );
}

export default App;
