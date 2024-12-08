// components/Navbar.js

export default function Navbar() {
  return (
    <div className="max-w-7xl mx-auto flex justify-between items-center px-6">
        <h1 className="text-3xl font-bold">PORTFOLIO</h1>
        <nav className="flex justify-center space-x-8 ">
            <a href="#about" className="text-white hover:text-blue-500">ABOUT ME</a>
            <a href="#skills" className="text-white hover:text-blue-500">MY SKILLS</a>
            <a href="#projects" className="text-white hover:text-blue-500">PROJECTS</a>
        </nav>
    </div>
    
  );
}
    