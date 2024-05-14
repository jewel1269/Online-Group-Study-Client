import axios from "axios";
import { useContext, useState } from "react";
import Swal from "sweetalert2";


const Card = ({item}) => {
    console.log(item);
    const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);


    const handleDelete = () => {
        Swal.fire({
          title: "Are you sure?",
          text: "You won't be able to revert this!",
          icon: "warning",
          showCancelButton: true,
          confirmButtonColor: "#3085d6",
          cancelButtonColor: "#d33",
          confirmButtonText: "Yes, delete it!"
        }).then((result) => {
          if (result.isConfirmed) {
            const url = `http://localhost:5000/submittedAssignment/${item?._id}`;
            axios.delete(url)
              .then((response) => {
                Swal.fire({
                  title: "Deleted!",
                  text: "Your file has been deleted.",
                  icon: "success"
                });
                setItems(response.data);
                setLoading(false);
              })
              .catch((error) => {
                console.log(error);
                setLoading(false);
              });
          }
        });
      };
    
    return (
        <div className='lg:ml-[10%]'>
            <tbody className="bg-white divide-y  divide-gray-200 dark:divide-gray-700 dark:bg-gray-900">
                            <tr>
                                <td className="px-4  py-4 text-sm font-medium text-gray-700 whitespace-nowrap">
                                    <div className="inline-flex items-center gap-x-3">
                                        <input type="checkbox" className="text-blue-500 border-gray-300 rounded dark:bg-gray-900 dark:ring-offset-gray-900 dark:border-gray-700" />
                                        <div className="flex items-center gap-x-2">
                                            <img className="object-cover w-10 h-10 rounded-full" src={item?.photoURL} alt="" />
                                            <div>
                                                <h2 className="font-medium text-gray-800 dark:text-white">{item?.title}</h2>
                                                
                                            </div>
                                        </div>
                                    </div>
                                </td>
                                <td className="px-12 py-4 text-sm font-medium text-gray-700 whitespace-nowrap">
                                    <div className="inline-flex lg:ml-10 items-center px-3 py-1 rounded-full gap-x-2 bg-emerald-100/60 dark:bg-gray-800">
                                        <span className="h-1.5 w-1.5 rounded-full bg-orange-500"></span>
                                        <h2 className="text-sm font-normal text-orange-400">{item?.status}</h2>
                                    </div>
                                </td>
                                <td className="px-4 lg:px-20 py-4 text-sm text-gray-500 dark:text-gray-300 whitespace-nowrap"><p className='lg:ml-32 font-bold'>{item?.obtained}</p></td>
                                <td className="px-4 lg:px-20 py-4 text-sm text-gray-500 dark:text-gray-300 whitespace-nowrap"><p className='lg:ml-32 font-bold'>{item?.marks}</p></td>
                                <td className="px-4  py-4 text-sm text-gray-500 dark:text-gray-300 whitespace-nowrap"><p className='lg:ml-12'>{item?.appreciate}</p></td>
                               
                                <td className="px-4 py-4 text-sm whitespace-nowrap">
                                    <div className="flex lg:gap-10 lg:ml-10 items-center gap-x-6">
                                        <button onClick={()=>handleDelete()} className="text-gray-500 transition-colors duration-200 dark:hover:text-red-500 dark:text-gray-300 hover:text-red-500 focus:outline-none">
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-5 h-5">
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0" />
                                            </svg>
                                        </button>
                                        <button className="text-gray-500 transition-colors duration-200 dark:hover:text-yellow-500 dark:text-gray-300 hover:text-yellow-500 focus:outline-none">
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-5 h-5">
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10" />
                                            </svg>
                                        </button>
                                    </div>
                                </td>
                            </tr>
                        </tbody>
        </div>
    );
};

export default Card;