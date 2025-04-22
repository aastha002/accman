import React from "react";

const testimonials = [
  {
    text: "Technology Innovation Institute provided me with cutting-edge skills and knowledge that I use every day in my role. The hands-on learning approach prepared me perfectly for real-world challenges.",
    name: "Michael Chen",
    role: "Software Engineer, Technology Innovation Institute",
    image: "https://randomuser.me/api/portraits/men/32.jpg",
  },
  {
    text: "The courses and mentors helped me transition smoothly into my tech role with confidence and clarity.",
    name: "Ava Johnson",
    role: "Full Stack Developer, CodeCraft",
    image: "https://randomuser.me/api/portraits/women/44.jpg",
  },
  {
    text: "Amazing experience! The learning environment and support from mentors made my journey smooth and successful.",
    name: "Sofia Patel",
    role: "Data Scientist, Infosys",
    image: "https://randomuser.me/api/portraits/women/68.jpg",
  },
];

const Card = ({ index }) => {
  const review = testimonials[index];

  return (
    <div className="text-center flex flex-col items-center px-6">
      <p className="text-gray-700 text-lg md:text-xl italic leading-relaxed mb-6 max-w-2xl">
        {review.text}
      </p>

      <div className="flex items-center gap-4">
        <img
          src={review.image}
          alt={review.name}
          className="w-16 h-16 rounded-full object-cover border-2 border-white shadow-md"
        />
        <div className="text-left">
          <h3 className="text-gray-900 font-bold text-lg">{review.name}</h3>
          <p className="text-sm text-teal-600">{review.role}</p>
        </div>
      </div>
    </div>
  );
};

export default Card;
export { testimonials };
