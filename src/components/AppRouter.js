import React, { useContext } from "react"; 
import {Routes, Route, Navigate} from 'react-router-dom'  
import { authRoutes, publicRoutes } from "../routes"; 
import {FORGOTPASSWORD_ROUTE, LOGIN_ROUTE, REGISTRATION_ROUTE, MAIN_ROUTE} from "../utils/consts"; 
import { Context } from "../index"; 
import { Nav } from "react-bootstrap";

const AppRouter = () => { 
    const {user} = useContext(Context)
    
    // let isAuth = true 
    let isAuth = user.getisAuth()
    
    return( 
    <Routes> 
        {isAuth && publicRoutes.map(({path, Component}) => 
            <Route key = {path} path ={path} element = {<Component/>} exact/> 
    )} 
        {publicRoutes.map(({path, Component}) => 
        <Route key = {path} path ={path} element = {<Component/>} exact/> 
    )} 
        <Route path="*" element = {<Navigate to={MAIN_ROUTE} />} replace />  
    <Route>
        {publicRoutes.map(({path, Component}) =>
        <Route  path="*" element = {<Navigate> to={FORGOTPASSWORD_ROUTE}</Navigate>} replace/>
        
    )} 
    </Route>
    <Route>
        {publicRoutes.map(({path, Component}) =>
        <Route  path="*" element = {<Navigate> to={REGISTRATION_ROUTE}</Navigate>} replace/>
        
    )}
    </Route>
    </Routes> 
    ) 
};
export default AppRouter;