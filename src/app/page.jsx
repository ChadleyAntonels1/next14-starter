import Image from 'next/image';
import Link from 'next/link';



const Home = () => {
  return <div className='grid justify-items-center text-center px-20 sm:px-20 md:px-28 lg:px-48 xl:px-[400px] my-10'>
          <div className='mb-10'>
            <div className='grid justify-center'>
              <Image src="/pexels-pixabay-414974.jpg" alt='' width={500} height={500} className='mb-10'/>
            </div>
            <div className=' grid col-span-4 justify-items-center '>
              <h1 className='text-xl py-3'>Elevate Your Brand with Stunning Graphics</h1>
              <p className='text-sm'>
              Unlock the power of visual storytelling. Welcome to our graphic design hub, where creativity thrives. Let&apos;s craft unforgettable designs together.            
              </p>  
            </div>
          </div>
          <div className='bg-white bg-opacity-10 rounded-md h-auto p-4 grid justify-items-center'>
              <h1 className='text-xl'>Let&apos;s Create Something Amazing Together!</h1>
              <p className='text-sm p-3 mb-2'>
                Let&apos;s collaborate to bring your ideas to life! Contact us today and let the creativity flow.              
              </p>  
            
          <div className='py-3'>
            <Link className="bg-black text-white font-regular items-center text-xs min-w-[100px] min-h-[25px] rounded-lg p-3" 
            href="/contact">Learn more</Link>
          </div>
          </div>
        </div>
        
        ;
};

export default Home;