import {StrictMode} from 'react';
import {createRoot} from 'react-dom/client';
import Layout from './Layouts/Layout';
import Home from './pages/Home';
import Product from './pages/Product';
import './index.css';

import {
	createBrowserRouter,
	RouterProvider,
} from "react-router-dom";

const router = createBrowserRouter([
	{
		path: "/",
		element: <Layout />,
		children: [
			{
				path: "/",
				element: <Home />,
			},
			{
				path: "/product/:id",
				element: <Product />,
			},
		]
	},

]);

createRoot(document.getElementById('root')).render(
	<StrictMode>
		<RouterProvider router={router} />
	</StrictMode>,
)
