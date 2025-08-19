import React from "react";
import { motion } from "framer-motion";
import { FaStar } from "react-icons/fa";
import { Testimonial_1, Testimonial_2, Testimonial_3 } from "../assets";

const reviews = [
  {
    name: "Sarah Johnson",
    role: "CEO, BrightFuture Ltd",
    review:
      "Working with this team was the best decision we made. They took our vision and turned it into something truly spectacular.",
    image: Testimonial_1,
    rating: 5,
  },
  {
    name: "Michael Adeyemi",
    role: "Founder, NaijaStartups",
    review:
      "Professional, creative, and always on time. They didn’t just build a solution they helped us rethink our entire digital strategy.",
    image: Testimonial_2,
    rating: 5,
  },
  {
    name: "Lillian Chibueke",
    role: "Marketing Director, GlowUp Agency",
    review:
      "Their attention to detail is unmatched. Our brand has grown massively thanks to their expertise.",
    image: Testimonial_3,
    rating: 4,
  },
];

const Reviews = () => {
  return (
    <section className="px-6 md:px-20 py-16 bg-gradient-to-r from-[#ecfdf5] via-white to-[#f0fdf4]">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: -40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: false, amount: 0.2 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            What Our <span className="text-green-600">Clients Say</span>
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Here’s what some of our happy clients have to say about working with
            us.
          </p>
        </motion.div>

        {/* Reviews Grid */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {reviews.map((review, index) => (
            <motion.div
              key={index}
              className="bg-white shadow-lg rounded-xl p-6 hover:shadow-xl transition-shadow duration-300"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              viewport={{ once: false, amount: 0.2 }}
            >
              {/* Reviewer Image */}
              <div className="flex items-center mb-4">
                <img
                  src={review.image}
                  alt={review.name}
                  className="w-12 h-12 rounded-full object-cover mr-4"
                />
                <div>
                  <p className="font-semibold text-gray-900">{review.name}</p>
                  <p className="text-sm text-gray-500">{review.role}</p>
                </div>
              </div>

              {/* Review Text */}
              <p className="text-gray-700 mb-4 leading-relaxed">
                “{review.review}”
              </p>

              {/* Rating */}
              <div className="flex text-yellow-500">
                {[...Array(review.rating)].map((_, i) => (
                  <FaStar key={i} />
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Reviews;
