import React, { useState } from "react";
import HeroProp from "../components/HeroProp";
import { aboutus_image } from "../assets";
import PagesProp from "../components/PagesProp";

import { FaChevronCircleDown } from "react-icons/fa";
import { useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
  Community,
  IdeaValidation,
  Mentorship,
} from "../components/ServicesDetails";
import { ProductService } from "../components/ServicesDetails";
import { BusinessModel } from "../components/ServicesDetails";
import { BrandIdentity } from "../components/ServicesDetails";
import { ProductDesign } from "../components/ServicesDetails";
import { ProductDev } from "../components/ServicesDetails";
import { Legal } from "../components/ServicesDetails";
import { Pitch } from "../components/ServicesDetails";

const SolutionLab = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  const [activeItem, setActiveItem] = useState(null);

  const toggleItem = (id) => {
    setActiveItem(activeItem === id ? null : id);
  };

  return (
    <div>
      <HeroProp
        image={aboutus_image}
        title="Solution Lab"
        description="Protect What Matters: Your Data, Systems, and Reputation"
      />

      {/* <PagesProp
        intro1="Imagine you wake up and realize your business has been attacked by cyber criminals - you lose your funds, data, resources, and business or personal information to hackers.

        In an era of rising cyber threats, one data breach can cost you everything — from customer trust to business continuity. At NETICOX HUB LTD, we provide comprehensive cybersecurity solutions designed to safeguard your organization against digital attacks, internal threats, and system vulnerabilities."
        intro2="Whether you're a growing business, a nonprofit handling sensitive information, or an individual managing critical data, we help you stay safe, compliant, and prepared."
        services="Our Cybersecurity Services"
      /> */}

      {/* solution Items */}
      <div className=" px-6 md:px-20 space-y-15 gap-10 mt-10">
        {/* idea validation */}
        <div className="space-y-4 grid grid-cols-1 md:grid-cols-2 gap-10">
          <div>
            <strong className="text-2xl text-green-500">
              Idea Validation & Market Research
            </strong>
            <p>
              Every business starts with an idea but not every idea is ready
              for the market. Through our structured validation process, we
              analyze your concepts against real customer needs, industry
              trends, and competitive landscapes. We assess factors like market
              demand, scalability, feasibility, and potential profitability to
              ensure you invest in ideas that truly have the power to succeed.
            </p>
          </div>
          <div className="space-y-4">
            {IdeaValidation.map((item) => (
              <div
                key={`idea-${item.id}`}
                className="bg-white shadow-md rounded-lg"
              >
                {/* question */}
                {/* added prefix to the id to make ids unique instead of opening same id at the same time for different categories */}
                <button
                  className="w-full flex justify-between items-center px-6 py-4 text-left font-medium text-gray-800"
                  onClick={() => toggleItem(`idea-${item.id}`)}
                >
                  {item.title}
                  <motion.span
                    animate={{
                      rotate: activeItem === `idea-${item.id}` ? 180 : 0,
                    }}
                    transition={{ duration: 0.3 }}
                  >
                    <FaChevronCircleDown />
                  </motion.span>
                </button>

                {/* answer */}

                <AnimatePresence>
                  {activeItem === `idea-${item.id}` && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.4 }}
                      className="px-6 pb-4 text-gray-600"
                    >
                      {item.content}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>
        </div>

        {/* Product & Service Design – Transforming Ideas Into Tangible Solutions */}
        <div className="space-y-4 grid grid-cols-1 md:grid-cols-2 gap-10">
          <div>
            <strong className="text-2xl text-green-500">
              Product & Service Design – Transforming Ideas Into Tangible
              Solutions
            </strong>
            <p>
              A great idea without design is like a seed without soil — it might
              have potential, but it can’t grow. Our Product & Service Design
              service takes your validated idea and shapes it into something
              your customers can actually see, use, and love. Whether it’s a
              tech product, a physical product, or a service, we help you create
              a blueprint that’s ready for development and market launch.
            </p>
          </div>
          <div className="space-y-5">
            {ProductService.map((serv) => (
              <div key={serv.id} className="bg-white shadow-md rounded-lg">
                {/* question */}
                <button
                  className="w-full flex justify-between items-center px-6 py-4 text-left font-medium text-gray-800"
                  onClick={() => toggleItem(serv.id)}
                >
                  {serv.title}
                  <motion.span
                    animate={{ rotate: activeItem === serv.id ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <FaChevronCircleDown />
                  </motion.span>
                </button>

                {/* answer */}

                <AnimatePresence>
                  {activeItem === serv.id && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.4 }}
                      className="px-6 pb-4 text-gray-600"
                    >
                      {serv.content}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>
        </div>

        {/* Business Model Design*/}
        <div className=" grid grid-cols-1 md:grid-cols-2 gap-10">
          <div>
            <strong className="text-2xl text-green-500">
              Business Model Design
            </strong>
            <p>
              Having a great idea is only half the battle. The real challenge is
              figuring out how your idea will make money sustainably. Our
              Business Model Design service helps founders transform their
              concept into a clear, actionable, and profitable business plan,
              ensuring every decision you make drives growth and impact.
            </p>
          </div>

          <div className="space-y-4">
            {BusinessModel.map((model) => (
              <div
                key={`model-${model.id}`}
                className="bg-white shadow-md rounded-lg"
              >
                {/* question */}
                <button
                  className="w-full flex justify-between items-center px-6 py-4 text-left font-medium text-gray-800"
                  onClick={() => toggleItem(`model-${model.id}`)}
                >
                  {model.title}
                  <motion.span
                    animate={{
                      rotate: activeItem === `model-${model.id}` ? 180 : 0,
                    }}
                    transition={{ duration: 0.3 }}
                  >
                    <FaChevronCircleDown />
                  </motion.span>
                </button>

                {/* answer */}

                <AnimatePresence>
                  {activeItem === `model-${model.id}` && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.4 }}
                      className="px-6 pb-4 text-gray-600"
                    >
                      {model.content}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>
        </div>

        {/* Brand Identity*/}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          <div className="space-y-4">
            <strong className="text-2xl text-green-500">Brand Identity</strong>
            <p>
              Having a great idea is only half the battle. The real challenge is
              figuring out how your idea will make money sustainably. Our
              Business Model Design service helps founders transform their
              concept into a clear, actionable, and profitable business plan,
              ensuring every decision you make drives growth and impact.
            </p>
          </div>

          <div className="space-y-4">
            {BrandIdentity.map((brand) => (
              <div
                key={`brand-${brand.id}`}
                className="bg-white shadow-md rounded-lg"
              >
                {/* question */}
                <button
                  className="w-full flex justify-between items-center px-6 py-4 text-left font-medium text-gray-800"
                  onClick={() => toggleItem(`brand-${brand.id}`)}
                >
                  {brand.title}
                  <motion.span
                    animate={{
                      rotate: activeItem === `brand-${brand.id}` ? 180 : 0,
                    }}
                    transition={{ duration: 0.3 }}
                  >
                    <FaChevronCircleDown />
                  </motion.span>
                </button>

                {/* answer */}

                <AnimatePresence>
                  {activeItem === `brand-${brand.id}` && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.4 }}
                      className="px-6 pb-4 text-gray-600"
                    >
                      {brand.content}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>
        </div>

        {/* Product Design*/}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          <div className="space-y-4">
            <strong className="text-2xl text-green-500">Product Design</strong>
            <p>
              Having a great idea is only half the battle. The real challenge is
              figuring out how your idea will make money sustainably. Our
              Business Model Design service helps founders transform their
              concept into a clear, actionable, and profitable business plan,
              ensuring every decision you make drives growth and impact.
            </p>
          </div>

          <div className="space-y-4">
            {ProductDesign.map((design) => (
              <div
                key={`design-${design.id}`}
                className="bg-white shadow-md rounded-lg"
              >
                {/* question */}
                <button
                  className="w-full flex justify-between items-center px-6 py-4 text-left font-medium text-gray-800"
                  onClick={() => toggleItem(`design-${design.id}`)}
                >
                  {design.title}
                  <motion.span
                    animate={{
                      rotate: activeItem === `design-${design.id}` ? 180 : 0,
                    }}
                    transition={{ duration: 0.3 }}
                  >
                    <FaChevronCircleDown />
                  </motion.span>
                </button>

                {/* answer */}

                <AnimatePresence>
                  {activeItem === `design-${design.id}` && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.4 }}
                      className="px-6 pb-4 text-gray-600"
                    >
                      {design.content}
                      <div>
                        <strong>Outcome: </strong>
                        {design.outcome}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>
        </div>

        {/* Product Development */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          <div className="space-y-4">
            <strong className="text-2xl text-green-500">
              Product Development
            </strong>
            <p>
              A great product design is only the beginning. Product Development
              is where ideas, concepts, and designs become a functional,
              market-ready solution. We guide founders through every technical
              step, ensuring the product is built efficiently, reliably, and
              with the users in mind.
            </p>
          </div>

          <div className="space-y-4">
            {ProductDev.map((dev) => (
              <div
                key={`dev-${dev.id}`}
                className="bg-white shadow-md rounded-lg"
              >
                {/* question */}
                <button
                  className="w-full flex justify-between items-center px-6 py-4 text-left font-medium text-gray-800"
                  onClick={() => toggleItem(`dev-${dev.id}`)}
                >
                  {dev.title}
                  <motion.span
                    animate={{
                      rotate: activeItem === `dev-${dev.id}` ? 180 : 0,
                    }}
                    transition={{ duration: 0.3 }}
                  >
                    <FaChevronCircleDown />
                  </motion.span>
                </button>

                {/* answer */}

                <AnimatePresence>
                  {activeItem === `dev-${dev.id}` && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.4 }}
                      className="px-6 pb-4 text-gray-600"
                    >
                      {dev.content}
                      <div>
                        <strong>Outcome: </strong>
                        {dev.outcome}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>
        </div>

        {/* Legal & Compliance Guidance  */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          <div className="space-y-4">
            <strong className="text-2xl text-green-500">
              Legal & Compliance Guidance
            </strong>
            <p>
              Bringing your idea to life is exciting, but one wrong legal move
              can cost you time, money, and even ownership of your vision. We
              provide end-to-end legal and compliance guidance for startups and
              founders, ensuring you launch and grow on a strong, protected
              foundation.
            </p>
          </div>

          <div className="space-y-4">
            {Legal.map((lega) => (
              <div
                key={`lega-${lega.id}`}
                className="bg-white shadow-md rounded-lg"
              >
                {/* question */}
                <button
                  className="w-full flex justify-between items-center px-6 py-4 text-left font-medium text-gray-800"
                  onClick={() => toggleItem(`lega-${lega.id}`)}
                >
                  {lega.title}
                  <motion.span
                    animate={{
                      rotate: activeItem === `lega-${lega.id}` ? 180 : 0,
                    }}
                    transition={{ duration: 0.3 }}
                  >
                    <FaChevronCircleDown />
                  </motion.span>
                </button>

                {/* answer */}

                <AnimatePresence>
                  {activeItem === `lega-${lega.id}` && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.4 }}
                      className="px-6 pb-4 text-gray-600"
                    >
                      {lega.content}
                      <div>
                        <strong>Outcome: </strong>
                        {lega.outcome}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>
        </div>

        {/* Pitch & Investor Readiness  */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          <div className="space-y-4">
            <strong className="text-2xl text-green-500">
              Pitch & Investor Readiness
            </strong>
            <p>
              You may have a brilliant idea and even a working product, but
              without the right pitch, investors won’t pay attention. This is
              where comes in by helping founders like you to transform their
              vision into a compelling story, backed by solid numbers, and
              present it with confidence to attract the funding they need.
              Whether you’re preparing for pre-seed or seed investment, we make
              sure your startup looks, sounds, and performs investor-ready.
            </p>
          </div>
          <div className="space-y-4">
            {Pitch.map((pitch) => (
              <div
                key={`pitch-${pitch.id}`}
                className="bg-white shadow-md rounded-lg"
              >
                {/* question */}
                <button
                  className="w-full flex justify-between items-center px-6 py-4 text-left font-medium text-gray-800"
                  onClick={() => toggleItem(`pitch-${pitch.id}`)}
                >
                  {pitch.title}
                  <motion.span
                    animate={{
                      rotate: activeItem === `pitch-${pitch.id}` ? 180 : 0,
                    }}
                    transition={{ duration: 0.3 }}
                  >
                    <FaChevronCircleDown />
                  </motion.span>
                </button>

                {/* answer */}

                <AnimatePresence>
                  {activeItem === `pitch-${pitch.id}` && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.4 }}
                      className="px-6 pb-4 text-gray-600"
                    >
                      {pitch.content}
                      <div>
                        <strong>Outcome: </strong>
                        {pitch.outcome}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>
        </div>

        {/* Mentorship & Advisory  */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          <div className="space-y-4">
            <strong className="text-2xl text-green-500">
              Mentorship & Advisory
            </strong>
            <p>
              No founder succeeds alone. The fastest way to grow is to learn
              directly from those who’ve walked the path before you. Our
              Mentorship & Advisory program connects you with industry leaders,
              experienced entrepreneurs, and business coaches who provide
              practical guidance, accountability, and insight at every stage of
              your journey.
            </p>
          </div>
          <div className="space-y-4">
            <p className="text-xl text-green-500 font-semibold">
              What you will get
            </p>
            {Mentorship.map((mentor) => (
              <div
                key={`mentor-${mentor.id}`}
                className="bg-white shadow-md rounded-lg"
              >
                {/* question */}
                <button
                  className="w-full flex justify-between items-center px-6 py-4 text-left font-medium text-gray-800"
                  onClick={() => toggleItem(`mentor-${mentor.id}`)}
                >
                  {mentor.title}
                  <motion.span
                    animate={{
                      rotate: activeItem === `mentor-${mentor.id}` ? 180 : 0,
                    }}
                    transition={{ duration: 0.3 }}
                  >
                    <FaChevronCircleDown />
                  </motion.span>
                </button>

                {/* answer */}

                <AnimatePresence>
                  {activeItem === `mentor-${mentor.id}` && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.4 }}
                      className="px-6 pb-4 text-gray-600"
                    >
                      {mentor.content}
                      {/* <div>{pitch.outcome}</div> */}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>
        </div>

        {/* Community & Networking Access  */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mb-10">
          <div className="space-y-4">
            <strong className="text-2xl text-green-500">
              Community & Networking Access
            </strong>
            <p>
              A strong network can open doors money can’t. Our founder community
              gives you direct access to collaboration opportunities,
              partnerships, and early adopters who will help shape and scale
              your startup.
            </p>
          </div>
          <div className="space-y-4">
            <p className="text-xl text-green-500 font-semibold">
              What you will get
            </p>
            {Community.map((community) => (
              <div
                key={`community-${community.id}`}
                className="bg-white shadow-md rounded-lg"
              >
                {/* question */}
                <button
                  className="w-full flex justify-between items-center px-6 py-4 text-left font-medium text-gray-800"
                  onClick={() => toggleItem(`community-${community.id}`)}
                >
                  {community.title}
                  <motion.span
                    animate={{
                      rotate:
                        activeItem === `community-${community.id}` ? 180 : 0,
                    }}
                    transition={{ duration: 0.3 }}
                  >
                    <FaChevronCircleDown />
                  </motion.span>
                </button>

                {/* answer */}

                <AnimatePresence>
                  {activeItem === `community-${community.id}` && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.4 }}
                      className="px-6 pb-4 text-gray-600"
                    >
                      {community.content}
                      {/* <div>{pitch.outcome}</div> */}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SolutionLab;
