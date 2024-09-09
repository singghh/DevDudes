import forb1 from './assets/forb1.webp';
import forb2 from './assets/forb2.webp';
import forb3 from './assets/forb3.avif';
import forb4 from './assets/forb4.avif';
function Productads2(){
    return(
        <div className="forBusiness flex flex-col md:flex-row md:mt-20 md:mx-20">
            <div className="row1 p-4 md:p-0 flex flex-col sm:flex-row">
                <div className="sm:m-4 sm:max-w-[50%] lg:border lg:shadow-lg md:hover:m-[0.2px]">
                    <img className="w-full rounded-md" src={forb1} alt="" />
                    <div className="p-6">
                        <h1 className="text-2xl font-semibold">Visual Studio 2022</h1>
                        <p className="py-5">A sleek, portable laptop featuring a great typing experience, Windows 11 Pro and professional-grade performance</p>
                        <button className="cursor-pointer text-blue-700 font-semibold hover:underline "> Learn more </button>
                    </div>
                </div>
                <div className="sm:m-4 sm:max-w-[50%] lg:border lg:shadow-lg md:hover:m-[0.2px]">
                    <img className="w-full rounded-md" src={forb2} alt=""/>
                    <div className="p-6">
                        <h1 className="h1 text-2xl font-semibold">Xbox Series X</h1>
                        <p className="py-5">Premium Office apps, extra cloud storage, advanced security, and more – all in one
                            convenient subscription.</p>
                        <button class="cursor-pointer text-blue-700 font-semibold hover:underline">Learn more</button>
                    </div>
                </div>
            </div>
            <div className="row2 p-4 md:p-0 flex flex-col sm:flex-row ">
                <div className="item sm:m-4 sm:max-w-[50%] lg:border lg:shadow-lg md:hover:m-[0.2px]">
                    <img className="w-full rounded-md" src={forb3} alt=""/>
                    <div className="p-6 pt-11">
                        <h1 className="h1 text-2xl font-semibold">Copilot for Microsoft 365</h1>
                        <p className="py-5">Stay a step ahead with powerful apps for productivity, connection and security.</p>
                        <button className="cursor-pointer text-blue-700 font-semibold hover:underline">Shop now </button>
                    </div>
                </div>
                <div className="item sm:m-4 max-w-full sm:max-w-[50%] lg:border lg:shadow-lg md:hover:m-[0.2px]">
                    <img className="w-full rounded-md" src={forb4} alt=""/>
                    <div className="p-6">
                        <h1 className="h1 text-2xl font-semibold">Surface for Business</h1>
                        <p className="py-5">The next-generation of games. Your goals. Friends and family. Windows 11 was made to
                            bring you closer to everything you love.</p>
                        <button className="cursor-pointer text-blue-700 font-semibold hover:underline">Sign up for free</button>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default Productads2