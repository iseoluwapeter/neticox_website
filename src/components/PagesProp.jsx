import React from "react";

const PagesProp = ({
  intro1,
  intro2,
  services,
  icon,
  icon_2,
  icon_3,
  icon_4,
  icon_5,
  icon_6,
  icon_7,
  icon_8,
  icon_9,
  icon_10,
  title,
  title_2,
  title_3,
  title_4,
  title_5,
  title_6,
  title_7,
  title_8,
  title_9,
  title_10,
  content,
  content_2,
  content_3,
  content_4,
  content_5,
  content_6,
  content_7,
  content_8,
  content_9,
  content_10,
}) => {
  const serviceCard = [
    {
      id: 1,
      icon: icon,
      title: title,
      content: content,
    },
    {
      id: 2,
      icon: icon_2,
      title: title_2,
      content: content_2,
    },
    {
      id: 3,
      icon: icon_3,
      title: title_3,
      content: content_3,
    },
    {
      id: 4,
      icon: icon_4,
      title: title_4,
      content: content_4,
    },
    {
      id: 5,
      icon: icon_5,
      title: title_5,
      content: content_5,
    },
    {
      id: 6,
      icon: icon_6,
      title: title_6,
      content: content_6,
    },
    {
      id: 7,
      icon: icon_7,
      title: title_7,
      content: content_7,
    },
    {
      id: 8,
      icon: icon_8,
      title: title_8,
      content: content_8,
    },
    {
      id: 9,
      icon: icon_9,
      title: title_9,
      content: content_9,
    },
    {
      id: 10,
      icon: icon_10,
      title: title_10,
      content: content_10,
    },
  ];
  return (
    <div className="px-10 py-10 space-y-7 lg:px-20">
      <p className="text-justify text-gray-600 leading-relaxed">{intro1}</p>

      <p className="my-5 text-justify text-gray-600 leading-relaxed">
        {intro2}
      </p>

      <p className="text-xl w-60 mt-10 lg:w-full font-semibold  md:text-lg lg:text-3xl">
        {" "}
        {services}
      </p>

      <div className="mt-5 grid grid-cols-1 md:grid-cols-3 gap-7">
        {serviceCard
          .filter(
            (service) => service.icon && service.title && service.content // Only keep items with all values
          )
          .map((service) => (
            <div
              key={service.id}
              className="bg-white shadow-md rounded-lg p-7 border border-green-100 transition-transform duration-300 ease-in-out hover:scale-[1.03]"
            >
              {/* Icon & Title */}
              <div className="flex items-center gap-4 mb-4">
                <service.icon className="text-green-700" size={30} />
                <span className="font-semibold text-green-700 text-lg">
                  {service.title}
                </span>
              </div>

              {/* Content */}
              <p className="text-gray-600 leading-relaxed">{service.content}</p>
            </div>
          ))}
      </div>
    </div>
  );
};

export default PagesProp;
