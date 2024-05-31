import Image from "next/image";
import Navbar from "./navigation/Navbar";
import Footer from "./components/Footer";
import AppCard from "./components/AppCard";
import { app_info } from "@/api/app_data";

export default function Home() {
  return (
    <main>
      {/* Responsible navbar */}
      <Navbar />

      {/* Page Content */}
      <div className="container px-4 px-lg-5">
        {/* Heading Row */}
        <div className="row gx-4 gx-lg-5 align-items-center my-5">
          <div className="col-lg-7">
            <Image
              src="https://dummyimage.com/900x400/dee2e6/6c757d.jpg"
              alt="OPITI Geolabs Logo"
              className="img-fluid rounded mb-4 mb-lg-0"
              width={900}
              height={400}
              priority
            />
          </div>
          <div className="col-lg-5">
            <h1 className="font-weight-light">OPITI Inc - Geo Labs</h1>
            <p>
              This is a template that is great for small businesses. It does not
              have too much fancy flare to it, but it makes a great use of the
              standard Bootstrap core components. Feel free to use this template
              for any project you want!
            </p>
            <a className="btn btn-primary" href="#!">
              Contact Us
            </a>
          </div>
        </div>
        {/* Call to Action */}
        <div className="card text-white bg-secondary my-5 py-4 text-center">
          <div className="card-body">
            <p className="text-white m-0">
              This call to action card is a great place to showcase some
              important information or display a clever tagline!
            </p>
          </div>
        </div>
        {/* Content Row */}
        <div className="row gx-4 gx-lg-5">
          {app_info.map((app) => (
            <AppCard
              key={app.name}
              name={app.name}
              desc={app.desc}
              link={app.link}
            />
          ))}
        </div>
      </div>

      {/* Footer */}
      <Footer />
    </main>
  );
}
