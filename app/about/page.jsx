import { IoHomeOutline } from "react-icons/io5";
import { SlArrowRight } from "react-icons/sl";
import { CiLocationOn } from "react-icons/ci";
import img1 from "./460.png"
import bg from "./bg.png"
import ban from "./banner-13.png.png"

import Image from "next/image";

function About() {
  return (
    <>
      {/* Breadcrumb */}
      <nav className="flex gap-2 items-center mx-6 md:mx-10 p-4 text-sm">
        <a href="/home" className="flex items-center gap-1 hover:text-blue-500">
          <IoHomeOutline /> Home
        </a>

        <SlArrowRight />

        <a href="/about" className="hover:text-blue-500">
          About
        </a>
         <SlArrowRight />

        <a href="/contact" className="hover:text-blue-500">
          Contact
        </a>
      </nav>

      {/* Main Section */}
      <section className="px-6 mx-10 md:px-10 py-10">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          
          {/* Left Content */}
          <div className="pl-24 ">
            <h3 className="text-green-500  font-semibold mb-2">
              How can I help you?
            </h3>

            <h1 className="text-5xl md:text-3xl font-bold mb-4">
             Let's Us Know How we Can Help You.
            </h1>

            <p className="text-gray-600 mb-4">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Obcaecati eos necessitatibus, ea magnam repudiandae temporibus.
            </p>

            <p className="text-gray-600">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Assumenda magni et delectus velit illo natus numquam.
            </p>
          </div>

          {/* Right Cards */}
          <div className="lg:col-span-2 grid grid-cols-2 mt-28 pr-24 sm:grid-cols-2 gap-2">
            
            <div className="p-4  rounded-lg hover:shadow-md transition">
              <h3 className="font-semibold mb-2">01. Visit Feedback</h3>
              <p className="text-gray-600 text-sm">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet numquam delectus impedit quis totam in molestiae facilis, 
                vitae minus vero, repellat ipsa veritatis repellendus consectetur nemo, quos repudiandae quam mollitia.
              </p>
            </div>

            <div className="p-4  rounded-lg hover:shadow-md transition">
              <h3 className="font-semibold mb-2">02. Employer Services</h3>
              <p className="text-gray-600 text-sm">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Illum voluptatibus quisquam commodi, nobis minima minus optio praesentiu
                m inventore fugit tenetur quia. Error eius voluptate aperiam laboriosam voluptatibus quis sunt ducimus..
              </p>
            </div>

            <div className="p-4  rounded-lg hover:shadow-md transition">
              <h3 className="font-semibold mb-2">03. Billing Inquiries</h3>
              <p className="text-gray-600 text-sm">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Assumenda tempora eum consequuntur accusantium et placeat repellat explicabo deleniti und
                e tempore dignissimos, at debitis vel? Veniam omnis voluptatibus ullam quas voluptate.
              </p>
            </div>

            <div className="p-4 rounded-lg hover:shadow-md transition">
              <h3 className="font-semibold mb-2">04. General Inquiries</h3>
              <p className="text-gray-600 text-sm">
                
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsa iusto rem cupiditate tempore quasi dolor quam ratione recusandae
                , optio cumque. Explicabo unde ducimus optio. Illum architecto dicta eveniet dolore saepe!
              </p>
            </div>

          </div>
        </div>
      </section>
      <section className="mx-10 pr-10 p-5">
        {/* google map */}
        <div className="w-full h-[350px] rounded-xl ml-10  mr-10 overflow-hidden">
      <iframe
        className="w-full h-full border-0"
        src="https://www.google.com/maps?q=Dhaka,Bangladesh&output=embed"
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        title="Google Map"
      ></iframe>
    </div>
      </section>
      <section className="mx-24 md:px-10 py-12 bg-gray-50">
      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        
        {/* Office */}
        <div className="p-6 bg-white rounded-2xl shadow-sm hover:shadow-lg transition">
          <h1 className="text-xl text-green-500 font-bold mb-3">Office</h1>

          <p className="text-gray-600 mb-4 leading-relaxed">
            205 North Michigan Avenue, Suite 810 <br />
            Chicago, 60601, USA <br />
            Phone: (123) 456-7890 <br />
            Email: contact@Evara.com
          </p>
          <button className=" bg-blue-600 text-white w-40 flex items-center justify-center p-2 h-15 rounded-xl hover:shadow-2xl text-center"> <CiLocationOn/> View Map</button>

         
        </div>

        {/* Studio */}
        <div className="p-6 bg-white rounded-2xl shadow-sm hover:shadow-lg transition">
          <h1 className="text-xl text-green-500 font-bold mb-3">Studio</h1>

          <p className="text-gray-600 mb-4 leading-relaxed">
            205 North Michigan Avenue, Suite 810 <br />
            Chicago, 60601, USA <br />
            Phone: (123) 456-7890 <br />
            Email: contact@Evara.com
          </p>

          <button className=" bg-blue-600 text-white w-40 flex items-center justify-center p-2 h-15 rounded-xl hover:shadow-2xl text-center"> <CiLocationOn/> View Map</button>

        </div>

        {/* Shop */}
        <div className="p-6  bg-white rounded-2xl shadow-sm hover:shadow-lg transition">
          <h1 className="text-xl font-bold text-green-500 mb-3">Shop</h1>

          <p className="text-gray-600 mb-4 leading-relaxed">
            205 North Michigan Avenue, Suite 810 <br />
            Chicago, 60601, USA <br />
            Phone: (123) 456-7890 <br />
            Email: contact@Evara.com
          </p>

         <button className=" bg-blue-600 text-white w-40 flex items-center justify-center p-2 h-15 rounded-xl hover:shadow-2xl text-center"> <CiLocationOn/> View Map</button>

        </div>

      </div>
    </section>
    <section>
        <div className="grid grid-cols-1  lg:grid-cols-2 gap-8 mx-10 md:px-10 py-12 items-center">

  {/* Left Side: Contact Form */}
  <div className="mx-10">
    <h1 className="text-xl text-green-500  mb-2">Contact Form</h1>
    <h1 className="text-3xl font-bold  md:tex-xl mb-2">Drop Us A Line</h1>
    <p className="text-gray-600 mb-6">Please fill in this form and we will get back to you.</p>

    <div className="p-6 md:p-10 bg-gray-50 rounded-2xl shadow-sm">

      {/* Inputs */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-2">
        <input
          type="text"
          placeholder="Full Name"
          className="border rounded-lg px-4 py-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-400"
        />
        <input
          type="email"
          placeholder="Your Email"
          className="border rounded-lg px-4 py-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-400"
        />
        <input
          type="tel"
          placeholder="Your Phone"
          className="border rounded-lg px-4 py-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-400"
        />
        <input
          type="text"
          placeholder="Subject"
          className="border rounded-lg px-4 py-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-400"
        />
      </div>

      {/* Message + Button */}
      <div className="space-y-4">
        <textarea
          placeholder="Your Message..."
          rows="5"
          className="w-full border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
        ></textarea>

        <button className="w-full bg-blue-500 text-white py-3 rounded-lg hover:bg-blue-600 transition font-semibold">
          Submit
        </button>
      </div>

    </div>
  </div>

  {/* Right Side: Image */}
  <div className="flex justify-center lg:justify-end">
    <Image className="max-w-full rounded-2xl mt-20 shadow-md" src={img1} alt="Contact" />
  </div>

</div>
    </section>
    <section className="relative px-10 rounded-sm">
  {/* Background Image */}
  <div
    className="bg-cover bg-center w-full h-[500px] flex items-center relative"
    style={{ backgroundImage: `url(${bg})` }}
  >
    {/* Optional overlay for better readability */}
    <div className="absolute inset-0 bg-black/40"></div>

    <div className="container mx-auto flex flex-col lg:flex-row items-center justify-between px-6 lg:px-20 relative z-10">
      
      {/* Left: Text + Form */}
      <div className="text-left text-white lg:w-1/2 mb-8 lg:mb-0">
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
          Don't miss amazing <br /> grocery deals
        </h1>
        <p className="text-lg text-gray-100 mb-6">
          Sign up for daily newsletters
        </p>

        <div className="flex flex-col sm:flex-row gap-3">
          <input
            type="email"
            placeholder="Your Email Address"
            className="px-4 py-3 rounded-lg text-black w-full sm:w-80 outline-none"
          />
          <button className="bg-green-500 text-white px-6 py-3 rounded-lg hover:bg-green-600 transition font-semibold">
            Subscribe
          </button>
        </div>
      </div>

      {/* Right: Image */}
      <div className=" flex justify-end">
        <Image src={ban} alt="Banner" className="max-w-full rounded-lg " />
      </div>
    </div>
  </div>
</section>

    </>
  );
}

export default About;