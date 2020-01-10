export default class booking extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            users: [Ram, Shyam, Sita, Gita, Ramesh, Raghav]
        }
    }
    render(){
        return (
            <div>
                <ul>
                    {
                        this.state.map.users(user =>
                        <li>{user.name}</li>)
                    }
                </ul>
            </div>
        )
    }
}