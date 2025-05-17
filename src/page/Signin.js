import logo from '../assets/images/logo.png';


const Signin = () => {
 
  return (
    <section className="grid grid-cols-1 md:grid-cols-2 min-h-screen left-14px">
      {/* Left container */}
      <div className='w-[610px] relative bg-white flex flex-col p-6 sm:px-8 md:px-12'>
        <img 
          src={logo}
          alt="Company logo"
         className="w-[150px] h-[58px] mb-8 left-6 top-20 sm:left-12 sm:top-28 md:left-24 md:top-36"
        />

        <div className="max-w-md w-full mx-auto mt-12 relative left-5">
          <h1 className='font-bold font-inter text-4xl mb-1'>Signin</h1>
          <h2 className='font-bold font-inter mt-2'>Welcome back!</h2>
          <p className="mt-2 font-inter">Log in to manage your services, deals, and technical opportunities</p>

          <div className='mt-1'>
                <span className='text-gray-500 font-inter'>Don't have an account? </span>
                <a to='/signup'>
                <span className='font-semibold underline font-inter'>Create now</span>
                </a>
            </div>
        </div>
        
      </div>

      {/* Right container */}
      <div className='bg-teal-600'>Right</div>

      {/* Toast container (obligatoire) */}
     
    </section>
  );
};

export default Signin;
