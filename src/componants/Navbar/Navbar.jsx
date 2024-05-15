import { useContext, useState } from 'react';
import logo from "../../assets/cap-removebg-preview.png"
import { Link, NavLink } from 'react-router-dom';
import { AuthContext } from '../Provider/AuthProvider';
import avater from "../../assets/avater-removebg-preview.png"
import "./Style.css"
import { Tooltip } from 'react-tooltip';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { logOut, user } = useContext(AuthContext);

  const handleSignOut = () => {
    logOut().then().catch();
  };

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="shadow-md  dark:bg-gray-800">
      <div className="lg:ml-16 lg:mr-6 py-1 mx-auto">
        <div className="lg:flex lg:items-center">
          <div className="flex items-center justify-between">
          <div className='flex items-center '>
            <img className="lg:w-20 h-12 w-12 lg:h-16" src={logo} alt="" />
            
            <h2 className='lg:text-2xl font-bold'>QEDUCATO</h2>
             </div>

            {/* Mobile menu button */}
            <div className="flex lg:hidden">
              <button onClick={toggleMenu} type="button" className="text-gray-500 dark:text-gray-200 hover:text-gray-600 dark:hover:text-gray-400 focus:outline-none focus:text-gray-600 dark:focus:text-gray-400" aria-label="toggle menu">
                {!isOpen ? (
                  <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4 8h16M4 16h16" />
                  </svg>
                ) : (
                  <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                  </svg>
                )}
              </button>
            </div>
          </div>

          <div className={`lg:flex lg:gap-[430px]  lg:items-center ${isOpen ? 'block' : 'hidden'}`}>
            <div  className="flex lg:ml-3 flex-col text-gray-600 capitalize dark:text-gray-300 lg:flex  lg:px-16 gap-2 lg:-mx-8 lg:flex-row lg:items-center">
               
               {
                user?  <><Link to={"/"}  className="mt-2 transition-colors duration-300 underline lg:mt-0 lg:mx-4 hover:text-gray-900 dark:hover:text-gray-200"><strong>Home</strong></Link>
                <Link to={"/AllAssignment"} className="mt-2 transition-colors duration-300 underline  lg:mt-0 lg:mx-4 hover:text-gray-900 dark:hover:text-gray-200"><strong>Assignments</strong></Link>
                <Link to={"/createA"} className="mt-2 transition-colors duration-300 underline  lg:mt-0 lg:mx-4 hover:text-gray-900 dark:hover:text-gray-200"><strong>Create..Assignment</strong></Link>
                <Link to={"/PendingAssignment"} className="mt-2 transition-colors duration-300 underline  lg:mt-0 lg:mx-4 hover:text-gray-900 dark:hover:text-gray-200"> <strong>Pending..Assignments</strong></Link>
                <Link to={"/register"}  className="mt-2 transition-colors duration-300 underline  lg:mt-0 lg:mx-4 hover:text-gray-900 dark:hover:text-gray-200"><strong>Register</strong></Link></>
                :
                <><Link to={"/"}  className="mt-2 transition-colors duration-300 underline  lg:mt-0 lg:mx-4 hover:text-gray-900 dark:hover:text-gray-200"><strong>Home</strong></Link>
                <Link to={"/AllAssignment"} className="mt-2 transition-colors duration-300 underline  lg:mt-0 lg:mx-4 hover:text-gray-900 dark:hover:text-gray-200"><strong>Assignments</strong></Link>
                <Link to={"/register"}  className="mt-2 transition-colors duration-300 underline  lg:mt-0 lg:mx-4 hover:text-gray-900 dark:hover:text-gray-200"><strong>Register</strong></Link></>
                
               }
              
               
             

              <div className="relative mt-4 lg:mt-0 lg:mx-4">
                <span className="absolute inset-y-0 left-0 flex items-center pl-3">
                  <svg className="w-4 h-4 text-gray-600 dark:text-gray-300" viewBox="0 0 24 24" fill="none">
                    <path d="M21 21L15 15M17 10C17 13.866 13.866 17 10 17C6.13401 17 3 13.866 3 10C3 6.13401 6.13401 3 10 3C13.866 3 17 6.13401 17 10Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
                  </svg>
                </span>

                <input type="text" className="w-full rounded-2xl py-1 pl-10 pr-4 text-gray-700 placeholder-gray-600  border-b border border-gray-600 dark:placeholder-gray-300 dark:focus:border-gray-300 lg:w-56 lg:border-transparent dark:bg-gray-800 dark:text-gray-300 focus:outline-none focus:border-gray-600" placeholder="Search" />
              </div>
            </div>
            

            <div className="flex justify-center mt-6 lg:flex lg:mt-0 lg:-mx-2">
            <input type="checkbox" value="synthwave" className="toggle mt-4  theme-controller"/>
            <div className="dropdown dropdown-end">
      <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
        <div className="w-10 rounded-full">
          {
            user? <img data-tooltip-id="my-tooltip"  data-tooltip-content={user?.displayName} alt="Tailwind CSS Navbar component" src={user?.photoURL} />
            :
            <img alt=" w-20 h-16 rounded-full ring ring-gray-300 dark:ring-gray-600" src={avater} />
          }
        </div>
        <Tooltip id="my-tooltip" />
      </div>
      <ul tabIndex={0} className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52">
        <button className='btn btn-xs font-semibold text-md lg:w-36 btn-outline btn-success'> <NavLink to={"/MyAssignment"}>my attempted</NavLink></button>
        <button  onClick={handleSignOut} className='btn btn-xs font-semibold text-md lg:w-36  btn-outline mt-2 btn-error'><NavLink>Logout</NavLink></button>
      </ul>
    </div>
    <NavLink to={"/logIn"}><button className="btn  btn-error btn-sm lg:w-24 mt-2 btn-outline w-16">Login</button></NavLink>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
