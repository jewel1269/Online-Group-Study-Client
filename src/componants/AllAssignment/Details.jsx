import axios from "axios";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const Details = () => {
    const [details, setDetails] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const { id } = useParams();

    useEffect(() => {
        axios.get("http://localhost:5000/assignments")
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
        return <span className="loading loading-ring lg:ml-[50%] lg:mt-[20%] bg-red-600 loading-lg"></span>;
    }

    if (error) {
        return <div>Error: {error.message}</div>;
    }

    const item = details.find(item => item._id === id);

    return (
        <div className="hero min-h-screen"  style={{
            backgroundImage:
                "url(https://img.freepik.com/premium-vector/white-gray-wave-abstract-background-soft-design-graphic-work_41084-469.jpg?size=626&ext=jpg&ga=GA1.1.1369675164.1715212800&semt=ais)",
        }}> 
         
              <section className=" shadow-2xl shadow-gray-400 dark:bg-gray-900">
      <div className="container px-6 py-10 mx-auto">
        <div className="lg:-mx-6 lg:flex lg:items-center">
          <img className="object-cover object-center lg:w-1/2 lg:mx-6 w-full h-96 rounded-lg lg:h-[36rem]" src={item.photoURL} alt="" />

          <div className="mt-8 lg:w-1/2 lg:px-6 lg:mt-0">

            <h1 className="text-2xl font-semibold text-gray-800 dark:text-white lg:text-3xl lg:w-96">
             {item.title}
            </h1>

            <p className="max-w-lg  mt-6  dark:text-gray-400 ">
             <strong>About:</strong> {item.descriptions}
            </p>

            <h3 className="mt-6 text-lg font-medium text-blue-500"><strong>Name:</strong>{item.name}</h3>
            <p className="text-gray-600 dark:text-gray-300"><strong>Mark:</strong> {item.marks}</p>
            <p className="text-gray-600 dark:text-gray-300"> <strong>Date:</strong> {item.date}</p>
            <p className="text-gray-600 dark:text-gray-300"> <strong>difficulty Level:</strong> {item.difficultyLevel}</p>

            <div className="flex items-center justify-between mt-12 lg:justify-start">
            <button
          className="btn mt-7 btn-sm  btn-outline btn-success"
          onClick={() => document.getElementById("my_modal_3").showModal()}
        >
          Take Assignment
        </button>
        <dialog id="my_modal_3" className="modal">
          <div>
            <div className="flex items-end justify-center  pt-4 text-center sm:block sm:p-0">
              <span
                className="hidden sm:inline-block sm:h-screen sm:align-middle"
                aria-hidden="true"
              >
                &#8203;
              </span>

              <div className="relative inline-block px-4 pt-5 pb-4 overflow-hidden text-left align-bottom transition-all transform bg-white rounded-lg shadow-xl dark:bg-gray-900 sm:my-8 sm:w-full sm:max-w-sm sm:p-6 sm:align-middle">
                <h3
                  className="text-lg font-medium leading-6 text-gray-800 capitalize dark:text-white"
                  id="modal-title"
                >
                  Invite your team
                </h3>
                <p className="mt-2 text-sm text-gray-500 dark:text-gray-400">
                    <span><strong className="textarea-md">Pdf/Doc: </strong></span>
                    <a className="underline" href="https://www.rocketlawyer.com/">https://www.rocketlawyer.com/</a>
                
                </p>

                <form className="mt-4" action="#">
                  <label
                    htmlFor="emails-list"
                    className="text-sm text-gray-700 dark:text-gray-200"
                  >
                   <strong>Marks:</strong>
                  </label>

                  <label className="block mt-3" htmlFor="email">
                    <input
                      type="text"
                      name="mark"
                      id="mark"
                      placeholder="give mark......"
                      defaultValue={item.marks}
                      className="block w-full px-4 py-3 text-sm text-gray-700 bg-white border border-gray-200 rounded-md focus:border-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-40 dark:border-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:focus:border-blue-300"
                    />
                  </label>

                  <label className="block mt-3" htmlFor="email">
                    <textarea
                      type="text"
                      name="feedback"
                      id="feedback"
                      placeholder="feedback........"
                      className="block w-full px-4 py-3 text-sm text-gray-700 bg-white border border-gray-200 rounded-md focus:border-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-40 dark:border-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:focus:border-blue-300"
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

                  <div className="mt-4 sm:flex sm:items-center sm:-mx-2">
                    <form method="dialog">
                      {/* if there is a button in form, it will close the modal */}
                      <button className="btn btn-sm btn-circle btn-outline btn-error btn-ghost absolute right-2 top-2">
                        X
                      </button>
                    </form>

                    <button
                      type="button"
                      className="w-full lg:ml-[23%] px-4 py-2 mt-3 text-sm font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-blue-600 rounded-md sm:mt-0 sm:w-1/2 sm:mx-2 hover:bg-blue-500 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-40"
                    >
                      Submit
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </dialog>
            </div>
          </div>
        </div>
      </div>
    </section>
        </div>
    );
};

export default Details;
