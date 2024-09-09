function Usergreeting(props){
    if(props.isLoggedin){
        return <h2>Welcome         {props.username}</h2>
    }
    else{
        return <h2>Please Log in to continue</h2>
    }
}
export default Usergreeting 