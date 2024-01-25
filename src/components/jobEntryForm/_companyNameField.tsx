import { ReactElement, FC } from 'react';
import { TextField } from '@mui/material';
import { ITextField } from './interfaces/ITextFields';
import PropTypes from "prop-types"; 

const CompanyNameField: FC<ITextField> = (props): ReactElement => {
  const {
    onChange = (e) => console.log(e),
    disabled = false
  } = props;

  return (
      <TextField
          id='company'
          label="Company Name"
          placeholder='Company Name'
          variant='outlined'
          size='small'
          name='company'
      fullWidth
      disabled={disabled}
      onChange={onChange}
      />
  )
}

CompanyNameField.propTypes = {
  onChange: PropTypes.func,
  disabled: PropTypes.bool
}

export default CompanyNameField;