import React from "react";
import AppCard from "../components/AppCard";
import { app_info } from "@/api/app_data";

const Demos = () => {
  return (
    <div className="container-fluid">
      <div className="row py-2 gx-4 gx-lg-5">
          {app_info.map((app) => (
            <AppCard
              key={app.name}
              name={app.name}
              desc={app.desc}
              link={app.link}
              imgSrc={app.imgSrc}
            />
          ))}
        </div>
    </div>
  );
};

export default Demos;
