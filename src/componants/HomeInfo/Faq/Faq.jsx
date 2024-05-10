

const Faq = () => {
    return (
        <div>
           <section className="bg-white dark:bg-gray-900">
    <div className="container px-6 py-12 mx-auto">
        <h1 className="text-2xl font-semibold text-center text-gray-800 lg:text-3xl dark:text-white">Have any Questions?</h1>

        <div className="mt-8 xl:mt-16 lg:flex lg:-mx-12">
            <div className="lg:mx-12">
                <h1 className="text-xl font-semibold text-gray-800 dark:text-white">Table of Content</h1>

                <div className="mt-4 space-y-4 lg:mt-8">
                    <a href="#" className="block text-blue-500 dark:text-blue-400 hover:underline">General</a>
                    <a href="#" className="block text-gray-500 dark:text-gray-300 hover:underline">Trust & Safety</a>
                    <a href="#" className="block text-gray-500 dark:text-gray-300 hover:underline">Services</a>
                    <a href="#" className="block text-gray-500 dark:text-gray-300 hover:underline">Billing</a>
                    <a href="#" className="block text-gray-500 dark:text-gray-300 hover:underline">Office Cleaning</a>
                </div>
            </div>

            <div className="flex-1 mt-8 lg:mx-12 lg:mt-0">
                <div>
                    <button className="flex items-center focus:outline-none">
                        <svg className="flex-shrink-0 w-6 h-6 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M20 12H4"></path></svg>

                        <h1 className="mx-4 text-xl text-gray-700 dark:text-white">How i can play for my appoinment ?</h1>
                    </button>

                    <div className="flex mt-8 md:mx-10">
                        <span className="border border-blue-500"></span>

                        <p className="max-w-3xl px-4 text-gray-500 dark:text-gray-300">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni, eum quae. Harum officiis reprehenderit ex quia ducimus minima id provident molestias optio nam vel, quidem iure voluptatem, repellat et ipsa.
                        </p>
                    </div>
                </div>

                <hr className="my-8 border-gray-200 dark:border-gray-700" />

                <div>
                    <button className="flex items-center focus:outline-none">
                        <svg xmlns="http://www.w3.org/2000/svg" className="flex-shrink-0 w-6 h-6 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4v16m8-8H4" />
                        </svg>

                        <h1 className="mx-4 text-xl text-gray-700 dark:text-white">What can i expect at my first consultation ?</h1>
                    </button>
                </div>

                <hr className="my-8 border-gray-200 dark:border-gray-700" />

                <div>
                    <button className="flex items-center focus:outline-none">
                        <svg xmlns="http://www.w3.org/2000/svg" className="flex-shrink-0 w-6 h-6 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4v16m8-8H4" />
                        </svg>

                        <h1 className="mx-4 text-xl text-gray-700 dark:text-white">What are your opening house ?</h1>
                    </button>
                </div>

                <hr className="my-8 border-gray-200 dark:border-gray-700" />

                <div>
                    <button className="flex items-center focus:outline-none">
                        <svg xmlns="http://www.w3.org/2000/svg" className="flex-shrink-0 w-6 h-6 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4v16m8-8H4" />
                        </svg>

                        <h1 className="mx-4 text-xl text-gray-700 dark:text-white">Do i need a referral ?</h1>
                    </button>
                </div>

                <hr className="my-8 border-gray-200 dark:border-gray-700" />

                <div>
                    <button className="flex items-center focus:outline-none">
                        <svg xmlns="http://www.w3.org/2000/svg" className="flex-shrink-0 w-6 h-6 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4v16m8-8H4" />
                        </svg>

                        <h1 className="mx-4 text-xl text-gray-700 dark:text-white">Is the cost of the appoinment covered by private health insurance ?</h1>
                    </button>
                </div>
            </div>
        </div>
    </div>
</section>
 
        </div>
    );
};

export default Faq;