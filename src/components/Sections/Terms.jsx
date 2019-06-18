import React, { Component } from 'react';
import { Row, Container, Col } from 'react-bootstrap';
import '../../sass/wevedo.scss';

import serches1 from '../../images/serches1.png';
import serches2 from '../../images/serches2.png';
import serches3 from '../../images/serches3.png';
import serches4 from '../../images/serches4.png';

class Venues extends Component {
  render() {
    return (
      <React.Fragment>
        <div className="section section-header-half contact">
	        <Container className="h-100 w-100 align-items-center">
            <Row className="h-100 align-items-center">
        	    <Col sm={12} className="text-center text-uppercase">
              	<h1>Terms & Conditions</h1>
            	</Col>
            </Row>
          </Container>
        </div>
        
        <Container className="mt-5 mb-5">
          <Row className="justify-content-center mt-5 mb-5">
            <Col sm={8} className="text-center mb-3">
              <h4 className="text-uppercase">Legal terms and conditions for users of the wevedo website</h4>
              <hr/>
            </Col>
          </Row>
          <Row>
            <Col sm={12} className="mb-5">
              <h5 className="text-uppercase text-proxima-bold">1. Legal Information</h5>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
              Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
              Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
              Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
              
              <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, 
              eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. 
              Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.
              Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt 
              ut labore et dolore magnam aliquam quaerat voluptatem.</p>
            </Col>
            <Col sm={12} className="mb-5">
              <h5 className="text-uppercase text-proxima-bold">2. Purpose</h5>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
              Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
              Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
              Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
              
              <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, 
              eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. 
              Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.
              Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt 
              ut labore et dolore magnam aliquam quaerat voluptatem.</p>
            </Col>
          </Row>
        </Container>

        <div className="popularserches">
          <Container className="pb-5">
            <Row>
              <Col sm={6}>
                <h3 className="text-uppercase">Popular venue serches</h3>
                <p className="d-none d-sm-block">
                  At some stage in all our lives we want clearer, fresher, younger looking skin. Well it can be achieved without spending a lot of money.
                </p>
              </Col>
              <Col sm={6}>
                <Row>
                  <Col>
                    <ul>
                      <li>Essex</li>
                      <li>Hertforshire</li>
                      <li>West Midlands</li>
                      <li>Hampshire</li>
                    </ul>
                  </Col>
                  <Col>
                    <ul>
                      <li>Essex</li>
                      <li>Hertforshire</li>
                      <li>West Midlands</li>
                      <li>Hampshire</li>
                    </ul>
                  </Col>
                  <Col className="d-none d-sm-block">
                    <ul>
                      <li>Essex</li>
                      <li>Hertforshire</li>
                      <li>West Midlands</li>
                      <li>Hampshire</li>
                    </ul>
                  </Col>
                </Row>
              </Col>
            </Row>
          </Container>
          <Row className="m-0">
            <Col xs={3} className="p-0 overlayed">
              <img src={serches1} alt=""/>
              <div className="overlay">
                <i className="fa fa-search fa-2x"></i>
              </div>
            </Col>
            <Col xs={3} className="p-0 overlayed">
              <img src={serches2} alt=""/>
              <div className="overlay">
                <i className="fa fa-search fa-2x"></i>
              </div>
            </Col>
            <Col xs={3} className="p-0 overlayed">
              <img src={serches3} alt=""/>
              <div className="overlay">
                <i className="fa fa-search fa-2x"></i>
              </div>
            </Col>
            <Col xs={3} className="p-0 overlayed">
              <img src={serches4} alt=""/>
              <div className="overlay">
                <i className="fa fa-search fa-2x"></i>
              </div>
            </Col>
          </Row>
        </div>
      </React.Fragment>
    );
  }
}
export default Venues;