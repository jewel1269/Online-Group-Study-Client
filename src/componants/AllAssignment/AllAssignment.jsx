import axios from "axios";
import { useContext, useEffect, useState } from "react";
import AssignmentCard from "./AssignmentCard";
import { IoIosArrowDown } from "react-icons/io";
import { AuthContext } from "../Provider/AuthProvider";
import { Helmet } from "react-helmet";

const AllAssignment = () => {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const { user } = useContext(AuthContext);
  const [filter, setFilter] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const url =  `https://online-group-study-server-red.vercel.app/assignments?filter=${filter}` 
        const response = await axios.get(url);
        setItems(response.data);
      } catch (error) {
        console.error('Error fetching assignments:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [filter]);

  const pages = [1, 2, 3, 4];

  if (loading) {
    return <span className="loading loading-ring lg:ml-[50%] lg:mt-[20%] bg-red-600 loading-lg"></span>;
  }

  return (
    <div>
       <Helmet><title>All Assignment</title></Helmet>
      <div>
        <section className=" dark:bg-gray-900">
          <div className="container flex flex-col items-center px-4 py-12 mx-auto text-center">
            <h2 className="max-w-2xl mx-auto text-2xl font-semibold tracking-tight text-gray-800 xl:text-3xl dark:text-white">
              Bring your Career to the{" "}
              <span className="text-blue-500">next level.</span>
            </h2>

            <p className="max-w-4xl mt-6 text-center text-gray-500 dark:text-gray-300">
              "Elevate your professional trajectory with tailored strategies and advanced resources.
              Propel your career to new heights and unlock unparalleled opportunities for growth and success."
            </p>

            <div className="relative">
              <p className="lg:text-3xl bg-gradient-to-r from-blue-600 via-green-500 to-indigo-400 text-transparent bg-clip-text">⚠️Choose difficulty Level</p>
              <select
                className="appearance-none lg:w-64 border dark:text-primary  mt-6 border-slate-400bg-stone-50  w-full p-2 rounded-md px-2 pr-8 leading-tight focus:outline-none focus:shadow-outline"
                onChange={e => setFilter(e.target.value)}
                value={filter}
                name="difficultyLevel"
                id="difficultyLevel"
                
              >
                <option value="">Filter By</option>
                <option value="easy">Easy</option>
                <option value="medium">Medium</option>
                <option value="Hard">Hard</option>
              </select>
              <div className="absolute inset-y-0 mt-2 right-0 flex items-center px-2 pointer-events-none">
                <IoIosArrowDown className="mt-12 lg:mr-12 text-gray-600" />
              </div>
            </div>
          </div>
        </section>
      </div>
      <div className="lg:grid md:grid md:grid-cols-2 lg:grid-cols-4 gap-5 mt-10 lg:ml-12 lg:me-10">
        {items.map((item) => (
          <AssignmentCard key={item._id} item={item}></AssignmentCard>
        ))}
      </div>
      <div>
        <div className="flex md:ml-[23%] lg:ml-[37%] mt-10">
          <a href="#" className="px-4 py-2 mx-1 text-gray-700 capitalize bg-white rounded-md hover:text-white hover:bg-blue-500 dark:bg-gray-800 dark:text-gray-600">
            <div className="flex items-center -mx-1">
              <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 mx-1 rtl:-scale-x-100" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 16l-4-4m0 0l4-4m-4 4h18" />
              </svg>
              <span className="mx-1">previous</span>
            </div>
          </a>

          {pages.map(pageNumber => (
            <button key={pageNumber} href="#" className="hidden px-4 py-2 mx-1 text-gray-700 transition-colors duration-300 transform bg-white rounded-md sm:inline dark:bg-gray-800 dark:text-gray-200 hover:bg-blue-500 dark:hover:bg-blue-500 hover:text-white dark:hover:text-gray-200">
              {pageNumber}
            </button>
          ))}

          <a href="#" className="px-4 py-2 mx-1 text-gray-700 transition-colors duration-300 transform bg-white rounded-md dark:bg-gray-800 dark:text-gray-200 hover:bg-blue-500 dark:hover:bg-blue-500 hover:text-white dark:hover:text-gray-200">
            <div className="flex items-center -mx-1">
              <span className="mx-1">Next</span>
              <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 mx-1 rtl:-scale-x-100" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </div>
          </a>
        </div>
      </div>
    </div>
  );
};

export default AllAssignment;
