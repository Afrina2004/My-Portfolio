import {createBrowserRouter} from 'react-router-dom'
import Home from '../pages/Home/Home';
import Root from '../layouts/Root';
import BicycleDetails from '../pages/Projects/BicycleDetails'
import MediMartDetails from '../pages/Projects/MediMartDetails'
import DreamHouseDetails from '../pages/Projects/DreamHouseDetails'
import BdDetails from '../pages/Projects/BdDetails'
import BookVibeDetails from '../pages/Projects/BookVibeDetails'
import BackendDetails from '../pages/Projects/BackendDetails'

const router = createBrowserRouter([
{
path:'/',
element:<Root></Root>,
children:[
    {
        path:'/',
        element:<Home></Home>,
    },
    {
        path:'/BicycleDetails',
        element:<BicycleDetails></BicycleDetails>,
    },
 {
        path:'/MediMartDetails',
        element:<MediMartDetails></MediMartDetails>,
    },
    {
        path:'/DreamHouseDetails',
        element:<DreamHouseDetails></DreamHouseDetails>,
    },
    {
        path:'/BdDetails',
        element:<BdDetails></BdDetails>,
    },
    {
        path:'/BookVibeDetails',
        element:<BookVibeDetails></BookVibeDetails>,
    },
    {
        path:'/BackendDetails',
        element:<BackendDetails></BackendDetails>,
    },
  ]
 }
]);

export default router;