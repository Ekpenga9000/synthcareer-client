import { ReactElement, FC } from 'react';
import { TextField } from '@mui/material';
import { ITextField } from './interfaces/ITextFields';
import PropTypes from "prop-types"

const JobDescriptionField: FC<ITextField> = (props): ReactElement => {
    const {
        onChange = (e) => console.log(e),
        disabled = false
      } = props;
  return (
      <TextField
          id='description'
          name='description'
          placeholder='Job Description'
          size='small'
          multiline
          rows={4}
          fullWidth
          variant='outlined'
          label="Job Description"
          disabled={disabled}
          onChange={onChange}
      />
  )
}

JobDescriptionField.propTypes = {
    onChange: PropTypes.func,
    disabled: PropTypes.bool
}

export default JobDescriptionField;