import React, {useContext, useState}  from "react";
import {Card, Container, Form, Button, Col} from 'react-bootstrap'
import { LOGIN_ROUTE, REGISTRATION_ROUTE } from "../utils/consts";
import Row from 'react-bootstrap/Row'
import { useLocation, NavLink, useNavigate } from "react-router-dom";
import { login, registration } from "../http/userApi";
import {observer} from "mobx-react-lite";
import {Context} from "../index";
import NavBar from "../components/NavBar";

const Registration = observer(() => {
    document.body.style.backgroundRepeat = "no-repeat";
    document.body.style.backgroundPositionY = "450px"
    document.body.style.backgroundColor="#313131"
    const {user} = useContext(Context)
    const navigate =useNavigate()
    const location = useLocation()
    const isLogin = location.pathname === LOGIN_ROUTE
    const [email, setEmail] = useState('')
    const [password,setPassword] = useState('')
    const [password_check,setPasswordCheck] = useState('')
    const click = async () =>{
    try{
    if (isLogin){
    const response = await login(email, password, password_check)
}
    else{
    const response = await registration(email, password, password_check)
    }
    user.setUser()
    user.setIsAuth(true)
    navigate(LOGIN_ROUTE)}
    catch(e){
    alert(e)
    }
    }
    return (
        <Container
        className = 'd-flex justify-content-center align-items-center'
        style = {{height: window.innerHeight - 54}}>
        <Card style={{width: 1016, marginTop:"73px", borderRadius: 86, height: 934, fontFamily:"Stalinist One", backgroundColor:'#595959'}} className="p-5 #FFFAF4">
            <h2 style={{fontSize: '48px', marginLeft:'170px', marginBottom:'26px', width: 586, position:'relative', color:'#C9E956', textShadow:'-1px -1px 0 #000, 1px -1px 0 #000, -1px  1px 0 #000, 1px  1px 0 #000'}}>
            Регистрация
            </h2>
            <Form className="d-flex flex-column" style={{position:'relative'}}>
                <Form.Control
                 style={{borderRadius: '21px', paddingLeft:'38px', height: 68, fontSize: "24px", marginBottom:"27px", border: "5px solid", backgroundColor:'#595959', borderColor:'#F9FFE9'}}
                className="mt-3"
                size="lg"
                placeholder = "Введите ваш телефон/email..."
                onChange = { e => setEmail(e.target.value)}
                />
                
                <Form.Control 
                style={{borderRadius: '21px', paddingLeft:'38px', height: 68, fontSize: "24px", marginBottom:"27px", border: "5px solid", backgroundColor:'#595959', borderColor:'#F9FFE9'}}
                className="mt-3"
                size="lg"
                placeholder = "Ваш логин...."
                value = {password_check}
                onChange = { e => setPasswordCheck(e.target.value)}
                type="password"
                />

                <Form.Control
                style={{borderRadius: '21px', paddingLeft:'38px', height: 68, fontSize: "24px", marginBottom:"27px", border: "5px solid", backgroundColor:'#595959', borderColor:'#F9FFE9'}}
                className="mt-3"
                size="lg"
                placeholder = "Пароль..."
                value = {password}
                onChange = { e => setPassword(e.target.value)}
                type="password"
                />

                <Form.Control 
                 style={{borderRadius: '21px', paddingLeft:'38px', height: 68, fontSize: "24px", marginBottom:"27px", border: "5px solid", backgroundColor:'#595959', borderColor:'#F9FFE9'}}
                className="mt-3"
                size="lg"
                placeholder = "Введите ваш пароль повторно..."
                value = {password_check}
                onChange = { e => setPasswordCheck(e.target.value)}
                type="password"
                />

                <Form.Control 
                 style={{borderRadius: '21px', paddingLeft:'38px', height: 68, fontSize: "24px", marginBottom:"27px", border: "5px solid", backgroundColor:'#595959', borderColor:'#F9FFE9'}}
                className="mt-3"
                size="lg"
                placeholder = "Тип аккаунта"
                value = {password_check}
                onChange = { e => setPasswordCheck(e.target.value)}
                type="password"
                />
                
                <p style={{fontSize:"24px", textAlign:'center', color:'#F9FFE9', textShadow:'-1px -1px 0 #000, 1px -1px 0 #000, -1px  1px 0 #000, 1px  1px 0 #000'}}>Уже есть аккаунт? &nbsp;
                <NavLink to={LOGIN_ROUTE} style={{color:'#C68DFE'}} variant={"outline-link"}>Войти</NavLink></p>
                <div style={{textAlign:'center'}}>
                <Button
                style={{borderRadius: '19px', width:'500px', fontSize:'23px', height: 83, border: "5px solid", backgroundColor:'#595959', borderColor:'#F9FFE9', marginTop:'38px', color:'#C9E956', textShadow:'-1px -1px 0 #000, 1px -1px 0 #000, -1px  1px 0 #000, 1px  1px 0 #000'}}
                variant={"outline-dark"}
                size="lg"
                            onClick={click}>
                       {isLogin ? '' : 'Зарегистрироваться'} 
                </Button>
                 </div>
            </Form>
        </Card>
        {/* <NavBar/> */}
        </Container>
    );
});

export default Registration;