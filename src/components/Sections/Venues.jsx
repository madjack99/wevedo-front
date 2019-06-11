import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Row, Container, Col, Form, Button, ButtonToolbar, Pagination } from 'react-bootstrap';
import '../../sass/wevedo.scss';

import sampleImg from '../../images/sample-list-img.png';
import serches1 from '../../images/serches1.png';
import serches2 from '../../images/serches2.png';
import serches3 from '../../images/serches3.png';
import serches4 from '../../images/serches4.png';

class Venues extends Component {
  render() {
    return (
      <React.Fragment>
        <div className="venues">
	        <Container className="h-100 w-100 align-items-center">
            <Row className="h-100 align-items-center">
        	    <Col sm={12} className="text-center text-uppercase">
              	<h1>Wedding<br/> Venues</h1>
            	</Col>
            </Row>
          </Container>
        </div>
        <Row className="findseparator findseparator-sm d-flex align-items-center text-center">
          <Col sm={12}>
            <Form>
              <Form.Row>
                <Col className="boxed-form">
                  <Row>
                    <Col>
                      <Form.Control as="select">
                        <option>Category</option>
                        <option>...</option>
                      </Form.Control>
                    </Col>
                    <div className="divider"></div>
                    <Col>
                      <Form.Control placeholder="Location"/>
                    </Col>
                  </Row>
                </Col>
                <Col sm={3}>
                  <Button variant="light" size="lg">Search</Button>
                </Col>
              </Form.Row>
            </Form>
          </Col>
        </Row>
        <Container className="venues-results">
        	<Row>
        		<Col sm={4} className="results-filters">
        			<Form>
	        			<div className="mb-5">
	        				<div className="mb-3"><b>Budget</b></div>
	        			</div>
	        			<div className="mb-5">
	        				<div className="mb-3"><b>Seated Dining Capacity</b></div>
	        			</div>
	        			<div className="mb-5">
	        				<div className="mb-3"><b>Venue Type</b></div>
	        				<Form.Check label="Country House"/>
	        				<Form.Check label="Barm"/>
	        				<Form.Check label="Outdoor"/>
	        				<Form.Check label="Attraction"/>
	        			</div>
	        			<div className="mb-5">
	        				<div className="mb-3"><b>Venue Styles</b></div>
	        				<Form.Check label="Classic"/>
	        				<Form.Check label="Intimate"/>
	        				<Form.Check label="Unusual"/>
	        				<Form.Check label="Modern"/>
	        			</div>
        			</Form>
							<ButtonToolbar>
		            <Button variant="primary" className="mr-2">Apply Filter</Button>
		            <Button variant="dark">Clear</Button>
		          </ButtonToolbar>
        		</Col>
        		<Col sm={8} className="results-data">
        			<Col>
        				<Row className="mb-4">
        					<Col className="mr-auto text-uppercase"><h4 className="pt-2">740 Wedding Venues</h4></Col>
        					<Col className="text-right">
        						<Button variant="secondary" className="mr-2">Show map</Button>
        						<Button variant="secondary" className="mr-2"><i class="fas fa-th-large"></i></Button>
				            <Button variant="primary"><i class="fas fa-bars"></i></Button>
        					</Col>
        				</Row>
        				<Link to="/supplier">
                  <Row>
          					<Col sm={5}><img src={sampleImg} alt=""/></Col>
          					<Col sm={7}>
          						<h5>Fulham Palace</h5>
          						<span className="results-data-location"><i class="fas fa-map-marker-alt"></i> South London</span>
          						<p className="mt-2 mb-2">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua...</p>
          						<b>$985 - $85,000 | Up to 220 Capacity</b>
          					</Col>
          				</Row>
                </Link>
        				<div className="divider"></div>
        				<Row>
        					<Col sm={5}><img src={sampleImg} alt=""/></Col>
        					<Col sm={7}>
        						<h5>Fulham Palace</h5>
        						<span className="results-data-location"><i class="fas fa-map-marker-alt"></i> South London</span>
        						<p className="mt-2 mb-2">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua...</p>
        						<b>$985 - $85,000 | Up to 220 Capacity</b>
        					</Col>
        				</Row>
        				<div className="divider"></div>
        				<Row>
        					<Col sm={5}><img src={sampleImg} alt=""/></Col>
        					<Col sm={7}>
        						<h5>Fulham Palace</h5>
        						<span className="results-data-location"><i class="fas fa-map-marker-alt"></i> South London</span>
        						<p className="mt-2 mb-2">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua...</p>
        						<b>$985 - $85,000 | Up to 220 Capacity</b>
        					</Col>
        				</Row>
        				<div className="divider"></div>
        				<Row>
        					<Col sm={5}><img src={sampleImg} alt=""/></Col>
        					<Col sm={7}>
        						<h5>Fulham Palace</h5>
        						<span className="results-data-location"><i class="fas fa-map-marker-alt"></i> South London</span>
        						<p className="mt-2 mb-2">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua...</p>
        						<b>$985 - $85,000 | Up to 220 Capacity</b>
        					</Col>
        				</Row>
        				<Row className="mt-5">
        					<Col>
	        					<ButtonToolbar>
	        						<Button variant="light" className="mr-2"><i className="fa fa-angle-double-left"></i></Button>
	        						<Button variant="light" className="mr-2"><i className="fa fa-angle-left"></i></Button>
	        						<Button className="mr-2">1</Button>
	        						<Button className="mr-2" variant="secondary">2</Button>
	        						<Button className="mr-2" variant="secondary">3</Button>
	        						<Button variant="light" className="mr-2"><i className="fa fa-angle-right"></i></Button>
	        					</ButtonToolbar>
									</Col>
									<Col className="text-right pt-2">
										<span className="text-muted">Showing 1 - 6 of 8 results</span>
									</Col>
        				</Row>
        			</Col>
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
