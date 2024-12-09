
import Navbar from '../app/components/Navbar';  

export default function Home() {
  return (
<<<<<<< HEAD
    <div className="min-h-screen bg-gray-200">
      <header className="w-full bg-gray-900 text-white py-4">
        <Navbar />
      </header>

      {/* About Section */}
      <section className="py-12 bg-white" id="about">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 items-center gap-8  ">
          <div className="flex-shrink-0 group">
            <Image
              src="/image/naphat.jpg"
              alt="Description of Image"
              width={400}
              height={400}
              className="rounded-full object-cover shadow-lg transition-all duration-500 ease-in-out group-hover:scale-105 group-hover:rotate-3"
            />


          </div>

          <div className="transition-all duration-700 ease-in opacity-100 group-hover:opacity-100">
            <h2 className="text-4xl font-bold text-gray-800">HELLO THERE!</h2>
            <p className="mt-2 text-gray-600 text-lg">
              Yo, what’s up! Welcome to Naphat site — feel free to roam around and have fun!
            </p>

            <h3 className="mt-6 text-3xl font-semibold text-gray-700">About Me</h3>
            <ul className="mt-4 space-y-2 text-gray-700">
              <li><strong>Name:</strong> Naphat Nonglek</li>
              <li><strong>Nickname:</strong> Phat</li>
              <li><strong>Age:</strong> 19</li>
              <li><strong>University:</strong> Phayao University</li>
              <li><strong>Major:</strong> Software Engineering</li>
            </ul>

            {/* Contact Section */}
            <h3 className="mt-6 text-3xl font-semibold text-gray-700">Contact</h3>
            <div className="mt-4 space-x-6">
              <a
                href="https://www.facebook.com/naphat.nonglek?locale=th_TH"
                className="text-gray-800 hover:text-[#4267B2] transition-colors duration-300"
                target="_blank"
              >
                <i className="fab fa-facebook fa-2x"></i>
              </a>
              <a
                href="https://www.instagram.com/pphat.np/"
                className="text-gray-800 hover:text-[#E1306C] transition-colors duration-300"
                target="_blank"
              >
                <i className="fab fa-instagram fa-2x"></i>
              </a>
              <a
                href="https://github.com/66022578"
                className="text-gray-800 hover:text-gray-600 transition-colors duration-300"
                target="_blank" 
              >
                <i className="fab fa-github fa-2x"></i>
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
=======
    <header className="w-full bg-gray-900 text-white py-4">
        <Navbar /> 
    </header>
>>>>>>> parent of 3531c9d (About_ME)
  );
}
