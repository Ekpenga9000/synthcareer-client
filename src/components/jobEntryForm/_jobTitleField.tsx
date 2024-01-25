import { ReactElement, FC } from 'react';
import { TextField } from '@mui/material';
import { ITextField } from './interfaces/ITextFields';
import PropTypes from "prop-types";

const JobTitleField: FC<ITextField> = (props): ReactElement => {
    const {
        onChange = (e) => console.log(e),
        disabled = false} = props; 

  return (
      <TextField
          id='title'
          label="Job Title"
          placeholder='Job title'
          variant='outlined'
          size='small'
          name='title'
          disabled={disabled}
          fullWidth
          onChange={onChange}
      />
  )
}

JobTitleField.propTypes = {
    onChange: PropTypes.func,
    disabled: PropTypes.bool
}

export default JobTitleField;