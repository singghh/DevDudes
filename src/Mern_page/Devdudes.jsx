import React from 'react';
import Devnarbar from './Devnarbar.jsx';
import DevHero from './DevHero.jsx';
import Features from './Features.jsx';
import {motion} from "framer-motion";
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
const router = createBrowserRouter([
    {
        path:"/",
        element:<DevHero/>
    },
    {
        path:"/features",
        element:<Features/>
    }
]);
function Devdudes(){
    return(
        <motion.div
            initial={{opacity:0}}
            animate = {{opacity:1}}
            transition={{duration:0.8, delay:0.4}}>
            <Devnarbar/>
            <RouterProvider router={router}/>
        </motion.div>
    );
}
export default Devdudes