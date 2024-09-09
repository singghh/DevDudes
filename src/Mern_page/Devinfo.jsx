import Timeline from './Timeline.jsx';
function Devinfo(){
    const features = [
        {
            heading:"Roadmaps and Guided paths",
            subheading:"Structured and Struggle less path",
            direction: "right"
        },
        {
            heading:"Youtube Utilization",
            subheading:"Specified tutorials",
            direction: "left"
        },
        {
            heading:"Blogs and Articles",
            subheading:"Conceptual Understanding",
            direction: "right"
        },
        {
            heading:"Projects",
            subheading:"Disclosing Talent",
            direction: "left"
        },
        {
            heading:"Workshops and Webinars",
            subheading:"Getting Insights",
            direction: "right"
        },
        {
            heading:"Hackathons",
            subheading:"Practical Experience",
            direction: "left"
        },
        {
            heading:"Networking and Opportunities",
            subheading:"Know the unknown",
            direction: "right"
        },
        {
            heading:"Implement Ideas",
            subheading:"Good Outcomes",
            direction: "left"
        },
        {
            heading:"Discussions and Tech news",
            subheading:"Update yourself",
            direction: "right"
        },
    ]
    return(
        <div className=''>
            <Timeline features={features}/>
        </div>
    );
}
export default Devinfo