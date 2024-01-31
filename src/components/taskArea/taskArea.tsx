import { FC, ReactElement } from 'react';
import Entries from '../entries/Entries';
import { jobsList, DataObj } from "../../assets/data/data";

const TaskArea: FC = (): ReactElement => {
  
  const jobData: DataObj[] = [...jobsList]; 

  return (
    <section className='h-screen relative'>
      <div className='shadow-sm border border-solid border-gray-200 py-4 flex justify-center'>
        <input type="search" placeholder='Search job...' className='border border-solid border-gray-300 placeholder:text-gray-500 py-2 pl-2 pr-2 rounded-md'/>
      </div>
      <div className='overflow-y-scroll bg-gray-100 h-full p-4 md:pb-20 flex flex-col gap-4'>
        {jobData.map(({company, url, id, role, description, date, status}) => (
          <Entries
            company={company}
            url={url}
            key={id}
            role={role}
            description={description}
            date={date}
            status={ status }
          />
        ))}
      </div>
      <div className='w-full h-full bg-gray-300 absolute border border-solid border-gray-400'>

      </div>
    </section>
  );
};

export default TaskArea;
