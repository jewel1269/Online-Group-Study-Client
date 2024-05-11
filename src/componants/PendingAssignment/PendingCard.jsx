import { Link, NavLink } from "react-router-dom";

const PendingCard = ({ item }) => {
  
  const { title, photoURL, marks, descriptions, date, difficultyLevel, name, feedback } =
    item;
  return (
    <div>
      <div className="flex flex-col bg-gray-50 items-center p-8 transition-colors duration-300 transform border cursor-pointer rounded-xl hover:border-transparent group hover:bg-blue-600 dark:border-gray-700 dark:hover:border-transparent">
        <img
          className="object-cover w-auto h-32 rounded-md ring-4 ring-gray-300"
          src={photoURL}
          alt=""
        ></img>

        <h1 className="mt-4 text-2xl font-semibold text-gray-700 capitalize dark:text-white group-hover:text-white">
          {title}
        </h1>
        <p>
          Date: <strong>{date}</strong>
        </p>
        <p>
          name: <strong>{name}</strong>
        </p>
        <p>
          Marks: <strong>{marks}</strong>
        </p>
        <p className="mt-2 text-gray-500 capitalize dark:text-gray-300 group-hover:text-gray-300">
          {descriptions}
        </p>

        <button
          className="btn mt-7 btn-sm w-full btn-success"
          onClick={() => document.getElementById("my_modal_3").showModal()}
        >
          Give Mark
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
                <p><strong>Notes:</strong> {feedback}</p>

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
                      defaultValue={marks}
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
  );
};

export default PendingCard;
