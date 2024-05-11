import axios from "axios";
import { useEffect, useState } from "react";
import AssignmentCard from "./AssignmentCard";
import { IoIosArrowDown } from "react-icons/io";

const AllAssignment = () => {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);

  axios
    .get("http://localhost:5000/assignments")
    .then((response) => {
      setItems(response.data);
      setLoading(false);
    })
    .then((error) => {
      console.log(error);
      setLoading(false);
    });
  console.log(items);
  if (loading) {
    return <span className="loading loading-ring lg:ml-[50%] lg:mt-[20%] bg-red-600 loading-lg"></span>;
}

  return (
    <div>
      <div>
        <section className="bg-white dark:bg-gray-900">
          <div className="container flex flex-col items-center px-4 py-12 mx-auto text-center">
            <h2 className="max-w-2xl mx-auto text-2xl font-semibold tracking-tight text-gray-800 xl:text-3xl dark:text-white">
              Bring your Business to the{" "}
              <span className="text-blue-500">next level.</span>
            </h2>

            <p className="max-w-4xl mt-6 text-center text-gray-500 dark:text-gray-300">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Cum
              quidem officiis reprehenderit, aperiam veritatis non, quod veniam
              fuga possimus hic explicabo laboriosam nam. A tempore totam ipsa
              nemo adipisci iusto!
            </p>

            <div className="relative">
              <select
                className="appearance-none lg:w-64 border bg-slate-200 mt-6 border-slate-400bg-stone-50  w-full p-2 rounded-md px-2 pr-8 leading-tight focus:outline-none focus:shadow-outline"
                id="difficultyLevel"
                name="difficultyLevel"
                type="text"
              >
                <option value="">Sort By</option>
                <option value="easy">Easy</option>
                <option value="medium">Medium</option>
                <option value="Hard">Hard</option>
              </select>
              <div className="absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none">
                <IoIosArrowDown className="mt-4 text-gray-600" />
              </div>
            </div>
          </div>
        </section>
      </div>
      <div className="lg:grid lg:grid-cols-4 gap-5 mt-10 lg:ml-12 lg:me-10">
        {items.map((item) => (
          <AssignmentCard key={item._id} item={item}></AssignmentCard>
        ))}
      </div>
      <div>
      
    <div className="flex lg:ml-[37%] mt-10">
      <a href="#" className="px-4 py-2 mx-1 text-gray-500 capitalize bg-white rounded-md cursor-not-allowed dark:bg-gray-800 dark:text-gray-600">
        <div className="flex items-center -mx-1">
          <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 mx-1 rtl:-scale-x-100" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 16l-4-4m0 0l4-4m-4 4h18" />
          </svg>
          <span className="mx-1">previous</span>
        </div>
      </a>
      
      {[1, 2, 3, 4, 5].map(pageNumber => (
        <a key={pageNumber} href="#" className="hidden px-4 py-2 mx-1 text-gray-700 transition-colors duration-300 transform bg-white rounded-md sm:inline dark:bg-gray-800 dark:text-gray-200 hover:bg-blue-500 dark:hover:bg-blue-500 hover:text-white dark:hover:text-gray-200">
          {pageNumber}
        </a>
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
