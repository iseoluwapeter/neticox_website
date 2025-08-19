import React from "react";

const PagesCtaProp = ({
  header,
  title_1,
  title_2,
  title_3,
  title_4,
  title_5,
  content_1,
  content_2,
  content_3,
  content_4,
  content_5,
}) => {
  const CtaDetails = [
    {
      id: 1,
      title: title_1,
      content: content_1,
    },
    {
      id: 2,
      title: title_2,
      content: content_2,
    },
    {
      id: 3,
      title: title_3,
      content: content_3,
    },
    {
      id: 4,
      title: title_4,
      content: content_4,
    },
    {
      id: 5,
      title: title_5,
      content: content_5,
    },
  ];
  return (
    <div className="">
      <p className="text-xl md:text-2xl font-semibold">{header}</p>

      <div className="mt-5 space-y-3">
        {CtaDetails.map((details) => (
          <div key={details.id} className="flex flex-col  border-b-gray-500 ">
            <div className="flex gap-3">
              ✅{" "}
              <div>
                <b>{details.title}</b>
                <p>{details.content}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PagesCtaProp;
