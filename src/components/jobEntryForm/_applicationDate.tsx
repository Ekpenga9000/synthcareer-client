import { ReactElement, FC } from 'react'; 
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { IDateField } from './interfaces/IDateField';
import PropTypes from "prop-types"; 

const ApplicationDate: FC<IDateField> = (props): ReactElement => {
    const {
        value = new Date(),
        disabled = false,
        onChange = (newDate) => (console.log(newDate))
    } = props;
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
          <DatePicker
              label="Application date"
              value={value}
              disabled={disabled}
              onChange={onChange}
          />
  </LocalizationProvider>
  )
}

ApplicationDate.propTypes = {
    disabled: PropTypes.bool, 
    onChange: PropTypes.func, 
    value: PropTypes.instanceOf(Date),
}

export default ApplicationDate