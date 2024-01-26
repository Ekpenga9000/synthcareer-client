import { FC, ReactElement } from 'react';
import Profile from '../profile/profile';
import JobEntryForm from '../jobEntryForm/jobEntryForm';

const SideBar: FC = (): ReactElement => {
  return (
 
   <section className='w-screen md:h-full md:w-full flex flex-col items-center px-4'>
      <Profile name={'Ibukun'} />
      <JobEntryForm />
    </section>
  );
};

export default SideBar;
