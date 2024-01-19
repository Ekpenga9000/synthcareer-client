import { FC, ReactElement } from 'react';
import { Grid } from '@mui/material';
import SideBar from '../../components/sidebar/sideBar';
import TaskArea from '../../components/taskArea/taskArea';

const Dashboard: FC = (): ReactElement => {
  return (
    <Grid container minHeight={'100vh'} p={0} m={0}>
      <TaskArea />
      <SideBar />
    </Grid>
  );
};

export default Dashboard;
