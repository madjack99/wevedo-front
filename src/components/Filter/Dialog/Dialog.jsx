import React from 'react';

import UIModal from '../../UI/Modal';
import FilterPanel from '../Panel';

const FilterDialog = ({ show, onHide, ...rest }) => (
  <UIModal show={show} onHide={onHide}>
    <div className="m-3">
      <FilterPanel onHideDialog={onHide} {...rest} />
    </div>
  </UIModal>
);

export default FilterDialog;
