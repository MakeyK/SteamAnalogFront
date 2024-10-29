import React, {useContext, useState}  from "react";
import {Card, Container, Form, Button, Col} from 'react-bootstrap'
import { EDITPROFILE_ROUTE, FORGOTPASSWORD_ROUTE, LOGIN_ROUTE, MYSTORAGE_ROUTE, REGISTRATION_ROUTE } from "../utils/consts";
import Row from 'react-bootstrap/Row'
import { useLocation, NavLink, useNavigate } from "react-router-dom";
import { login, registration } from "../http/userApi";
import {observer} from "mobx-react-lite";
import {Context} from "../index";
import NavBar from "../components/NavBar";

const Auth = observer(() => {
    
    document.body.style.backgroundRepeat = "no-repeat";
    document.body.style.backgroundPositionY = "450px"
    document.body.style.backgroundColor="#313131"
    const {user} = useContext(Context)
    const navigate =useNavigate()
    const location = useLocation()
    const isLogin = location.pathname === LOGIN_ROUTE
    const [email, setEmail] = useState('')
    const [password,setPassword] = useState('')
    
    const click = async () =>{
        try{
            let response
        if (isLogin){
            response = await login(email, password)
        }
        else{  
            response = await registration(email, password)
    }
    user.setUser()
    user.setIsAuth(true)
    user.setNickname(response.nickname)
    navigate(MYSTORAGE_ROUTE)} 
    catch(e){
        alert(e)
    }

    }
    return (
        <Container
        className = 'd-flex justify-content-center align-items-center '
        style = {{height: window.innerHeight - 54}}>
        <Card style={{width: 900, borderRadius: 80, height: 520, fontFamily:"Stalinist One", backgroundColor:'#595959'}} className="p-5 #FFFAF4">
            <h2 className="m-auto" style={{fontSize: '48px', height: 70, width: 586, position:'relative', color:'#C9E956', justifyContent:'center'}}>{isLogin ? 'Авторизация' : 'Регистрация'}</h2>
            <Form className="d-flex flex-column" style={{position:'relative', paddingBottom:'70px'}}>
                <Form.Control
                style={{borderRadius: "21px", height: 71, fontSize: "24px", borderColor:'#F9FFE9', border: "5px solid", backgroundColor:'#C4C4C4'}}
                className="mt-3"
                placeholder = "Ваш логин..."
                value = {email}
                size="lg"
                type="email"
                onChange = { e => setEmail(e.target.value)}/>

                <Form.Control
                style={{borderRadius: '21px', height: 71, fontSize: "24px", borderColor:'#F9FFE9', border: "5px solid", backgroundColor:'#C4C4C4'}}
                className="mt-3"
                size="lg"
                placeholder = "Пароль..."
                value = {password}
                onChange = { e => setPassword(e.target.value)}
                type="password"
                />

                 <Row>
                    <Col className="d-flex justify-content-between mt-3 pl-3 pr-3">
                {isLogin? 
                <div> <p class="text-black" style={{fontSize:"24px"}}><NavLink to={FORGOTPASSWORD_ROUTE} style={{paddingLeft:10, color:'#C68DFE', width:"265px", fontSize:'20px'}} variant={"outline-link"}>Забыл пароль</NavLink></p>
                </div>
                :
                <div style={{color:'#C9E956'}}> <NavLink to={EDITPROFILE_ROUTE}> Войти </NavLink> </div>}
                 <Button
                 style={{borderRadius: '19px', height:71, width:195, borderColor:'#F9FFE9', border: "5px solid", backgroundColor:'#C4C4C4'}}
                //  variant={"outline-dark"}
                 size="lg"
                            onClick={click}>
                       {isLogin ? 'Войти' : 'Регистрация'} 
                 </Button>
                 </Col>
                 </Row>
                 
            </Form>
        </Card>
        {/* <NavBar/> */}
        </Container>
    );
});

export default Auth;