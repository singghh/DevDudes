import youtubebrands from './assets/youtube-brands-solid.svg';
import xtwitterbrands from './assets/x-twitter-brands-solid.svg';
import facebookbrands from './assets/facebook-brands-solid.svg';
function MSFooter(){
    return(
        <div>
            <div className="contact flex m-5 space-x-6 items-center my-20">
                <p>Follow Microsoft</p>
                <i className="cursor-pointer w-6"><img src={facebookbrands} alt=""/></i>
                <i className="cursor-pointer w-6"><img src={xtwitterbrands} alt=""/></i>    
                <i className="cursor-pointer w-6"><img src={youtubebrands} alt=""/></i>
            </div>
            <div className="bg-[#e8e8e8]">
                <div className="md:flex px-16 py-10 md:justify-between">
                    <div class="flex flex-col">
                        <div className="font-semibold ">What's new</div><br/>
                        <div className="text-sm my-2 font-thin">Surface Pro</div>
                        <div className="text-sm my-2 font-thin">Surface Laptop</div>
                        <div className="text-sm my-2 font-thin">Microsoft Copilot</div>
                        <div className="text-sm my-2 font-thin">Microsoft 365</div>
                        <div className="text-sm my-2 font-thin">Explore Microsoft Products</div>
                        <div className="text-sm my-2 font-thin">Windows 11 apps</div>
                    </div>
                    <div className="flex flex-col">
                        <div className="font-semibold">Microsoft Store</div><br/>
                        <div className="text-sm my-2 font-thin">Account Profile</div>
                        <div className="text-sm my-2 font-thin">Download Center</div>
                        <div className="text-sm my-2 font-thin">Microsoft Store Support</div>
                        <div className="text-sm my-2 font-thin">Returns</div>
                        <div className="text-sm my-2 font-thin">Order tracking</div>
                    </div>
                    <div className="flex flex-col">
                        <div className="font-semibold">Education</div><br/>
                        <div className="text-sm my-2 font-thin">Microsoft in education</div>
                        <div className="text-sm my-2 font-thin">Devices for education</div>
                        <div className="text-sm my-2 font-thin">Microsoft Teams for Education</div>
                        <div className="text-sm my-2 font-thin">Microsoft 365 Education</div>
                        <div className="text-sm my-2 font-thin">Office Education</div>
                        <div className="text-sm my-2 font-thin">Educator training and development</div>
                        <div className="text-sm my-2 font-thin">Deals for students and parents</div>
                        <div className="text-sm my-2 font-thin">Azure for students</div>
                    </div>
                    <div className="flex flex-col">
                        <div className="font-semibold">Business</div><br/>
                        <div className="text-sm my-2 font-thin">Microsoft Cloud</div>
                        <div className="text-sm my-2 font-thin">Microsoft Security</div>
                        <div className="text-sm my-2 font-thin">Azure</div>
                        <div className="text-sm my-2 font-thin">Dynamics 365</div>
                        <div className="text-sm my-2 font-thin">Microsoft 365</div>
                        <div className="text-sm my-2 font-thin">Microsoft Advertising</div>
                        <div className="text-sm my-2 font-thin">Copilot for Microsoft 365</div>
                        <div className="text-sm my-2 font-thin">Microsoft Teams</div>
                    </div>
                    <div className="flex flex-col">
                        <div className="font-semibold">Developer & IT </div><br/>
                        <div className="text-sm my-2 font-thin">Developer Center</div>
                        <div className="text-sm my-2 font-thin">Documentation</div>
                        <div className="text-sm my-2 font-thin">Microsoft Learn</div>
                        <div className="text-sm my-2 font-thin">Microsoft Tech Community</div>
                        <div className="text-sm my-2 font-thin">Azure Marketplace </div>
                        <div className="text-sm my-2 font-thin">AppSource</div>
                        <div className="text-sm my-2 font-thin">Microsoft Power Platform</div>
                        <div className="text-sm my-2 font-thin">Visual Studio</div>
                    </div>
                    <div className="flex flex-col ">
                        <div className="font-semibold">Company</div><br/>
                        <div className="text-sm my-2 font-thin">Careers</div>
                        <div className="text-sm my-2 font-thin">About Microsoft</div>
                        <div className="text-sm my-2 font-thin">Company news</div>
                        <div className="text-sm my-2 font-thin">Privacy at Microsoft </div>
                        <div className="text-sm my-2 font-thin">Investors</div>
                        <div className="text-sm my-2 font-thin">Security</div>
                        <div className="text-sm my-2 font-thin">Sustainability</div>
                    </div>
                </div>
            </div>
            <div class="md:flex md:justify-between px-16 py-3">
                <div class="md:flex md:justify-between space-x-10 font-thin text-sm">
                    <div><br/></div>
                    <div>English(India)</div>
                    <div>Your Privacy Choices</div>
                    <div>Consumer Health Privacy</div>
                </div>
                <div class="md:flex md:justify-between space-x-10 font-thin text-sm">
                    <div><br/></div>
                    <div>Contact Microsoft</div>
                    <div>Privacy</div>
                    <div>Terms of use</div>
                    <div>Trademarks</div>
                    <div>About our ads</div>
                    <div>Microsoft 2024</div>
                </div>
            </div>
        </div>
    );
}
export default MSFooter