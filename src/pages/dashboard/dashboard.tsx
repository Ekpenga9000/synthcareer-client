import { FC, ReactElement } from 'react';
import SideBar from '../../components/sidebar/sideBar';
import TaskArea from '../../components/taskArea/taskArea';

const Dashboard: FC = (): ReactElement => {
  return (
    <section className="md:grid md:grid-cols-2 lg:grid-cols-4 md:h-screen md:overflow-clip">
      <div className='bg-blue-300 flex flex-col justify-center items-center py-6'>
        <SideBar />
      </div>
      <div className='sm:w-screen md:w-full lg:col-span-3'>
        <TaskArea />
      </div>
    </section>
  );
};

export default Dashboard;
