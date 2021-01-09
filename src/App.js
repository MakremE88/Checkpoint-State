import React from "react";
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import {Container, Row, Col} from 'react-bootstrap';
import MyImg from "./nature.jpg"
class App extends React.Component {
   state = {
     Person: {
       fullName: "Makrem Ellouze",
       bio: "Produit",
       imgSrc: MyImg,
       profession: "Developpeur",
      },
       show: true
    };
    handleShowPerson = () => {
      this.setState({
        show: !this.state.show
      });
    
    };
    componentDidMount() {
      setInterval(() => {
        console.log ("Time since component has mounted")
      }, 1000)
    }

    render() {
      return (
        <>
          <Container>
            <Row className="justify-content-md-center text-center mt-5">
              {this.state.show && (
                <>
                  <Col xs lg="12" className="text-primary"><h1>{this.state.Person.fullName}</h1></Col>
                  <Col xs lg="12" className="text-secondary"><h2>{this.state.Person.bio}</h2></Col>
                  <Col xs lg="12" className="text-secondary"><h2>{this.state.Person.profession}</h2></Col><Col xs lg="12" className="mt-3 mb-3"><img src={this.state.Person.imgSrc} width={150} height={150}alt="Nature"></img></Col>

                </>
              )}
              <Button variant="outline-primary" className="mt-3" onClick={this.handleShowPerson}>Click here</Button>
            </Row>
          </Container>
        </>
      );
    }
  }
export default App;