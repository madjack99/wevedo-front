import React from 'react';

import UIModal from '../../UI/Modal';
import FilterPanel from '../Panel';

const FilterDialog = ({ show, onHide }) => (
  <UIModal show={show} onHide={onHide}>
    <div className="m-3">
      <FilterPanel />
    </div>
  </UIModal>
);

export default FilterDialog;
