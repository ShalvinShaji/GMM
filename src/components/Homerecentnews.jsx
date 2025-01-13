import React, { useState } from "react";
import Sectionhead from "../components/Sectionhead";
import "../css/Homerecentnews.css";

const RecentNewsViewer = ({ recentNews }) => {
  const [showFullTextMap, setShowFullTextMap] = useState(
    recentNews.reduce((acc, news) => ({ ...acc, [news.id]: false }), {})
  );

  const toggleFullText = (newsId) => {
    setShowFullTextMap((prevMap) => ({
      ...prevMap,
      [newsId]: !prevMap[newsId],
    }));
  };

  function homerecentnewsSectionData() {
    return (
      <div className="row g-2">
        {recentNews.map((news) => (
          <div key={news.id} className="col-xl-4 col-md-6  p-3">
            <div
              className={`post-box p-3 ${
                showFullTextMap[news.id] ? "redmore-expanded" : ""
              } ${!showFullTextMap[news.id] ? "redmore-collapsed" : ""}`}
            >
              <div className="post-img d-flex justify-content-center align-items-start">
                <img src={news.image} alt="news-img" className="img-fluid" />
              </div>
              <div className="post-title mt-2" style={{ textAlign: "start" }}>
                <p className="">{news.title}</p>
              </div>
              <div className="m-0 post-desc">
                <p>{news.shortDesc}</p>
              </div>
              {/* <div className="read-more-post-date d-flex justify-content-between align-items-center ">
                <div className="news-details">
                  <p className="post-date text-start m-0 ">{news.date}</p>
                </div>
                <button
                  className="post-readmore"
                  onClick={() => toggleFullText(news.id)}
                >
                  {showFullTextMap[news.id] ? "Read Less" : "Read More"}
                </button>
              </div> */}
            </div>
          </div>
        ))}
      </div>
    );
  }

  return (
    <>
      <section className="Recent-News">
        <Sectionhead
          sectionname="Recent News"
          sectiondescription="Our Recent "
          sectiondescriptionbold="News"
        />
        <div className="container">{homerecentnewsSectionData()}</div>
      </section>
    </>
  );
};

export default RecentNewsViewer;
