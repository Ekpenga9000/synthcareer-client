import { ReactElement, FC, FormEvent, useRef, useState } from 'react';
import { FaPlus } from 'react-icons/fa6';

const JobEntryForm: FC = (): ReactElement => {
  const initialData = {
    role: "", 
    company: "", 
    url: "", 
    description: "", 
    salary: 0, 
    appDate: "", 
    jobType: "",
    applicationstatus:""
  }

  const [formData, setFormData] = useState(initialData);
  const formRef = useRef(null); 

  const handleOnChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target; 

    setFormData((prevData) => ({ ...prevData, [name]: value }));
    
  }

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault(); 
    console.log("Form", formData);
    setFormData(initialData);
  };

  return (
    <form
      ref={formRef}
      onSubmit={handleSubmit}
      className="border border-gray-900/10 flex flex-col justify-evenly md:justify-center md:gap-4 mt-6 bg-white rounded-lg shadow-sm p-4 w-full md:h-full"
    >
      <div>
        <label
          htmlFor="role"
          className="block text-sm font-medium leading-6 text-gray-900 mb-2 md:hidden" 
        >
          Role
        </label>
        <input
          onChange={handleOnChange}
          value={formData.role}
          type="text"
          name="role"
          id="role"
          autoComplete="role"
          placeholder="Enter role"
          className="block py-2 pl-2 border-1 border-gray-400 placeholder:text-gray-500 focus:ring-1 focus:ring-blue-500 focus:bg-gray-50 bg-gray-200 rounded-md w-full"
        />
      </div>
      <div>
        <label
          htmlFor="company"
          className="block text-sm font-medium leading-6 text-gray-900 mb-2 md:hidden"
        >
          Company
        </label>
        <input
          onChange={handleOnChange}
          value={formData.company}
          type="text"
          name="company"
          id="company"
          placeholder="Enter company"
          className="focus:ring-blue-500 focus:bg-gray-50 w-full py-2 pl-2 border-1 border-gray-400 placeholder:text-gray-500 focus:ring-0 bg-gray-200 rounded-md"
        />
      </div>
      <div>
        <label
          htmlFor="url"
          className="block text-sm font-medium leading-6 text-gray-900 mb-2 md:hidden"
        >
          Job URL
        </label>
        <input
          onChange={handleOnChange}
          value={formData.url}
          type="text"
          name="url"
          id="url"
          placeholder="Enter Job Url"
          className="focus:ring-blue-500 focus:bg-gray-50 w-full py-2 pl-2 border-1 border-gray-400 placeholder:text-gray-500 focus:ring-0 bg-gray-200 rounded-md"
        />
      </div>
      <div>
        <label
          htmlFor="description"
          className="block text-sm font-medium leading-6 text-gray-900 mb-2 md:hidden"
        >
          Job description
        </label>
        <textarea
          value={formData.description}
          onChange={handleOnChange}
          name="description"
          id="description"
          placeholder="Job Description"
          className="focus:ring-blue-500 focus:bg-gray-50 w-full py-2 pl-2 border-1 border-gray-400 placeholder:text-gray-500 focus:ring-0 bg-gray-200 rounded-md"
        ></textarea>
      </div>
      <div>
        <label
          htmlFor="salary"
          className="block text-sm font-medium leading-6 text-gray-900 mb-2 md:hidden"
        >
          Salary
        </label>
        <input
          value={formData.salary}
          onChange={handleOnChange}
          type="number"
          name="salary"
          id="salary"
          placeholder="Enter salary"
          className="focus:ring-blue-500 focus:bg-gray-50 w-full py-2 pl-2 border-1 border-gray-400 placeholder:text-gray-500 focus:ring-0 bg-gray-200 rounded-md"
        />
      </div>
      <div>
        <label htmlFor="appDate"
        className="block text-sm font-medium leading-6 text-gray-900 mb-2 md:hidden"
        >Date</label>
        <input
          value={formData.appDate}
          onChange={handleOnChange}
          type="date"
          name="appDate"
          id="appDate"
          className="focus:ring-blue-500 focus:bg-gray-50 w-full py-2 pl-2 border-1 border-gray-400 placeholder:text-gray-500 focus:ring-0 bg-gray-200 rounded-md"
        />
      </div>
        <div>
          <label
            htmlFor="jobType"
            className="block text-sm font-medium leading-6 text-gray-900 mb-2 md:inline-block md:mr-2"
          >
            Job Type
          </label>
        <select
          onChange={handleOnChange}
          value={formData.jobType}
            name="jobType"
            id="jobType"
            className="border block w-full border-solid px-4 py-1 rounded-md border-gray-400"
        >
            <option value={''}>Select job type</option>
            <option value={'fulltime'}>Full-Time</option>
            <option value={'parttime'}>Part-Time</option>
            <option value={'contract-fulltime'}>Contract Full-Time</option>
            <option value={'contract-parttime'}>Contract Part-Time</option>
            <option value={'internship'}>Internship</option>
            <option value={'volunteer'}>Volunteer</option>
          </select>
        </div>

        <div>
          <label
            htmlFor="applicationstatus"
            className="block text-sm font-medium leading-6 text-gray-900 mb-2 md:inline-block md:mr-2"
          >
            Application Status
          </label>
        <select
          onChange={handleOnChange}
          value={formData.applicationstatus}
            name="applicationstatus"
            id="applicationstatus"
            className="border block w-full border-solid px-4 py-1 rounded-md border-gray-400"
        >
            <option value={''}>Select application status</option>
            <option value={'pending'}>Pending</option>
            <option value={'applied'}>Applied</option>
          </select>
        </div>
      <button className="mt-4 bg-blue-500 py-2 text-white cursor-pointer hover:bg-blue-300 rounded-md flex justify-center items-center gap-1">
        <FaPlus /> Add Application
      </button>
    </form>
  );
};

export default JobEntryForm;
