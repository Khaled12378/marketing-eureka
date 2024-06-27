import React from 'react';
import { User, Mail, Phone, Send, BookOpen, Layers, PenTool, Film } from 'lucide-react';

const EurekaAcademyLandingPage = () => {
  return (
    <div className="min-h-screen bg-gray-900 text-white">
      {/* Header */}
      <header className="bg-black py-16 px-4 text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-cover bg-center opacity-20" style={{backgroundImage: "url('/api/placeholder/1200/400')"}}></div>
        <div className="relative z-10">
          <img src="/api/placeholder/150/150" alt="Eureka Logo" className="w-32 h-32 mx-auto mb-6 rounded-full" />
          <h1 className="text-5xl font-bold mb-2">Eureka Academy</h1>
          <p className="text-xl text-yellow-400">It all clicks at Eureka</p>
        </div>
      </header>

      {/* Introduction */}
      <section className="max-w-4xl mx-auto py-12 px-4">
        <h2 className="text-3xl font-semibold mb-6 text-center">Master Your Skills</h2>
        <p className="text-lg mb-8 text-center">
          Enhance your expertise in Marketing, UX/UI, Graphic Design & Motion Graphics with our comprehensive courses.
        </p>
        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-gray-800 p-6 rounded-lg">
            <BookOpen className="w-12 h-12 text-yellow-400 mb-4" />
            <h3 className="text-xl font-semibold mb-2">Marketing</h3>
            <p>Learn cutting-edge marketing strategies and techniques to excel in the digital age.</p>
          </div>
          <div className="bg-gray-800 p-6 rounded-lg">
            <Layers className="w-12 h-12 text-yellow-400 mb-4" />
            <h3 className="text-xl font-semibold mb-2">UX/UI Design</h3>
            <p>Create intuitive and visually appealing user experiences for web and mobile applications.</p>
          </div>
          <div className="bg-gray-800 p-6 rounded-lg">
            <PenTool className="w-12 h-12 text-yellow-400 mb-4" />
            <h3 className="text-xl font-semibold mb-2">Graphic Design</h3>
            <p>Master the art of visual communication and create stunning designs for various mediums.</p>
          </div>
          <div className="bg-gray-800 p-6 rounded-lg">
            <Film className="w-12 h-12 text-yellow-400 mb-4" />
            <h3 className="text-xl font-semibold mb-2">Motion Graphics</h3>
            <p>Bring your designs to life with dynamic animations and engaging visual effects.</p>
          </div>
        </div>
      </section>

      {/* Course Details */}
      <section className="bg-gray-800 py-12 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-semibold mb-6 text-center">Why Choose Eureka?</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-semibold mb-2 text-yellow-400">Expert Instructors</h3>
              <p className="mb-4">Learn from industry professionals with years of experience in their respective fields.</p>
              <h3 className="text-xl font-semibold mb-2 text-yellow-400">Hands-on Projects</h3>
              <p>Apply your knowledge to real-world projects and build an impressive portfolio.</p>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-2 text-yellow-400">Flexible Learning</h3>
              <p className="mb-4">Choose from online or in-person classes to fit your schedule and learning style.</p>
              <h3 className="text-xl font-semibold mb-2 text-yellow-400">Career Support</h3>
              <p>Receive guidance on job searching, resume building, and interview preparation.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-12 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-semibold mb-6 text-center">What Our Students Say</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-gray-800 p-6 rounded-lg">
              <p className="mb-4">"Eureka's UX/UI course completely transformed my design approach. The instructors are top-notch, and the projects were challenging and rewarding."</p>
              <p className="font-semibold text-yellow-400">- Sarah K., UX Designer</p>
            </div>
            <div className="bg-gray-800 p-6 rounded-lg">
              <p className="mb-4">"The motion graphics course at Eureka opened up a whole new world of possibilities for me. I now feel confident taking on complex animation projects."</p>
              <p className="font-semibold text-yellow-400">- Ahmed M., Motion Designer</p>
            </div>
          </div>
        </div>
      </section>

      {/* Enrollment Form */}
      <section className="max-w-4xl mx-auto py-12 px-4">
        <h2 className="text-3xl font-semibold mb-2 text-center">Enroll Now</h2>
        <p className="text-center mb-6">Take the first step towards mastering your skills. Fill out the form below to get started.</p>
        <form className="max-w-lg mx-auto">
          <div className="mb-4">
            <label htmlFor="name" className="block mb-2 font-semibold">Full Name</label>
            <div className="flex items-center border border-gray-700 rounded-md bg-gray-800">
              <User className="ml-2 text-gray-400" />
              <input type="text" id="name" className="w-full p-2 bg-transparent rounded-md focus:outline-none" placeholder="Enter your full name" required />
            </div>
          </div>
          <div className="mb-4">
            <label htmlFor="phone" className="block mb-2 font-semibold">Phone Number</label>
            <div className="flex items-center border border-gray-700 rounded-md bg-gray-800">
              <Phone className="ml-2 text-gray-400" />
              <input type="tel" id="phone" className="w-full p-2 bg-transparent rounded-md focus:outline-none" placeholder="Enter your phone number" required />
            </div>
          </div>
          <div className="mb-4">
            <label htmlFor="email" className="block mb-2 font-semibold">Email Address</label>
            <div className="flex items-center border border-gray-700 rounded-md bg-gray-800">
              <Mail className="ml-2 text-gray-400" />
              <input type="email" id="email" className="w-full p-2 bg-transparent rounded-md focus:outline-none" placeholder="Enter your email address" required />
            </div>
          </div>
          <div className="mb-4">
            <label htmlFor="course" className="block mb-2 font-semibold">Preferred Course</label>
            <select id="course" className="w-full p-2 bg-gray-800 border border-gray-700 rounded-md focus:outline-none">
              <option value="">Select a course</option>
              <option value="marketing">Marketing</option>
              <option value="uxui">UX/UI Design</option>
              <option value="graphic">Graphic Design</option>
              <option value="motion">Motion Graphics</option>
            </select>
          </div>
          <div className="mb-4">
            <label htmlFor="notes" className="block mb-2 font-semibold">Additional Notes</label>
            <textarea id="notes" className="w-full p-2 bg-gray-800 border border-gray-700 rounded-md focus:outline-none" rows="4" placeholder="Any specific questions or comments?"></textarea>
          </div>
          <button type="submit" className="w-full bg-yellow-400 text-gray-900 py-2 px-4 rounded-md hover:bg-yellow-500 transition duration-300 flex items-center justify-center font-semibold">
            <Send className="mr-2" />
            Submit Application
          </button>
        </form>
      </section>

      {/* Call to Action */}
      <section className="bg-yellow-400 text-gray-900 py-12 px-4 text-center">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-semibold mb-4">Ready to Transform Your Skills?</h2>
          <p className="text-xl mb-6">Join Eureka Academy today and take your career to the next level!</p>
          <a href="#" className="bg-gray-900 text-white py-2 px-6 rounded-md hover:bg-gray-800 transition duration-300 inline-block font-semibold">Explore Courses</a>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black text-white py-8 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h3 className="text-2xl font-semibold mb-4">Eureka Academy</h3>
          <p className="mb-2">123 Innovation Street, Cairo, Egypt</p>
          <p className="mb-4">Email: info@eurekaacademy.com | Phone: +20 123 456 7890</p>
          <div className="flex justify-center space-x-4 mb-4">
            <a href="#" className="hover:text-yellow-400 transition duration-300">Facebook</a>
            <a href="#" className="hover:text-yellow-400 transition duration-300">Twitter</a>
            <a href="#" className="hover:text-yellow-400 transition duration-300">LinkedIn</a>
            <a href="#" className="hover:text-yellow-400 transition duration-300">Instagram</a>
          </div>
          <div>
            <a href="#" className="hover:underline">Privacy Policy</a> | <a href="#" className="hover:underline">Terms of Service</a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default EurekaAcademyLandingPage;