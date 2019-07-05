import React from 'react';

import './error-form.scss';

const ErrorForm = ({ formErrors }) => (
  <div className="error-form">
    {
      Object.keys(formErrors).map((fieldName, i) => {
        if (formErrors[fieldName].length > 0) {
          return (
            <p key={i}>
              {fieldName}
              {formErrors[fieldName]}
            </p>
          );
        }
        return '';
      })
    }
  </div>
);

export default ErrorForm;
