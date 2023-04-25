import React, { useRef } from 'react';
import Nav from '../../components/nav';
import './home.css'
import emailjs from 'emailjs-com';
import { ToastContainer } from 'react-toastify';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const Home = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_9krehvb', 'template_n4kts1h', form.current, '9kaC9PmbSn7PX5bOs')

      .then((result) => {
        toast.success('Message sent successfully!');
        form.current.reset(); // Reset the form after submission
      }, (error) => {
        toast.error('An error occurred while sending the message.');
        console.log(error);
      });
  };
  return (
    <div className='chineseBlackBg min-h-screen lg:h-screen'>
      <ToastContainer />
      <Nav />
      <div className='lg:flex lg:items-center lg:justify-around lg:gap-[5rem]'>
        <div className='text-center pb-5 lg:text-left lg:px-5'>
          <h1 className='text-white text-4xl pb-2 xl:text-6xl'>Coming Soon !</h1>
          <h2 className='text-white text-2xl font-light lg:text-3xl flex items-center justify-center lg:justify-start gap-3'>
            Get In Touch
            <img src="/icons/mail.svg" className='w-[5%] md:w-[4%] lg:w-[10%] xl:w-8' alt="" />
          </h2>
        </div>
        <form ref={form} onSubmit={sendEmail} className="grid grid-cols-2 gap-4 m-auto xl:m-0 max-w-xl lg:w-8/12">

          <div className="col-span-1 lg:col-span-2">
            <input type="text" required name="FullName" className="border-solid chineseBlackBg text-white border-2 p-3 md:text-xl w-full" placeholder="FullName" />
          </div>

          <div className="col-span-1 lg:col-span-2">
            <input type="text" required name="email" className="border-solid chineseBlackBg  text-white border-2 p-3 md:text-xl w-full" placeholder="example@gmail.com" />
          </div>

          <div className="col-span-2 lg:col-span-2">
            <input type="tel" required name="PhoneNumber" className="border-solid chineseBlackBg text-white border-2 p-3 md:text-xl w-full" placeholder="PhoneNumber (+961)" />
          </div>

          <div className="col-span-2">
            <h1 className='text-white lg:text-2xl pb-1'>Message</h1>
            <textarea cols="30" rows="8" required name="Message" className="border-solid chineseBlackBg text-white border-2 p-3 md:text-xl w-full" placeholder="Message"></textarea>
          </div>

          <div class="col-span-2 text-right">
            <button>
              <div class="svg-wrapper-1">
                <div class="svg-wrapper">
                  <svg height="24" width="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path d="M0 0h24v24H0z" fill="none"></path>
                    <path d="M1.946 9.315c-.522-.174-.527-.455.01-.634l19.087-6.362c.529-.176.832.12.684.638l-5.454 19.086c-.15.529-.455.547-.679.045L12 14l6-8-8 6-8.054-2.685z" fill="currentColor"></path>
                  </svg>
                </div>
              </div>
              <span>Send</span>
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default Home;