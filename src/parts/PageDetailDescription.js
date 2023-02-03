import { features } from "process";
import React from "react";

import ReactHtmlParser from "react-html-parser";
export default function PageDetailDescription({ data }) {
  return (
    <main>
      <h4>About the Place</h4>
      {ReactHtmlParser(data.description)}
      <div className="row" style={{ marginTop: 30 }}>
        {data.features.length === 0
          ? "There is no feature"
          : data.features.map((features, index) => {
              return (
                <div
                  key={`feature-${index}`}
                  className="col-3"
                  style={{ marginBottom: 20 }}
                >
                  <img
                    width="38"
                    className="col-3"
                    src={data.imageUrl}
                    alt={data._id}
                  />
                </div>
              );
            })}
      </div>
    </main>
  );
}
