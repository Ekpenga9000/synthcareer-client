import { FC, ReactElement } from 'react';
import Entries from '../entries/Entries';


const TaskArea: FC = (): ReactElement => {
  return (
    <section className='h-screen relative'>
      <div className='shadow-sm border border-solid border-gray-200 py-4 flex justify-center'>
        <input type="search" placeholder='Search job...' className='border border-solid border-gray-300 placeholder:text-gray-500 py-2 pl-2 pr-2 rounded-md'/>
      </div>
      <div className='overflow-y-scroll bg-gray-100 h-full p-4'>
        <Entries />
      </div>
      <div className='w-full h-full bg-gray-300 absolute border border-solid border-gray-400'>

      </div>
    </section>
  );
};

export default TaskArea;
