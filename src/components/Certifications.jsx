import react from "react";

function Certifications() {

  const certifications = [
    {
      title : "Competitive Programming",
      organisation : "TLE Eliminators",
      issueDate : "April 2024",
      url : "",
      imageUrl : "tle_eliminators_logo.jpg",
    },
    {
      title : "DSA Demystified",
      organisation : "PESU IO",
      issueDate : "January 2022",
      url : "",
      imageUrl : "pesuIO.jpg",
    },
    {
      title : "Python For Beginners",
      organisation : "Udemy",
      issueDate : "March 2020",
      url : "",
      imageUrl : "udemy_logo.png",
    },
  ];

  return (
    <div className="text-white font-[Poppins] w-full bg-[#080808]" id="Certifications">
      <h1 className="underline sm:no-underline pb-16 text-center sm:text-left sm:pl-16 pt-24 text-3xl font-medium sm:text-[36px] sm:font-[700] md:text-[45px] md:font-[600]">Certifications</h1>
      <div className="flex flex-wrap items-center sm:items-start md:pl-16 pt-8 gap-14">
        {certifications.map((cert, index) => (
          <div key={index} className="bg-gray-800 rounded-lg shadow-lg overflow-hidden w-full md:w-1/3 lg:w-1/4 sm:mb-28 mb-20 transform transition-transform duration-300 hover:scale-105 hover:shadow-xl">
            <div className="bg-gray-700 h-48 flex items-center justify-center">
              <img src={cert.imageUrl} alt={cert.title} className="w-full h-full object-contain" />
            </div>
            <div className="p-4">
              <h2 className="text-xl font-semibold mb-2">{cert.title}</h2>
              <p className="text-sm text-gray-400 mb-1">{cert.organisation}</p>
              <p className="text-sm text-gray-400">{cert.issueDate}</p>
              
              <div className="flex justify-center">
                <a
                    href={cert.url}
                    className="mt-7 inline-block bg-blue-600 text-white px-4 py-2 rounded-full shadow-lg hover:bg-blue-700 transition-all duration-300"
                  >
                    Show Credential
                  </a>
              </div>

            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Certifications;