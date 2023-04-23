import React from 'react'
import Nav from '../../components/nav';
import './home.css'

const Home = () => {
  return (
    <div className='chineseBlackBg h-screen xl:h-screen'>
      <Nav />
      <div className='flex flex-col py-20 xl:flex-row xl:mx-20 xl:justify-around xl:items-center relative'>
        {/* content  */}
        <div>
          <h1 className='text-white xl:text-7xl'>Coming Soon !</h1>
          <div className='flex gap-5 py-5'>
            <h3 className='text-white xl:text-2xl'>Get In Touch</h3>
            <img src="/icons/mail.svg" alt="" />
          </div>
        </div>
        <form action="" className='flex flex-col items-start'>
          <h1 className='text-white xl:text-3xl xl:pb-5'>Contact Info</h1>
          <input type="text" placeholder='Full Name' className='chineseBlackBg text-white border-[1px] border-white my-4 p-3 xl:w-[140%]' />
          <input type="email" placeholder='Email' className='chineseBlackBg  text-white border-[1px] border-white my-4 p-3 xl:w-[140%]' />
          <input type="tel" placeholder='Phone Number' className='chineseBlackBg text-white border-[1px] border-white my-4 p-3 xl:mb-10 xl:w-[140%]' />
          <h1 className='text-white xl:text-2xl xl:pb-2'>Message</h1>
          <textarea placeholder='Message' row={4} cols={35} className='chineseBlackBg text-white border-[1px] border-white my-4 p-3' />
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
        </form>
      </div>
      <div className='fixed bottom-3 right-3'>
        <div className='flex gap-5 justify-end items-end'>
          <img src="/icons/github.svg" className='w-1/6' alt="" />
          <img src="/icons/discord.svg" className='w-1/6' alt="" />
          <img src="/icons/instagram (3).svg" className='w-1/6' alt="" />
        </div>
      </div>

    </div>
  )
}

export default Home;