import { useState } from 'react';
import { Phone, Mail, MapPin, Facebook, Instagram, Twitter } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';


export default function Contact() {
  const [state, setState] = useState('Select State');
  
  return (
    <div className="bg-slate-50 min-h-screen">
      <div className='bg-[url("https://t3.ftcdn.net/jpg/05/30/96/04/360_F_530960431_c8fPd3HansYvrSJ4fJxZqp9OhjQmYoll.jpg")] bg-cover bg-center  z-0'>
       
       <div className="container mx-auto px-6 py-12 ">
         
     
         
         {/* Main content */}
         <div className="flex flex-col lg:flex-row items-start gap-12">
           
           {/* Text content */}
           <div className="lg:w-1/2">
             <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-6 leading-tight">
             Contact Us
             </h1>
             
             <p className="text-white mb-6 text-base">
             - Your Dream are right with in reach, with the help of moon rise loan.
             </p>
             
             <Link to="/services" className="inline-flex items-center text-green-600 text-sm font-medium hover:text-green-800">
             View All Program Loans 
               <svg className="ml-2 w-4 h-4" viewBox="0 0 20 20" fill="currentColor">
                 <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
               </svg>
             </Link>
           </div>
           
         
         </div>
       </div>
       </div>
      {/* Contact Info Cards */}
      <div className="container mx-auto px-4 py-6">
        <div className="grid md:grid-cols-2 gap-4">
          {/* Contact Card */}
          <div className="bg-green-50 p-6 rounded-lg border border-green-100">
            <h3 className="font-bold mb-4">Contact</h3>
            <div className="border-t border-gray-200 my-2"></div>
            
            <div className="space-y-3">
              <div className="flex items-center gap-2">
                <Phone size={18} className="text-green-700" />
                <span className="text-gray-600">+1 (888) 588-9239</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone size={18} className="text-green-700" />
                <span className="text-gray-600">+1 (888) 588-9239</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone size={18} className="text-green-700" />
                <span className="text-gray-600">+1 (888) 588-9239</span>
              </div>
            </div>
          </div>
          
          {/* Email Card */}
          <div className="bg-green-50 p-6 rounded-lg border border-green-100">
            <h3 className="font-bold mb-4">E-mail</h3>
            <div className="border-t border-gray-200 my-2"></div>
            
            <div className="space-y-3">
              <div className="flex items-center gap-2">
                <Mail size={18} className="text-green-700" />
                <span className="text-gray-600">info@pulsecash.com</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail size={18} className="text-green-700" />
                <span className="text-gray-600">info@pulsecash.com</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail size={18} className="text-green-700" />
                <span className="text-gray-600">info@pulsecash.com</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Contact Form */}
      <div className="container mx-auto px-4 py-6">
        <h2 className="text-xl font-bold mb-6">Contact with us for your any help -</h2>
        
        <form className="space-y-4">
          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">First Name</label>
              <input 
                type="text" 
                className="w-full p-2 border border-gray-300 rounded-md"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Last Name</label>
              <input 
                type="text" 
                className="w-full p-2 border border-gray-300 rounded-md"
              />
            </div>
          </div>
          
          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Phone</label>
              <input 
                type="tel" 
                className="w-full p-2 border border-gray-300 rounded-md"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">State</label>
              <select 
                className="w-full p-2 border border-gray-300 rounded-md bg-white"
                value={state}
                onChange={(e) => setState(e.target.value)}
              >
                <option>Select State</option>
                <option>Alabama</option>
                <option>Alaska</option>
                <option>Arizona</option>
                <option>Arkansas</option>
                <option>California</option>
                {/* More states would go here */}
              </select>
            </div>
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Message</label>
            <textarea 
              className="w-full p-2 border border-gray-300 rounded-md h-32"
              placeholder="Message"
            ></textarea>
          </div>
          
          <div>
            <button 
              type="submit" 
              className="bg-gray-900 text-white px-6 py-2 rounded-md hover:bg-gray-800"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
      
      
      
    
    </div>
  );
}