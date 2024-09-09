import magnifyingglasssolid from './assets/magnifying-glass-solid.svg';
import microsoftlogo from './assets/Microsoft-Logo.jpg';
import userregular from './assets/user-regular.svg';
import cartshoppingsolid from './assets/cart-shopping-solid.svg'
function Navbarms(){
    return(
        <div className="navbar flex items-center justify-between p-3">
            <div className="adjustingnav flex justify-center items-center md:order-2">
                <div className="hamburger p-4 inline-block cursor-pointer md:hidden">
                    <div className="line h-0.5 w-6 bg-black my-1"></div>
                    <div className="line h-0.5 w-6 bg-black my-1"></div>
                    <div className="line h-0.5 w-6 bg-black my-1"></div>
                </div>
                <div className="search md:hidden w-4 mr-6 cursor-pointer"><img className="w-[60%]" src={magnifyingglasssolid} alt="Search" /></div>
            </div>
            <div className="logo flex md:order-1 text-center "> 
                <div className="w-48 flex justify-center items-center cursor-pointer"><img src={microsoftlogo} alt="Microsoft" /></div>
                <div className="features md:items-center absolute md:static w-fit bg-gray-200 md:bg-white md:w-auto inset-0 md:flex md:space-x-6 md:mx-4 -translate-x-96 md:translate-x-0">
                    <div className="item hover:underline cursor-pointer">Microsoft 365</div>
                    <div className="item hover:underline cursor-pointer">Windows</div>
                    <div className="item hover:underline cursor-pointer">Office</div>
                    <div className="item hover:underline cursor-pointer">Surface</div>
                    <div className="item hover:underline cursor-pointer">Xbox</div>
                    <div className="item hover:underline cursor-pointer">Support</div>
                </div>
            </div>
            <div className="cart text-center md:order-3 flex">
                <div className="hidden hover:underline md:block mr-6 cursor-pointer">All Microsoft</div>
                <div className="mx-2 cursor-pointer">Search</div>
                <div className="hidden md:block w-4 mr-4 mt-1 cursor-pointer"><img src={magnifyingglasssolid} alt="search" /></div>
                <div className="w-4 mr-4 mt-1 cursor-pointer"><img src={cartshoppingsolid} alt="cart" /></div>
                <div className="w-4 mr-4 mt-1 cursor-pointer"><img src={userregular} alt="profile" /></div>
            </div>
        </div>
    );
}
export default Navbarms

