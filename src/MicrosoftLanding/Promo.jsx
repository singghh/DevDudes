import edgepromo from './assets/edgeBackground.avif';
function Promo(){
    return(
        <div className="Promo relative mt-8 ">
            <img className="w-[100%]" src={edgepromo} alt="" />
            <div className="lg:p-12 lg:w-[22em] lg:absolute lg:bg-white lg:top-[6.25rem] lg:border border-2 rounded-md m-5 shadow-lg p-5     hover:lg:w-[28em] md:hover:scale-110 lg:shadow-lg lg:rounded-lg lg:left-[3em]">
                <h1 className="text-3xl font-semibold">Microsoft Edge</h1>
                <p className="py-5">World-class performance with more privacy, more productivity and more value while you browse</p>
                <button className="text-white bg-[#0067b8] font-bold px-4 py-2 rounded-md hover:bg-blue-800 cursor-pointer">Download now</button>
            </div>
        </div>
    );
}
export default Promo