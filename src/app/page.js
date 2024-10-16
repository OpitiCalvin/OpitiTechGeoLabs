import Image from "next/image";

export default function Home() {
  return (
    <div className="container-fluid">
      <div className="d-flex justify-content-center px-1 py-1">
        <Image
          src="/gis.jpeg"
          alt="OPITI Geolabs Logo"
          className="img-fluid rounded mb-4 mb-lg-0"
          width={1000}
          height={667}
          priority
        />
      </div>
    </div>
  );
}
