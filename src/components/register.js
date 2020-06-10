import React, {useState, Component} from 'react';
import {Container,Form,Button} from 'react-bootstrap';

class Register extends Component{
    render(){
        const{history}=this.props;
        return(
            <Container>
            Page Register
            <Button onClick={()=>history.goBack()}>
            Go Back
          </Button>
            </Container>
        )

    }
}
export default Register;