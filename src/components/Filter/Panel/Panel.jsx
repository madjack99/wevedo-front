import React, { useState, useEffect, useCallback } from 'react';
import { withRouter } from 'react-router-dom';
import { withTranslation } from 'react-i18next';

import { Row, Col, Form, Button, ButtonToolbar } from 'react-bootstrap';
import { Range } from 'rc-slider';

import 'rc-slider/assets/index.css';

const FilterPanel = ({ setFilterOptions, onHideDialog, match, t }) => {
  const budgetDefaultValues = [0, 100000];
  const [budgetValues, setBudgetValues] = useState([...budgetDefaultValues]);

  // const guestsDefaultNumber = [30, 100];
  // const [guestsNumber, setGuestsNumber] = useState([...guestsDefaultNumber]);

  // const defaultVenueTypes = {
  //   'Country House': false,
  //   Barn: false,
  //   Outdoor: false,
  //   Attraction: false,
  // };
  // const [venueTypes, setVenueTypes] = useState(defaultVenueTypes);
  // const handleVenueTypeSelection = e => {
  //   const venueName = e.target.id;
  //   setVenueTypes({
  //     ...venueTypes,
  //     [venueName]: !venueTypes[venueName],
  //   });
  // };

  // const defaultVenueStyles = {
  //   Classic: false,
  //   Intimate: false,
  //   Unusual: false,
  //   Modern: false,
  // };
  // const [venueStyles, setVenueStyles] = useState(defaultVenueStyles);
  // const handleVenueStyleSelection = e => {
  //   const venueStyle = e.target.id;
  //   setVenueStyles({
  //     ...venueStyles,
  //     [venueStyle]: !venueStyles[venueStyle],
  //   });
  // };

  const handleClear = () => {
    setBudgetValues(budgetDefaultValues);
    // setGuestsNumber(guestsDefaultNumber);
    // setVenueTypes(defaultVenueTypes);
    // setVenueStyles(defaultVenueStyles);
    setFilterOptions({});
  };

  const handleClearCallback = useCallback(handleClear, []);

  useEffect(() => {
    handleClearCallback();
  }, [match.params.category, handleClearCallback]);

  return (
    <React.Fragment>
      <Form>
        <div className="mb-5">
          <div className="mb-3">
            <b>{t('filterPanel.budget')}</b>
          </div>
          <Row>
            <Col sm={12}>
              <Range
                min={0}
                max={100000}
                defaultValue={[...budgetDefaultValues]}
                value={budgetValues}
                step={100}
                onChange={updatedValues => setBudgetValues(updatedValues)}
              />
            </Col>
            <Col sm={12} className="mt-3">
              <span className="text-muted">Price: </span>
              {`£${budgetValues[0]} - £${budgetValues[1]}`}
            </Col>
          </Row>
        </div>
        {/* <div className="mb-5">
          <div className="mb-3">
            <b>Seated Dining Capacity</b>
          </div>
          <Row>
            <Col sm={12}>
              <Range
                min={0}
                max={200}
                defaultValue={[...guestsDefaultNumber]}
                value={guestsNumber}
                step={1}
                onChange={updatedGuestsNumber =>
                  setGuestsNumber(updatedGuestsNumber)
                }
              />
            </Col>
            <Col sm={12} className="mt-3">
              <span className="text-muted">Seated: </span>
              {`${guestsNumber[0]} - ${guestsNumber[1]}`}
            </Col>
          </Row>
        </div>
        <div className="mb-5">
          <div className="mb-3">
            <b>Venue Type</b>
          </div>
          <Form.Check
            label="Country House"
            id="Country House"
            onChange={handleVenueTypeSelection}
            checked={venueTypes['Country House']}
          />
          <Form.Check
            label="Barn"
            id="Barn"
            onChange={handleVenueTypeSelection}
            checked={venueTypes['Barn']}
          />
          <Form.Check
            label="Outdoor"
            id="Outdoor"
            onChange={handleVenueTypeSelection}
            checked={venueTypes['Outdoor']}
          />
          <Form.Check
            label="Attraction"
            id="Attraction"
            onChange={handleVenueTypeSelection}
            checked={venueTypes['Attraction']}
          />
        </div>
        <div className="mb-5">
          <div className="mb-3">
            <b>Venue Styles</b>
          </div>
          <Form.Check
            label="Classic"
            id="Classic"
            onChange={handleVenueStyleSelection}
            checked={venueStyles['Classic']}
          />
          <Form.Check
            label="Intimate"
            id="Intimate"
            onChange={handleVenueStyleSelection}
            checked={venueStyles['Intimate']}
          />
          <Form.Check
            label="Unusual"
            id="Unusual"
            onChange={handleVenueStyleSelection}
            checked={venueStyles['Unusual']}
          />
          <Form.Check
            label="Modern"
            id="Modern"
            onChange={handleVenueStyleSelection}
            checked={venueStyles['Modern']}
          />
        </div> */}
      </Form>
      <ButtonToolbar>
        <Button
          variant="primary"
          className="mr-2"
          onClick={() => {
            const filterOptionsObj = {
              budgetValues,
              // guestsNumber,
              // venueTypes,
              // venueStyles,
            };
            console.log(filterOptionsObj);
            setFilterOptions(filterOptionsObj);

            if (onHideDialog) {
              onHideDialog();
            }
          }}
        >
          {t('filterPanel.applyFilter')}
        </Button>
        <Button variant="dark" onClick={handleClear}>
          {t('filterPanel.clear')}
        </Button>
      </ButtonToolbar>
    </React.Fragment>
  );
};

export default withTranslation('common')(withRouter(FilterPanel));
