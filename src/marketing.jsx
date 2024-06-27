import React from 'react';
import m from './m.jpeg';
import logo from './logo.jpg';
import { User, Mail, Phone, Send } from 'lucide-react';

const MarketingCourseLandingPage = () => {
  return (
    <div className="min-h-screen bg-gray-100 text-gray-900">
      {/* Header */}
      <header className="orange text-white py-16 px-4 text-center">
        <div className="flex justify-center items-center mb-6">
          <img src={logo} alt="Eureka Academy Logo" className="h-24 mr-4 rounded-full" /> {/* Add the logo */}
          <div>
            <h1 className="text-4xl font-bold mb-2">Master Marketing</h1>
            <p className="text-xl">Join our comprehensive marketing course and transform your skills.</p>
          </div>
        </div>
      </header>

      {/* Introduction */}
      <section className="max-w-4xl mx-auto py-12 px-4">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-6 md:mb-0">
            <h2 className="text-3xl font-semibold mb-4">Welcome to Our Course</h2>
            <p className="mb-4">Our marketing course is designed to equip you with the latest strategies and techniques tailored specifically for the Egyptian market. You'll gain hands-on experience and insights from industry experts.</p>
            <p>Whether you're a beginner or looking to advance your career, this course will provide you with the skills needed to excel in Egypt's dynamic marketing landscape.</p>
          </div>
          <div className="md:w-1/2 md:pl-8">
            {/* <img src="/Users/khaled/Documents/Work/Front-end web development/My Projects/landing page for Eureka/react-landing page/my-project/src/m.jpeg" alt="Marketing in Egypt" className="rounded-lg shadow-md" /> */}
            <img src={m} alt="Logo" className="rounded-lg shadow-md"/>
          </div>
        </div>
      </section>

      {/* Course Details */}
      <section className="bg-white py-12 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-semibold mb-6 text-center">Course Details</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-semibold mb-2">Modules Covered</h3>
              <ul className="list-disc pl-5">
                <li>Digital Marketing Fundamentals</li>
                <li>Social Media Strategies for Egypt</li>
                <li>Content Marketing and SEO</li>
                <li>Email Marketing and Automation</li>
                <li>Analytics and Performance Tracking</li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-2">Key Takeaways</h3>
              <ul className="list-disc pl-5">
                <li>Develop a comprehensive marketing strategy</li>
                <li>Master social media platforms popular in Egypt</li>
                <li>Create compelling content for the Egyptian audience</li>
                <li>Implement effective email campaigns</li>
                <li>Measure and optimize marketing performance</li>
              </ul>
            </div>
          </div>
          <div className="mt-8 text-center">
            <p className="text-lg font-semibold">Duration: 12 weeks</p>
            <p className="text-lg">Schedule: Two 2-hour sessions per week</p>
          </div>
        </div>
      </section>

      {/* Instructor Information */}
      <section className="max-w-4xl mx-auto py-12 px-4">
        <h2 className="text-3xl font-semibold mb-6 text-center">Meet Your Instructor</h2>
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/3 mb-6 md:mb-0">
            {/* <img src="/api/placeholder/300/300" alt="Instructor" className="rounded-full w-48 h-48 mx-auto" /> */}
            <img src={m} alt="Logo" className="rounded-full w-48 h-48 mx-auto"/>
          </div>
          <div className="md:w-2/3 md:pl-8">
            <h3 className="text-2xl font-semibold mb-2">Dr. Amira Hassan</h3>
            <p className="mb-4">Dr. Amira Hassan is a renowned marketing expert with over 15 years of experience in the Egyptian market. She has worked with top brands and has a Ph.D. in Digital Marketing from Cairo University.</p>
            <p>Her practical approach and deep understanding of local consumer behavior make her an invaluable resource for aspiring marketers in Egypt.</p>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="bg-gray-200 py-12 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-semibold mb-6 text-center">What Our Students Say</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <p className="mb-4">"This course completely transformed my approach to marketing. The insights specific to the Egyptian market were invaluable."</p>
              <p className="font-semibold">- Mohamed Ali, Marketing Manager</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <p className="mb-4">"Dr. Hassan's expertise and practical examples made complex concepts easy to understand and apply. Highly recommended!"</p>
              <p className="font-semibold">- Laila Farouk, Entrepreneur</p>
            </div>
          </div>
        </div>
      </section>

      {/* Enrollment Form */}
      <section className="max-w-4xl mx-auto py-12 px-4">
        <h2 className="text-3xl font-semibold mb-2 text-center">Enroll Now</h2>
        <p className="text-center mb-6">Fill out the form below to secure your spot.</p>
        <form className="max-w-lg mx-auto" action="https://formspree.io/f/mqazzjwk" method="POST">
          <div className="mb-4">
            <label htmlFor="name" className="block mb-2 font-semibold">Full Name</label>
            <div className="flex items-center border rounded-md">
              <User className="ml-2 text-gray-400" />
              <input type="text" id="name" className="w-full p-2 rounded-md focus:outline-none" placeholder="Enter your full name" required />
            </div>
          </div>
          <div className="mb-4">
            <label htmlFor="phone" className="block mb-2 font-semibold">Phone Number</label>
            <div className="flex items-center border rounded-md">
              <Phone className="ml-2 text-gray-400" />
              <input type="tel" id="phone" className="w-full p-2 rounded-md focus:outline-none" placeholder="Enter your phone number" required />
            </div>
          </div>
          <div className="mb-4">
            <label htmlFor="email" className="block mb-2 font-semibold">Email Address</label>
            <div className="flex items-center border rounded-md">
              <Mail className="ml-2 text-gray-400" />
              <input type="email" id="email" className="w-full p-2 rounded-md focus:outline-none" placeholder="Enter your email address" required />
            </div>
          </div>
          <div className="mb-4">
            <label htmlFor="notes" className="block mb-2 font-semibold">Additional Notes</label>
            <textarea id="notes" className="w-full p-2 border rounded-md focus:outline-none" rows="4" placeholder="Any specific questions or comments?"></textarea>
          </div>
          <button type="submit" className="w-full orange text-white py-2 px-4 rounded-md hover:bg-black transition duration-300 flex items-center justify-center">
            <Send className="mr-2" />
            Submit Application
          </button>
        </form>
      </section>

      {/* Call to Action */}
      <section className="orange text-white py-12 px-4 text-center">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-semibold mb-4">Ready to Transform Your Marketing Skills?</h2>
          <p className="text-xl mb-6">Don't miss this opportunity to learn from the best and advance your career in marketing.</p>
          <div className="flex justify-center space-x-4">
            <a href="#" className="bg-white text-orange  py-2 px-6 rounded-md hover:bg-black transition duration-300">Contact Us</a>
            <a href="#" className="border border-white py-2 px-6 rounded-md hover:bg-black transition duration-300">Learn More</a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-8 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h3 className="text-2xl font-semibold mb-4">Eureka Academy</h3>
          <p className="mb-2">123 Tahrir Square, Cairo, Egypt</p>
          <p className="mb-4">Email: info@egyptianmarketinginstitute.com | Phone: +20 123 456 7890</p>
          <div className="flex justify-center space-x-4 mb-4">
            <a href="https://www.facebook.com/profile.php?id=61559257651998" target="_blank" className="hover:text-blue-400 transition duration-300">Facebook</a>
            {/* <a href="#" className="hover:text-blue-400 transition duration-300">Twitter</a> */}
            <a href="https://www.instagram.com/eurekaacademy12?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==" target="_blank" className="hover:text-blue-400 transition duration-300">Instagram</a>
            <a href="https://www.linkedin.com/company/eureka20/" className="hover:text-blue-400 transition duration-300" target="_blank">LinkedIn</a>
          </div>
          <div>
            <a href="#" className="hover:underline">Privacy Policy</a> | <a href="#" className="hover:underline">Terms of Service</a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default MarketingCourseLandingPage;