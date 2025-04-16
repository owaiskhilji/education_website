import React,{useEffect} from "react";

import AOS from "aos";
import "aos/dist/aos.css";




const Workingsteps = [
  {
    title: "Basic Qaida",
    description:
      "We will carefully plan the project, including all necessary details, resources, and timeline. This includes understanding your needs, budget, and technical requirements.",
  },
  {
    title: "Tajweed",
    description:
      "We will create a visually appealing and user-friendly design for your website, and then develop the website using the technologies you've specified. We will also ensure that the website is responsive and mobile-friendly.",
  },
  {
    title: "Tafseer",
    description:
      "We will thoroughly test your website to ensure that it meets all your expectations and that it is accessible to a wide range of users. We will also optimize your website for search engines and improve its loading speed.",
  },
  {
    title: "Faizane Namaz",
    description:
      "Once your website is live, we will monitor it for any issues or bugs, and make necessary adjustments to ensure that it continues to meet your needs and is accessible to a wide range of users.",
  },
];

const Courses = () => {
  
    useEffect(() => {
      AOS.init({ duration: 3000,once:true });
    }, []);
  
  return (
    <div className="w-full px-4 md:pt-20 md:pb-16">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-2">
        <div className="flex flex-col gap-4 px-8">
          <h3 className="text-xl sm:text-3xl md:text-4xl lg:text-4xl font-bold tracking-light text-gray-600 capitalize font-serif">
          Our Popular Courses
          </h3>
          <h2 className="text-md sm:text-2xl md:text-3xl font-semibold text-gray-600 tracking-tighter font-serif">
            
          </h2>
        </div>
        <div className="flex flex-col gap-4 px-8">
          <p className="text-lg tracking-normal text-gray-500">
          Learn the most in-demand Islamic courses including <span className="text-hovertextcolor">Basic Qaida</span> , <span className="text-hovertextcolor">Tajweed</span>, and<span className="text-hovertextcolor"> Tafseer</span>, carefully designed to guide learners of all levels.
          <span className="text-md text-hovertextcolor underline cursor-pointer"> see all</span>
          </p>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 w-full px-8  py-5">
        {Workingsteps.map((step) => (
          <div
          data-aos="fade-up"
            key={step.title}
            className="p-4 bg-white border-2 border-hovertextcolor shadow-sm  rounded-lg text-center z-0"
          >
            <div className="flex items-center justify-center flex-col gap-4">
              <div className=" flex flex-col gap-2">
                <h4 className="text-2xl font-semibold text-hovertextcolor">{step.title}</h4>
                <p className="text-md text-gray-700">{step.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
   
    </div>
  );
};

export default Courses;