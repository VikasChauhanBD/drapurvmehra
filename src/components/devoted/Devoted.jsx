import React, { useState } from "react";
import "./Devoted.css";
import devotedData from "../../assets/data/devotedData";

function Devoted() {
  const [selectedDevoted, setSelectedDevoted] = useState(1);
  const [expandedId, setExpandedId] = useState(null);

  const handleDevotedChange = (id) => {
    setSelectedDevoted(id);
  };

  const toggleExpanded = (id) => {
    setExpandedId((prev) => (prev === id ? null : id));
  };

  return (
    <div id="learning-and-leading" className="devoted-main-container">
      <h2>A Life Devoted to Learning & Leading</h2>
      <h3>Learning as a mission. Leading as a legacy</h3>

      <div className="devoted-inner-container">
        {/* Devoted Titles + Content */}
        <div className="devoted-list-container">
          {devotedData.map((data) => (
            <div
              key={data.id}
              className={`devoted-item ${
                selectedDevoted === data.id
                  ? "active-devoted-item"
                  : "border-gray-300"
              }`}
              onClick={() => handleDevotedChange(data.id)}
            >
              <div className="devoted-header">
                <h4
                  className={`devoted-title ${
                    selectedDevoted === data.id ? "text-purple" : "text-black"
                  }`}
                >
                  {data.title}
                </h4>
              </div>

              <div className="devoted-preview-content">
                {expandedId === data.id ? (
                  <>
                    <div
                      className="active-devoted-content"
                      dangerouslySetInnerHTML={{ __html: data.content }}
                    />
                    <span
                      className="devoted-read-less"
                      onClick={() => toggleExpanded(data.id)}
                    >
                      Read less
                    </span>
                  </>
                ) : (
                  <>
                    <div
                      className="devoted-subcontent"
                      dangerouslySetInnerHTML={{ __html: data.subContent }}
                    />
                    <span
                      className="devoted-read-more"
                      onClick={() => toggleExpanded(data.id)}
                    >
                      Read more
                    </span>
                  </>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Devoted Image */}
        <div className="devoted-image-container">
          <div className="devoted-image-wrapper">
            <div className="devoted-image-inner">
              {devotedData.map((data) => (
                <img
                  key={data.id}
                  src={data.image}
                  alt={`devoted ${data.id}`}
                  className={`devoted-image ${
                    selectedDevoted === data.id ? "opacity-100" : "opacity-0"
                  }`}
                />
              ))}
            </div>

            {/* Devoted Indicators */}
            <div className="devoted-indicators">
              {devotedData.map((data) => (
                <span
                  key={data.id}
                  className={`devoted-indicator ${
                    selectedDevoted === data.id ? "bg-blue-500" : "bg-white-700"
                  }`}
                  onClick={() => handleDevotedChange(data.id)}
                ></span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Devoted;
