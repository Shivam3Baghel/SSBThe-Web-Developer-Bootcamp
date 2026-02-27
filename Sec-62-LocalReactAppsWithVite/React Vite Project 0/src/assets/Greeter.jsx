export default function Greeter(props){
        console.log(props);
    console.log(props.person);
    return <h1>Hi there {props.person}!</h1>
}