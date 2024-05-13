import axios from "axios";
import { useState, useEffect, useContext } from "react";
import { useParams } from "react-router-dom";
import { AuthContext } from "../Provider/AuthProvider";
import Swal from "sweetalert2";

const Details = () => {
  const [details, setDetails] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const info = useParams();
  const { user } = useContext(AuthContext);
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    axios
      .get("http://localhost:5000/assignments")
      .then((response) => {
        setDetails(response.data);
        setLoading(false);
      })
      .catch((error) => {
        setError(error);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return (
      <span className="loading loading-ring lg:ml-[50%] lg:mt-[20%] bg-red-600 loading-lg"></span>
    );
  }
  if (error) {
    return <div>Error: {error.message}</div>;
  }
  const item = details.find((item) => item._id === info.id);

  const handleSubmitBtn = (e) => {
    e.preventDefault();
    const form = e.target;
    const feedback =form.feedback.value;
    const pdf =form.pdf.value;
    const title = item.title;
    const email = user?.email;
    const name = user?.displayName;
    const photoURL = item.photoURL;
    const marks = item.marks;
    const difficultyLevel = item.difficultyLevel;
    const date = item.date
    const descriptions = item.descriptions;
    const assignmentSubmit = {
      title,
      email,
      name,
      pdf,
      photoURL,
      marks,
      difficultyLevel,
      date,
      descriptions,
      feedback
    };
    const url = 'http://localhost:5000/submittedAssignment' ;
    axios.post(url, assignmentSubmit)
    .then((response) => {
        if (response.data) {
            console.log(response);
            Swal.fire("Submitted!", "", "success");
            form.reset()
        } else {
            console.log(response);
            Swal.fire("Error", "Assignment Not Submit", "error");
        }
    })
    .catch((error) => {
        console.log(error);
        Swal.fire("Error", "Failed to save changes", "error");
    });
  };

  return (
    <div
      className="hero min-h-screen"
      style={{
        backgroundImage:
          "url(https://img.freepik.com/premium-vector/white-gray-wave-abstract-background-soft-design-graphic-work_41084-469.jpg?size=626&ext=jpg&ga=GA1.1.1369675164.1715212800&semt=ais)",
      }}
    >
      <section className=" shadow-2xl shadow-gray-400 dark:bg-gray-900">
        <div className="container px-6 py-10 mx-auto">
          <div className="lg:-mx-6 lg:flex lg:items-center">
            <img
              className="object-cover object-center lg:w-1/2 lg:mx-6 w-full h-96 rounded-lg lg:h-[36rem]"
              src={item?.photoURL}
              alt=""
            />

            <div className="mt-8 lg:w-1/2 lg:px-6 lg:mt-0">
              <h1 className="text-2xl font-semibold text-gray-800 dark:text-white lg:text-3xl lg:w-96">
                {item?.title}
              </h1>

              <p className="max-w-lg mt-6 dark:text-gray-400 ">
                <strong>About:</strong> {item?.descriptions}
              </p>

              <h3 className="mt-6 text-lg font-medium text-blue-500">
                <strong>Name:</strong>
                {item?.name}
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                <strong>Mark:</strong> {item?.marks}
              </p>
              <p className="text-gray-600 dark:text-gray-300">
                <strong>Date:</strong> {item?.date}
              </p>
              <p className="text-gray-600 dark:text-gray-300">
                <strong>difficulty Level:</strong> {item?.difficultyLevel}
              </p>

              <div className="flex items-center justify-between mt-12 lg:justify-start">
                <button
                  className="btn mt-7 btn-sm  btn-outline btn-success"
                  onClick={() => setShowModal(true)}
                >
                  Take Assignment
                </button>
                {showModal && (
                  <div className="fixed inset-0 z-50 overflow-y-auto">
                    <div className="flex items-center justify-center min-h-screen px-4 pt-4 pb-20 text-center sm:block sm:p-0">
                      <div
                        className="fixed inset-0 transition-opacity bg-gray-500 bg-opacity-75"
                        aria-hidden="true"
                      ></div>
                      <span
                        className="hidden sm:inline-block sm:align-middle sm:h-screen"
                        aria-hidden="true"
                      >
                        &#8203;
                      </span>
                      <div className="relative inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full">
                        <div className="px-4 pt-5 pb-4 bg-white sm:p-6 sm:pb-4">
                          <h3 className="text-lg font-medium leading-6 text-gray-900">
                            Submit Your Assignment: 
                          </h3>
                          

                          <form onSubmit={handleSubmitBtn} className="mt-4">
                          <label className="block mt-3" htmlFor="Pdf/Link">
                              <input
                                type="text"
                                name="pdf"
                                id="pdf"
                                placeholder="Link/Pdf........"
                                className="block w-full px-4 py-3 text-sm text-gray-700 bg-white border border-gray-200 rounded-md focus:border-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-40 dark:border-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:focus:border-blue-300"
                              required
                              />
                            </label>
                            <label className="block mt-3" htmlFor="feedback">
                              <textarea
                                type="text"
                                name="feedback"
                                id="feedback"
                                placeholder="feedback........"
                                className="block w-full px-4 py-3 text-sm text-gray-700 bg-white border border-gray-200 rounded-md focus:border-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-40 dark:border-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:focus:border-blue-300"
                              required
                              />
                            </label>

                            <button
                              type="button"
                              className="mt-2 flex items-center rounded py-1.5 px-2 text-sm text-blue-600 transition-colors duration-300 hover:text-blue-400 focus:outline-none dark:text-blue-400 dark:hover:text-blue-500"
                            >
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="w-4 h-4"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                                strokeWidth="2"
                              >
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                                />
                              </svg>

                              <span className="mx-2">Add another</span>
                            </button>
                            <div className="px-4 py-3 bg-gray-50 sm:px-6 sm:flex sm:flex-row-reverse">
                          <button
                            type="submit"
                            name="submit"
                            
                            className="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-blue-600 text-base font-medium text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 sm:ml-3 sm:w-auto sm:text-sm"
                          >
                            Submit
                          </button>
                          <button
                            type="button"
                            
                            onClick={() => setShowModal(false)}
                            className="mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm"
                          >
                            Cancel
                          </button>
                        </div>
                          </form>
                        </div>
                        
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Details;
