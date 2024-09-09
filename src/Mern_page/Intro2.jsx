// import What from '../assets/devdudesimgs/whatis.gif';
import ques from '../assets/devdudesimgs/questionnnn.png';
function Intro2(){
    return(
        <div className="bg-[#2b3f81] p-10 max-w-6xl mx-auto flex mt-10 rounded-md items-center flex-wrap sm:flex-nowrap gap-y-5">
            <div className="text-white">
                {/* <p className='md:text-4xl  text-2xl pb-3 font-semibold '>Why <span class="inset-0 filter text-yellow-300 -z-10">DevDudes?</span></p> */}
                <h1 class="text-5xl font-extrabold text-yellow-400 relative pb-4">
                    Why DevDudes?
                    <span class="absolute inset-0 filter blur-lg opacity-50 text-yellow-300 -z-10">Why DevDudes?</span>
                </h1>
                <p className='text-xs md:text-sm lg:text-xl'>Dev Dudes aims to provide a collaborative environment where developers can access top-tier resources, stay updated with the latest tech trends, and network with like-minded individuals. Whether you're looking to sharpen your coding skills, find inspiration for projects, or join a hackathon, Dev Dudes is here to support your journey in becoming a better developer.</p>
            </div>
            <div className='lg:w-[2000px]'>
                <img src={ques} alt="" />
            </div>
        </div>
    );
}
export default Intro2