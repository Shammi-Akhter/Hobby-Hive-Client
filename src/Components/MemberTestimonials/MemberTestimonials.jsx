import React from 'react';
import { Bounce } from 'react-awesome-reveal';
import { FaQuoteLeft } from 'react-icons/fa';

const testimonials = [
  {
    id: 1,
    quote: "I joined the book club and now I look forward to every Sunday!",
    name: "Amina",
    hobby: "Book Lover",
    image: "https://i.pravatar.cc/100?img=1"
  },
  {
    id: 2,
    quote: "HobbyHive helped me meet amazing people who share my love for painting.",
    name: "Tanvir",
    hobby: "Artist",
    image: "https://i.pravatar.cc/100?img=2"
  },
  {
    id: 3,
    quote: "I was new in town. The hiking group made me feel at home!",
    name: "Saran",
    hobby: "Hiker",
    image: "https://i.pravatar.cc/100?img=3"
  },
  {
    id: 4,
    quote: "I learned photography techniques from real experts in my group.",
    name: "Rahim",
    hobby: "Photographer",
    image: "https://i.pravatar.cc/100?img=4"
  },
  {
    id: 5,
    quote: "Now I run regularly thanks to the encouragement from my group.",
    name: "Fatima",
    hobby: "Runner",
    image: "https://i.pravatar.cc/100?img=5"
  },
  {
    id: 6,
    quote: "From coding to cooking — HobbyHive has been my happy place!",
    name: "Junaid",
    hobby: "Multitalented",
    image: "https://i.postimg.cc/4d3wmX64/young-bearded-man-with-striped-shirt-273609-5677.avif"
  },
];

const MemberTestimonials = () => {
  return (
    <div className=' '>
        <section className="container mx-auto py-14 px-4 sm:px-6 lg:px-10">
      <Bounce>
        <h2 className="md:text-2xl sm:text-4xl font-bold text-center mb-12 text-yellow-500">
        What Our Members Say
      </h2>
      </Bounce>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
        {testimonials.map((t) => (
          <div
            key={t.id}
            className="testimonial-card p-6 rounded-2xl shadow-md hover:shadow-xl transition duration-300 flex flex-col items-center text-center"
          >
            <FaQuoteLeft className="text-yellow-400 text-2xl mb-3" />
            <p className="text-gray-600 text-balance italic mb-4">"{t.quote}"</p>
            <img
              src={t.image}
              alt={t.name}
              className="w-16 h-16 rounded-full object-cover mb-3 shadow"
            />
            <h4 className="font-bold text-lg text-gray-800">{t.name}</h4>
            <span className="text-sm text-yellow-500 font-medium">{t.hobby}</span>
          </div>
        ))}
      </div>
    </section>
    </div>
  );
};

export default MemberTestimonials;
