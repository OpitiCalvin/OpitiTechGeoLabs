import React from "react";
import AppCard from "../components/AppCard";
import { app_info } from "@/api/app_data";

const page = () => {
  return (
    <div className="container px-4 px-lg-5">
      <h1>About Us</h1>
      <div className="">
        <div>
          <h1> Demo Solutions</h1>
        </div>
        <div className="row gx-4 gx-lg-5">
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
    </div>
  );
};

export default page;
