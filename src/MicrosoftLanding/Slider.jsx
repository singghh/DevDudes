import mslaptopim from './assets/mslaptopim.png';
function Slider(){
    return(
        <div className="slider flex flex-col-reverse md:flex-row bg-[#e6e6e6] mx-2">
            <div className="left flex flex-col justify-center items-center md:items-baseline py-12 space-y-6">
                <h1 className="text-2xl font-medium md:text-4xl mx-5">Surface Laptop 4</h1>
                <p className="w-3/4 mx-5 text-center md:text-left">Do it all with a perfect balance of sleek, ultra-thin design, multitasking speed and improved performance    </p>
                <button className=" text-white bg-black px-4 py-2 my-6 font-bold mx-5">Shop Now</button>
            </div>
            <div className="">
                <img src={mslaptopim} alt="intropic" />
            </div>
        </div>
    );
}
export default Slider



