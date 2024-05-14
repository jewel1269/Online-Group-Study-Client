import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { Transition, Dialog, Button } from '@headlessui/react';

const PendingCard = ({ item }) => {
  const {
    title,
    photoURL,
    marks,
    descriptions,
    date,
    name,
    _id,
    pdf
  } = item;

  const [isOpen, setIsOpen] = useState(false);

  const open = () => setIsOpen(true);
  const close = () => setIsOpen(false);

  return (
    <div>
      <div className="animate__animated animate__slideInDown 2s flex flex-col  items-center p-8 transition-colors duration-300 transform border cursor-pointer rounded-xl hover:border-transparent group hover:bg-blue-600 dark:border-gray-700 dark:hover:border-transparent">
        <img
          className="object-cover w-auto h-32 rounded-md ring-4 ring-gray-300"
          src={photoURL}
          alt=""
        />

        <h1 className="mt-4 text-2xl font-semibold text-gray-700 capitalize dark:text-white group-hover:text-white">
          {title}
        </h1>
        <p>
          Date: <strong>{date}</strong>
        </p>
        <p>
          Name: <strong>{name}</strong>
        </p>
        <p>
          Marks: <strong>{marks}</strong>
        </p>
        <p className="mt-2 text-gray-500 capitalize dark:text-gray-300 group-hover:text-gray-300">
          {descriptions}
        </p>

        <div className="flex gap-4 items-center">
         <div>
         <Button
            onClick={open}
            className="btn mt-7 btn-sm w-full"
          >
            Preview
          </Button>

          <Transition appear show={isOpen} as={React.Fragment}>
            <Dialog as="div" className="fixed inset-0 z-10 " onClose={close}>
              <Dialog.Panel className="flex min-h-screen items-center justify-center">
                <Transition.Child
                  enter="ease-out duration-300"
                  enterFrom="opacity-0 transform scale-95"
                  enterTo="opacity-100 transform scale-100"
                  leave="ease-in duration-200"
                  leaveFrom="opacity-100 transform scale-100"
                  leaveTo="opacity-0 transform scale-95"
                >
                  <div className="absolute inset-0 bg-gray-500 opacity-75"></div>
                </Transition.Child>
                <Transition.Child
                  enter="ease-out duration-300"
                  enterFrom="opacity-0 transform scale-95"
                  enterTo="opacity-100 transform scale-100"
                  leave="ease-in duration-200"
                  leaveFrom="opacity-100 transform scale-100"
                  leaveTo="opacity-0 transform scale-95"
                >
                  <div className="relative z-10 w-full h-full max-w-md rounded-xl bg-white/5 p-6 backdrop-blur-2xl">
                    <Dialog.Title className="text-base/7 font-medium text-white">
                     This is preview: 
                    </Dialog.Title>
                   <iframe className="lg:h-[700px] lg:w-[650px]"src={pdf}>{pdf}</iframe>
                    <div className="mt-4">
                      <Button
                        onClick={close}
                        className="inline-flex items-center gap-2 rounded-md bg-gray-700 py-1.5 px-3 text-sm/6 font-semibold text-white shadow-inner shadow-white/10 focus:outline-none hover:bg-gray-600 focus:outline-1 focus:outline-white"
                      >
                        Got it, thanks!
                      </Button>
                    </div>
                  </div>
                </Transition.Child>
              </Dialog.Panel>
            </Dialog>
          </Transition>
         </div>

          <div>
            <NavLink to={`/exmeener/${_id}`}>
              <button className="btn mt-7 btn-sm w-full">
                Give Mark
              </button>
            </NavLink>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PendingCard;
