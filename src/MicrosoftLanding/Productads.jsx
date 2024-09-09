import microsoftbrandssolid from './assets/microsoft-brands-solid.svg';
import mirrored from './assets/mirrored.jpg';
import xboxbrandssolid from './assets/xbox-brands-solid.svg';
import product1 from './assets/product1.avif';
import product2 from './assets/product2.jpeg';
import laptopproduct from './assets/laptopproduct.avif';
import pcgamepass from './assets/pcgamepass.avif'
function Productads(){
    return(
        <>
        <div className="promo space-y-6 flex flex-col md:flex-row justify-center">
            <div className="item flex items-center mx-4 mt-6 space-x-2  cursor-pointer md:cursor-pointer md:flex-col">
                <img src={microsoftbrandssolid} width="40px" alt="" />
                <span className="font-medium md:w-[8rem] md:text-center text-sm my-4">Choose your Microsoft 365</span>
            </div>
            <div className="item flex items-center mx-4 mt-6 space-x-2 cursor-pointer md:cursor-pointer  md:flex-col">
                <img src={mirrored} width="40px" alt="" />
                <span  className="font-medium md:w-[8rem] md:text-center text-sm my-4">Explore Surface devices</span>
            </div>
            <div className="item flex items-center mx-4 mt-6 space-x-2  cursor-pointer md:cursor-pointer md:flex-col">
                <img src={xboxbrandssolid}  width="40px" alt="" />
                <span className="font-medium md:w-[8rem] md:text-center text-sm my-4" >Buy Xbox games</span>
            </div>
            <div className="item flex items-center mx-4 mt-6 space-x-2  cursor-pointer md:cursor-pointer md:flex-col">
                <img src={microsoftbrandssolid} width="40px" alt="" />
                <span className="font-medium md:w-[8rem] md:text-center text-sm my-4" >Get Windows 11</span>
            </div>
        </div>
        <div className="products flex flex-col md:flex-row md:mt-20 md:mx-20">
            <div className="row1 p-4 md:p-0 flex flex-col sm:flex-row">
                <div className="sm:m-4 sm:max-w-[50%] lg:border lg:shadow-lg md:hover:scale-110">
                    <img width=" w-full rounded-md " src={product1} alt="" />
                    <div className="p-6">
                        <h1 className="text-2xl font-semibold">Maximise the everyday with Microsoft 365</h1>
                        <p className="py-5">A sleek laptop with a 12.4-inch touchscreen, great typing experience and improved HD camera.</p>
                        <button className="cursor-pointer text-blue-700 font-semibold hover:underline">Learn More</button>
                    </div>
                </div>
                <div className="sm:m-4 sm:max-w-[50%] lg:border lg:shadow-lg md:hover:scale-110">
                    <img width=" w-full rounded-md " src={product2} alt="" />
                    <div className="p-6">
                    <h1 className="text-2xl font-semibold">Join the era of AI</h1>
                        <p className="py-5">Premium Office apps, extra cloud storage, advanced security, and more – all in one convenient subscription.</p>
                        <button className="cursor-pointer text-blue-600 font-semibold hover:underline">For 1 person</button><br />
                        <button className="cursor-pointer text-blue-700 font-semibold hover:underline">For 6 persons</button>
                    </div>
                </div>
            </div>
            <div className="row2 p-4 md:p-0 flex flex-col sm:flex-row">
                <div className="sm:m-4 sm:max-w-[50%] lg:border lg:shadow-lg md:hover:scale-110">
                    <img className="w-full rounded-md"  src={pcgamepass} alt="" />
                    <div className="p-6">
                        <h1 className="text-2xl font-semibold">Xbox Game Pass Ultimate</h1>
                        <p className="py-5">Unlock 100+ great games and EA Play, plus get your first month for ₹50. Offer available to new subscribers only.</p>
                        <button className="cursor-pointer text-blue-700 font-semibold hover:underline">Join Now</button>
                    </div>
                </div>
                <div className="sm:m-4 sm:max-w-[50%] lg:border lg:shadow-lg md:hover:scale-110">
                    <img width=" w-full rounded-md " src={laptopproduct} alt="" />
                    <div className="p-6">
                    <h1 className="text-2xl font-semibold">Get creative with Microsoft Designer</h1>
                        <p className="py-5">The next-generation of games. Your goals. Friends and family. Windows 11 was made to bring you closer to everything you love.</p>
                        <button className="cursor-pointer text-blue-600 font-semibold hover:underline">See if your PC is ready</button><br />
                    </div>
                </div>
            </div>
        </div>
        </>
    );
}
export default Productads
