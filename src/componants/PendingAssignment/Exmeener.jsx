import axios from "axios";
import { useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import { useParams } from "react-router-dom";
import Swal from "sweetalert2";


const Exmeener = () => {
    const [items, setItems]= useState([])
    const {id}= useParams()
    
    
   useEffect(()=>{
    axios.get("http://localhost:5000/submittedAssignment", {withCredentials: true})
    .then(response => {
        setItems(response.data);
    })
    .then(error =>{
        console.log(error);
    })
   },[])

const item = items.find(item=>item._id ===id)
console.log(item);


const handleSubmitBtn = (e) => {
    e.preventDefault();
    const form = e.target;
    const appreciate =form.appreciate.value;
    const obtained = form.obtained.value;
    const status = 'confirmed'
    const examerFeedback = {
        appreciate,
        obtained,
        status
    };
    console.log(examerFeedback);
    

    const url = `http://localhost:5000/submittedAssignment/${id}` ;
    axios.post(url,  examerFeedback, {withCredentials: true})
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
        Swal.fire("Error", "Sorry you don't give this mark", "error");
    });
  };

  



    return (
        <section className="lg:max-w-4xl mt-3 lg:mt-40 shadow-xl p-6 mx-auto bg-white rounded-md border border-gray-300 dark:bg-gray-800">
            <Helmet><title>Exameener</title></Helmet>
        <h2 className="text-lg font-semibold text-gray-700  dark:text-white"><strong>Give Mark:</strong></h2>
        <h1><strong>Pdf/Doc:</strong><a className="font-semibold underline" href={item?.pdf}>   {item?.pdf}</a></h1>
            <h1><strong>Note:</strong> {item?.feedback}</h1>
        <form onSubmit={handleSubmitBtn}>
            
            <div className=" lg:gap-6 mt-4 sm:grid-cols-2">
                <div>
                    <label className="text-gray-700 dark:text-gray-200" htmlFor="username">Obtained Marks:</label>
                    <input defaultValue={item?.marks} id="obtained" name="obtained" type="text" className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring" />
                </div>
    
                <div>
                    <label className="text-gray-700 dark:text-gray-200" htmlFor="passwordConfirmation">Feedback...</label>
                    <textarea name="appreciate" placeholder="Feedback............" id="appreciate" type="text" className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring" />
                </div>
            </div>
    
            <div className="flex justify-end mt-6">
                <button type="submit" className="px-8 py-2.5 leading-5 text-white transition-colors duration-300 transform bg-gray-700 rounded-md hover:bg-gray-600 focus:outline-none focus:bg-gray-600">submit</button>
            </div>
        </form>
    </section>
    
    );
};

export default Exmeener;