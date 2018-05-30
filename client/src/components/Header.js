import React,  {Component} from 'react';
import axios from 'axios';
import Typography from '@material-ui/core/Typography';
//import './Header.css';


class Header extends Component {
    constructor(props) {
        super(props);
        this.state = {auth: false};
      }
     
       componentDidMount() {
         axios.get('/api/current_user').then(
             (result) => {
                console.log(result.data)
                 if (result.data) {
                     console.log('Logged in')
                     this.setState({auth: true})
                 } else {
                    console.log('Not logged in')
                    this.setState({auth: false})
                 }
             }
         )
       }

       renderContent() {
            switch (this.state.auth) {
                // case null:
                // return 'Still Deciding'
                case false:
                return <Typography align="center" variant="subheading"> <a href="/auth/google" >Google Login</a> </Typography>
                case true:
                return <Typography align="center" variant="subheading"> <a href="/api/logout">Logout</a> </Typography>
                default:
                return 'Home '
            }
       }

       

   render() {
       return(
                <div>
                    <ul>
                    {this.renderContent()}
                    </ul>   
                </div>   
       )   
   }
}

export default Header 