import { FC, ReactElement } from 'react';
import PropTypes from 'prop-types';

type profile = {
  name?: string;
};
const Profile: FC<profile> = ({ name }): ReactElement => {
  return (
    <section className="flex flex-col justify-center items-center md:flex-row md:justify-start md:gap-3 w-full">
      <div className='bg-blue-500 h-10 w-10 rounded-full flex justify-center items-center'>
        <h4 className='text-white antialiased'>{`${name?.substring(0, 1)}`}</h4>
      </div>
      <div className=''>
        <h4 className='font-semibold antialiased text-center md:text-start'>Welcome, {name}</h4>
        <p className='antialiased text-xs text-gray-500'>Keep track of your job applications</p>
      </div> 
    </section>
  );
};

Profile.propTypes = {
  name: PropTypes.string,
};

export default Profile;
