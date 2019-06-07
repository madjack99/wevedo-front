import React, { Component } from 'react';
import styled from 'styled-components';
import { Container, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import icons from '../../images/social-networks.png';

class Footer extends Component {
    state = {}

    render() {
      return (
        <FooterWrapper>
          <Row>
            <ul>
              <li className="footer-elements">
                <Link path="/">
                                2019 Wewedo
                </Link>
              </li>
              <div className="footer-dot" />
              <li className="footer-elements">
                <Link path="/">
                                Contact
                </Link>
              </li>
              <div className="footer-dot" />
              <li className="footer-elements">
                <Link path="/">
                  {'Terms & Conditions'}
                </Link>
              </li>
              <div className="footer-dot" />
              <li className="footer-elements">
                <Link path="/">
                                Privacy Policy
                </Link>
              </li>
            </ul>
            <img className="display-right" src={icons} alt="logo" />
          </Row>
        </FooterWrapper>
      );
    }
}

const FooterWrapper = styled.footer`
    height: 80px;
    background-color: #ffffff;
    border-top: 1px ridge;
        
    img {
        height: 16px;
        margin-top:38px;
    }
            
.footer-elements{
    font-size: 12px;
    letter-spacing: 1.2px;
}
ul {    
    display: flex;

}
li {
    margin-top: 36px;
    display:block;
    text-transform: uppercase;
}
a {
    text-decoration: none;
    color: #898989;
}
.footer-dot {
    width: 4px;
    height: 4px;
    background-image: linear-gradient(60deg, #ffafbd, #ffc3a0);
    margin-left : 20px;
    margin-right: 20px;
    margin-top: 42px;
    border-radius : 50%;
}`;

export default Footer;
