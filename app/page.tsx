import Image from 'next/image';
import Navbar from '../app/components/Navbar'; 
import '@fortawesome/fontawesome-free/css/all.min.css';

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <header className="w-full bg-black/80 text-white py-5 text-center fixed top-0 left-0 z-50">
        <Navbar />
      </header>

      {/* About Section */}
      <section className="pt-44 py-12 bg-white" id="about">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 items-center gap-8">
          <div className="flex-shrink-0 group">
            <Image
              src="/image/naphat.jpg"
              alt="Naphat Nonglek"
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
              <li><strong>Name: </strong>Naphat Nonglek</li>
              <li><strong>Nickname: </strong>Phat</li>
              <li><strong>Age: </strong>19</li>
              <li><strong>University: </strong>Phayao University</li>
              <li><strong>Major: </strong>Software Engineering</li>
            </ul>

            {/* Contact Section */}
            <h3 className="mt-6 text-3xl font-semibold text-gray-700">Contact</h3>
            <div className="mt-4 space-x-6">
              <a href="https://www.facebook.com/naphat.nonglek?locale=th_TH" className="text-gray-800 hover:text-[#4267B2] transition-colors duration-300">
                <i className="fab fa-facebook fa-2x"></i>
              </a>
              <a href="https://www.instagram.com/pphat.np/" className="text-gray-800 hover:text-[#E1306C] transition-colors duration-300">
                <i className="fab fa-instagram fa-2x"></i>
              </a>
              <a href="https://github.com/66022578" className="text-gray-800 hover:text-gray-600 transition-colors duration-300">
                <i className="fab fa-github fa-2x"></i>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="pt-44 py-24 bg-white" id="skills">
        <h2 className="text-3xl font-bold text-center">MY SKILLS</h2>
        
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 mt-16 items-start">
          
          {/* Programming Languages */}
          <div className="text-center">
            <h3 className="text-xl font-semibold">PROGRAMMING LANGUAGE</h3>
            <ul className="space-y-2 pt-4">
              <li className="flex items-center justify-center gap-4">
                <i className="fa-brands fa-python text-blue-500 text-2xl"></i> 
                Python
              </li>
              <li className="flex items-center justify-center gap-4">
                <i className="fa-brands fa-js text-yellow-500 text-2xl"></i> 
                JavaScript
              </li>
              <li className="flex items-center justify-center gap-4">
                <i className="fa-brands fa-react text-blue-600 text-2xl"></i> 
                TypeScript
              </li>
              <li className="flex items-center justify-center gap-4">
                <i className="fa-brands fa-html5 text-orange-500 text-2xl"></i> 
                HTML
              </li>
              <li className="flex items-center justify-center gap-4">
                <i className="fa-brands fa-css3-alt text-blue-400 text-2xl"></i> 
                CSS
              </li>
              <li className="flex items-center justify-center gap-4">
                <i className="fa-brands fa-java text-red-600 text-2xl"></i> 
                JAVA
              </li>
            </ul>
          </div>

          {/* Tools */}
          <div className="text-center">
            <h3 className="text-xl font-semibold">TOOLS</h3>
            <ul className="space-y-2 pt-4">
              <li className="flex items-center justify-center gap-4">
                <i className="fa-brands fa-vuejs text-green-500 text-2xl"></i> 
                Visual Studio Code
              </li>
              <li className="flex items-center justify-center gap-4">
                <i className="fa-solid fa-server text-orange-600 text-2xl"></i> 
                XAMPP
              </li>
              <li className="flex items-center justify-center gap-4">
                <i className="fa-solid fa-pen-ruler text-pink-500 text-2xl"></i> 
                Figma
              </li>
              <li className="flex items-center justify-center gap-4">
                <i className="fa-solid fa-robot text-green-500 text-2xl"></i> 
                ChatGPT
              </li>
            </ul>
          </div>

          {/* Frameworks */}
          <div className="text-center">
            <h3 className="text-xl font-semibold">FRAMEWORK</h3>
            <ul className="space-y-2 pt-4">
              <li className="flex items-center justify-center gap-4">
                <i className="fa-brands fa-react text-blue-500 text-2xl"></i> 
                NEXT.JS
              </li>
              <li className="flex items-center justify-center gap-4">
                <i className="fa-brands fa-vuejs text-green-500 text-2xl"></i> 
                Vue
              </li>
              <li className="flex items-center justify-center gap-4">
                <i className="fa-brands fa-react text-blue-500 text-2xl"></i> 
                React
              </li>
              <li className="flex items-center justify-center gap-4">
                <i className="fa-brands fa-vuejs text-green-600 text-2xl"></i> 
                NUXT.JS
              </li>
              <li className="flex items-center justify-center gap-4">
                <i className="fa-solid fa-palette text-blue-400 text-2xl"></i> 
                Tailwind
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="pt-44 py-24 bg-white" id="projects">
        <h2 className="text-3xl font-bold text-center">PROJECTS</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
          <div className="bg-white shadow-lg rounded-lg p-6 text-center">
            <Image src="/image/stage.jpg" alt="STAGE WEB" layout="responsive" width={770} height={450} className="rounded-lg" />
            <h3 className="text-xl font-semibold mt-4">STAGE WEB</h3>
          </div>
          <div className="bg-white shadow-lg rounded-lg p-6 text-center">
            <Image src="/image/coding-web.jpg" alt="CODING WEB" layout="responsive" width={770} height={450} className="rounded-lg" />
            <h3 className="text-xl font-semibold mt-4">CODING WEB</h3>
          </div>
        </div>
      </section>
    </div>
  );
}
