import React from 'react';

import UIModal from '../../UI/Modal';
import FilterPanel from '../Panel';

const FilterDialog = ({ show, onHide }) => (
  <UIModal show={show} onHide={onHide}>
    <FilterPanel />
  </UIModal>
);

export default FilterDialog;
