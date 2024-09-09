import profilePic from './assets/profilepic.jpg'
function Card(){
    return(
        <div class="inline-block">
        <div className="border-2 bg-slate-200 rounded-md  max-w-72 shadow-lg p-10 m-10 flex flex-col justify-center items-center" >
            <img className="w-2/4 h-auto mb-10 rounded-full " src={profilePic} alt="" />
            <h2 className="font-bold mb-5 text-3xl" >Hello dude</h2>
            <p className="text-center font-serif font-thin">I usually talk to people in this way.</p>
        </div>
        </div>
    );
}
export default Card