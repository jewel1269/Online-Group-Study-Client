import React, { useContext, useState, useEffect } from "react";
import axios from "axios";
import Swal from "sweetalert2";
import { IoIosArrowDown } from "react-icons/io";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { AuthContext } from "../Provider/AuthProvider";
import cover from "../../assets/create-removebg-preview.png";
import { Helmet } from "react-helmet";
import { toast } from "react-toastify";

const Update = () => {
  const { id } = useParams();
  const [items, setItems] = useState([]);
  const { loading } = useContext(AuthContext);
  const location = useLocation()
  const navigate = useNavigate()



  useEffect(() => {
    axios.get("https://online-group-study-server-red.vercel.app/assignments")
      .then((response) => {
        setItems(response.data);
      })
      .catch((error) => {
        // console.log(error);
      });
  }, []); 

  if (loading) {
    return <span className="loading loading-ring lg:ml-[50%] lg:mt-[20%] bg-red-600 loading-lg"></span>;
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = e.target;
    const title = form.title.value;
    const photoURL = form.photoURL.value;
    const marks = form.marks.value;
    const difficultyLevel = form.difficultyLevel.value;
    const date = form.date.value;
    const descriptions = form.descriptions.value;
    const assignment = {
      title,
      photoURL,
      marks,
      difficultyLevel,
      date,
      descriptions,
    };

    try {
      const url = `https://online-group-study-server-red.vercel.app/assignments/${id}`;
      const response = await axios.put(url, assignment);
      if (response.data) {
        Swal.fire("Date Updated!", "", "success");
        toast.success("Successfully Updated")
        form.reset();
       
        
      } else {
        Swal.fire("Error", "Assignment Not Added", "error");
      }
    } catch (error) {
      // console.log(error);
      Swal.fire("Error", "Failed to save changes", "error");
    }
  };

  

  const data = items.find((item) => item._id === id);

  return (
    <div>
      <Helmet><title>Updates</title></Helmet>
      <section className=" border border-gray-400 rounded-2xl mx-4 my-4 shadow-md dark:bg-gray-900">
        <div className="lg:flex lg:items-center lg:justify-center min-h-screen">
          <div className="lg:ml-28">
            <img src={cover} alt="" />
          </div>

          <div className="flex items-center w-full max-w-3xl p-8 mx-auto lg:px-12 lg:w-3/5">
            <div className="w-full">
              <h1 className="text-2xl font-semibold tracking-wider text-gray-800 capitalize dark:text-white">
                <strong>Update Your Assignment:</strong>
              </h1>

              <p className="mt-4 text-gray-500 dark:text-gray-400">
                Prepare for your assignment by verifying your account and
                setting up your profile. Get started now for success!
              </p>

              <div className="mt-6">
                <h1 className="text-gray-500 dark:text-gray-300">
                  Select type of account
                </h1>

                <div className="mt-3 md:flex md:items-center md:-mx-2">
                  <button className="flex justify-center w-full px-6 py-3 text-white bg-blue-500 rounded-lg md:w-auto md:mx-2 focus:outline-none">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-6 h-6"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth="2"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                      />
                    </svg>

                    <span className="mx-2">Student</span>
                  </button>

                  <button className="flex justify-center w-full px-6 py-3 mt-4 text-blue-500 border border-blue-500 rounded-lg md:mt-0 md:w-auto md:mx-2 dark:border-blue-400 dark:text-blue-400 focus:outline-none">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-6 h-6"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth="2"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                      />
                    </svg>

                    <span className="mx-2">Admin</span>
                  </button>
                </div>
              </div>

              <form
                onSubmit={handleSubmit}
                className="grid grid-cols-1 gap-6 mt-8 md:grid-cols-2"
              >
                

                <div>
                  <label className="block mb-2 text-sm text-gray-600  dark:text-gray-50">
                    <strong>Title:</strong>
                  </label>
                  <input
                    id="title"
                    type="text"
                    name="title"
                    defaultValue={data?.title}
                    placeholder="Title"
                    className="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400  border border-gray-200 rounded-lg dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
                  />
                </div>

                <div>
                  <label className="block mb-2 text-sm text-gray-600 dark:text-gray-200">
                    <strong>thumbnail Image URL:</strong>
                  </label>
                  <input
                    type="text"
                    id="photoURL"
                    name="photoURL"
                    defaultValue={data?.photoURL}
                    placeholder="thumbnail Image URL"
                    className="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400  border border-gray-200 rounded-lg dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
                  />
                </div>

                <div>
                  <label className="block mb-2 text-sm text-gray-600 dark:text-gray-200">
                    <strong>marks:</strong>
                  </label>
                  <input
                    type="text"
                    placeholder="marks"
                    id="marks"
                    defaultValue={data?.marks}
                    name="marks"
                    className="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400  border border-gray-200 rounded-lg dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
                  />
                </div>

                <div className="relative">
                  <select
                    className="appearance-none border mt-6 border-slate-400bg-stone-50  w-full p-4 rounded-md px-3 pr-8 leading-tight focus:outline-none focus:shadow-outline"
                    id="difficultyLevel"
                    name="difficultyLevel"
                    defaultValue={data?.difficultyLevel}
                    type="text"
                  >
                    <option value=""> assignment difficulty level</option>
                    <option value="easy">Easy</option>
                    <option value="medium">Medium</option>
                    <option value="Hard">Hard</option>
                  </select>
                  <div className="absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none">
                    <IoIosArrowDown className="mt-4 text-gray-600" />
                  </div>
                </div>

                <div>
                  <label className="block mb-2 text-sm text-gray-600 dark:text-gray-200">
                    <strong>Date:</strong>
                  </label>
                  <input
                    type="date"
                    name="date"
                    id="date"
                    defaultValue={data?.date}
                    placeholder="Enter your password"
                    className="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400  border border-gray-200 rounded-lg dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
                  />
                </div>

                <div>
                  <label className="block mb-2 text-sm text-gray-600 dark:text-gray-200">
                    <strong>Descriptions:</strong>
                  </label>
                  <input
                    type="text"
                    defaultValue={data?.descriptions}
                    placeholder="Descriptions........."
                    id="descriptions"
                    name="descriptions"
                    className="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400  border border-gray-200 rounded-lg dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
                  />
                </div>
                <div>
                  <label className="block mb-2 text-sm text-gray-600 dark:text-gray-200">
                    <strong>name:</strong>
                  </label>
                  <input
                    type="text"
                    defaultValue={data?.name}
                    className="block disabled w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 border border-gray-200 rounded-lg dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
                  />
                </div>

                <button className="flex items-center justify-between w-full px-6 py-3 text-sm tracking-wide text-white capitalize transition-colors duration-300 transform bg-blue-500 rounded-lg hover:bg-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-50">
                  <span> Update </span>

                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-5 h-5 rtl:-scale-x-100"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                </button>
                
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Update;
