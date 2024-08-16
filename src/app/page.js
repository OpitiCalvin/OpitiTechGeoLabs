import Image from "next/image";
import AppCard from "./components/AppCard";
import { app_info } from "@/api/app_data";

export default function Home() {
  return (
    <>
      {/* Page Content */}
      <div className="container px-4 px-lg-5">
        {/* Heading Row */}
        <div className="row gx-4 gx-lg-5 align-items-center my-5">
          <div className="col-lg-8">
            <Image
              src="/worldmap.jpg"
              alt="OPITI Geolabs Logo"
              className="img-fluid rounded mb-4 mb-lg-0"
              width={900}
              height={400}
              priority
            />
          </div>
          <div className="col-lg-4">
            <h1 className="font-weight-light">Geo-IT Services</h1>
            <p>
              Desktop, Web and Enterprise GIS application and IT infrastructure
              consultants.
            </p>
            <ul>
              <li>Integrated Web GIS App Development</li>
              <li>Spatial Databases</li>
              <li>Spatial & Imagery Analytics</li>
              <li>Enterprise Web GIS Deployment</li>
            </ul>
            <a
              className="btn btn-primary"
              href="mailto: opiticalvin@gmail.com ?subject=Possible Consult: Contact from GeoLabs Site"
            >
              Reach Out!
            </a>
          </div>
        </div>
        <div className="row gx-4 gx-lg-5 my-5"></div>
        {/* Call to Action */}
        <div className="card text-white bg-secondary my-5 py-4 text-center">
          <div className="card-body">
            <p className="text-white m-0">
              Reach out for a consult on your Web GIS, Databases and IT
              infrastructure needs.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
