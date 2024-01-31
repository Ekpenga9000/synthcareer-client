import { ReactElement, FC, useState } from 'react';
import { AiOutlineClose } from 'react-icons/ai';

interface DataObj {
  company?: string;
  role?: string;
  url?: string;
  description?: string;
  date?: string;
  status?: string;
}

const Entries: FC<DataObj> = (props): ReactElement => {
  const { company, role, url, description, date, status } = props;

  const [isUpdateClicked, setIsUpdateClicked] = useState<boolean>(false);

  return (
    <div className="border border-solid border-gray-100 rounded-md p-4 bg-white shadow-sm">
      <h3 className="font-semibold mb-5">{company}</h3>
      <a
        href={url}
        target="_blank"
        className="border border-solid border-gray-200 shadow-sm rounded-md py-1 px-1 text-sm mb-3 inline-block"
      >
        {role}
      </a>
      <p className="font-semibold text-xs mb-4">{status}</p>
      <p className="mb-1">{description}</p>
      <p className="text-xs decoration-solid underline decoration-2 decoration-sky-500 cursor-pointer">
        More details ...
      </p>
      <div className="md:flex md:justify-between items-center mt-4">
        <span className="text-xs font-thin">Applied on: {date}</span>
        {!isUpdateClicked && (
          <span
            onClick={() => setIsUpdateClicked(!isUpdateClicked)}
            className="cursor-pointer rounded-md shadow-sm border border-solid border-gray-200 px-1 text-sm"
          >
            Applied
          </span>
        )}
        {isUpdateClicked && (
          <form className="flex justify-center items-center">
            {' '}
            <span
              className="cursor-pointer"
              onClick={() => setIsUpdateClicked(!isUpdateClicked)}
            >
              <AiOutlineClose />
            </span>{' '}
            <select name="status" id="status">
              <option value="not-applied">Not Applied</option>
              <option value="applied">Applied</option>
              <option value="interviewing">Interviewing</option>
              <option value="accepted">Accepted</option>
              <option value="rejected">Rejected</option>
            </select>
          </form>
        )}
      </div>
    </div>
  );
};

export default Entries;
