import React from 'react';
import { Bounce, Fade } from 'react-awesome-reveal';

const hobbies = [
  { id: 1, name: "Drawing", image: "https://i.postimg.cc/8chYwyb1/slide-01.jpg", groups: 45 },
  { id: 2, name: "Photography", image: "https://i.postimg.cc/qBnWkRH9/slider-2.webp", groups: 38 },
  { id: 3, name: "Running", image: "https://i.postimg.cc/gjqyNxJX/slide-4.webp", groups: 52 },
  { id: 4, name: "Reading", image: "https://i.postimg.cc/QdMgJxrC/slide-5.webp.jpg", groups: 60 },
];

const PopularHobbies = () => {
  return (
    <div className='bg-base-100 popular-h'>
      <section className="container md:mx-auto  md:py-10 py-10  md:px-4  px-4 lg:px-10 ">
        <Bounce><h2 className="md:text-2xl sm:text-4xl font-bold text-orange-400 text-center mb-10">Popular Hobbies</h2></Bounce>


        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {hobbies.map(hobby => (
            <div
              key={hobby.id}
              className="popular-h-card rounded-xl shadow-md p-6 flex flex-col items-center text-center hover:shadow-lg transition duration-300"
            >
              <img
                src={hobby.image}
                alt={hobby.name}
                className="w-24 h-24 rounded-full object-cover mb-4"
              />
              <h3 className="text-lg font-semibold">{hobby.name}</h3>
              <p className="text-sm text-gray-500">{hobby.groups} active groups</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default PopularHobbies;
