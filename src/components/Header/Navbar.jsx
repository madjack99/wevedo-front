import React, { Component } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { ButtonToolbar, Button, Row, Col, Container } from 'react-bootstrap';
import logo from "../../images/symbol.png";
import '../../../src/index.scss';


class Navbar extends Component {
    render() {
        return (
            <NavWrapper>
                <Row>
                    <Col md={4}>
                    <ul className='menu d-flex'>
                            <li >
                                <Link path='/'>
                                    Wedding tools
                                </Link>
                            </li>
                            <li>
                                <Link path='/'>
                                    Venues
                                </Link>
                            </li>
                            <li>
                                <Link path='/'>
                                    Suppliers
                                </Link>
                            </li>
                        </ul>
                    </Col>
                    <Col md={4}>
                        <div style={{ display: 'flex', justifyContent: 'center'}}>
                        <img src={logo} alt='logo' />
                        </div>
                    </Col>
                    <Col md={4} style={{ display: 'flex', justifyContent: 'flex-end', paddingRight: '15px' }}>
                        <Button className='login_button'>Login</Button>
                        <Button className='business_button'>Business Login</Button>
                    </Col>
                    </Row>
            </NavWrapper>);
    }
}

const centeredRow = styled(Row)`
`;

const NavWrapper = styled(Container)`
    background-color: #ffffff;
    height: 100px;
    border-bottom: 1px ridge;
    border-color: none;
    padding-left:50px;
    padding-right:50px;

    img {
        margin-top: 27px;
        height: 33px;
    }

    ul {
        display:flex;
    }
    li{
        margin-top:40px;
        font-size:14px;
        letter-spacing: 1.4px;
        margin-left:10px;
        display:block;
        text-transform: uppercase;
    }
    a {
        text-decoration: none;
        color: black;
    }
    button {
        text-transform: uppercase;
        border-color : none;
        border:none;
    }

    .business_button {
        margin-top:26px;
        height :45px;
        font-size:14px;
        letter-spacing: 1.4px;
        text-color:white;
        background-color:black;
        outline : 0;
    }
    .login_button {
        margin-top:26px;
        height :45px;
        font-size:14px;
        letter-spacing: 1.4px;
        margin-left:auto;
        text-color:white;
        margin-right:10px;
        background-image: linear-gradient(60deg, #ffafbd, #ffc3a0);
    }
`

export default Navbar;