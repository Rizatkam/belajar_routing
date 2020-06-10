import React from 'react';
import {Button,Container} from 'react-bootstrap';
import {Link} from 'react-router-dom';

const Home =()=>{
    return(
        <Container>
        <div>Homepage</div>
        <Link to="/login">
        <Button>Login</Button>
        </Link>
        <Link to="/register">
        <Button>Register</Button>
        </Link>
        
        </Container>
    )
};
export default Home;