import { ReactElement, FC } from 'react';
import { Box, Typography, Stack, Button } from '@mui/material';
import JobTitleField from './_jobTitleField';
import JobDescriptionField from './_jobDescriptionField';
import CompanyNameField from './_companyNameField';
import ApplicationDate from './_applicationDate';


const JobEntryForm: FC = (): ReactElement => {
  return (
    <Box
      display={'flex'}
      flexDirection={'column'}
      alignItems={'flex-start'}
      width={'100%'}
      px={4}
      my={6}
    >
      <Typography mb={2} component={'h2'} variant="h6">
        Create a job entry
      </Typography>
      <Stack sx={{ width: '100%' }} spacing={2}>
        <JobTitleField disabled/>
        <CompanyNameField/>
        <JobDescriptionField />
        <ApplicationDate />
        <Button variant="contained">Add Application</Button>
        <Button/>
      </Stack>
      {/* Application date */}
      {/* company name */}
      {/* Salary */}
      {/* Personal Interest */}
      {/* Enter Job */}
    </Box>
  );
};

export default JobEntryForm;
