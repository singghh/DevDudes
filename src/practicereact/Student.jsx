import PropTypes from 'prop-types'
function Student(props){
    return(
        <div className="flex flex-col items-center justify-center border-2 w-auto m-10 p-10 bg-purple-300 rounded-lg shadow-md font-bold font-thin font-serif">
            <p>Name of student: {props.name}</p>
            <p>Age of student: {props.age}</p>
            <p>Course of student: {props.course}</p>
        </div>
    );
}
Student.PropTypes ={
    name: PropTypes.string,
    age: PropTypes.number,
    course: PropTypes.string,
}
Student.defaultProps ={
    name: "sai",
    age: 0,
    course: "life lessons"
}
export default Student