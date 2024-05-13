import { Link, NavLink } from "react-router-dom";
import Exmeener from "./Exmeener";

const PendingCard = ({ item }) => {
  const {
    title,
    photoURL,
    marks,
    descriptions,
    date,
    difficultyLevel,
    name,
    feedback,
    _id
  } = item;

  const handleMark = (e) => {
    e.preventDefault();
    const form = e.target;
    const marks = form.marks.value;
    const appriciate = form.appriciate.value;
    const obtained = { marks, appriciate };
    console.log(obtained);
  };
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

        <NavLink to={`/exmeener/${_id}`}><button className="btn mt-7 btn-sm w-full ">
          Give Mark
        </button></NavLink>
      </div>
      
    </div>
  );
};

export default PendingCard;
