import { createBrowserRouter, RouterProvider } from "react-router-dom";
import About from "./src/Pages/About";
import Home from "./src/Pages/Home";
import MenuPage from "./src/Pages/MenuPage";
import User from "./src/Pages/User";
import Root from "./src/Pages/Root";


export default function App2(props) {

    const router = createBrowserRouter([
        {
            path: "/",
            element: <Root />,
            //loader: rootLoader,
            children: [
                {
                    path: "/",
                    element: <Home />,
                },
                {
                    path: "/about",
                    element: <About />,
                },
            ],
        },
        {
            path: "/menu/:userId",
            element: <MenuPage />
        },
        {
            path: "/user",
            element: <User />
        },
    ]);

    return (
        <div>
            <RouterProvider router={router} />
        </div>
    )
}
