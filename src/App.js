import logo from './logo.svg';
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import CardOne from './CardOne';
import CardTwo from './CardTwo';
import CardThree from './CardThree';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './App.css'

import './App.css';

function App() {
  return (

    <Container style={{position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%,-50%)'}}>
      <Row>
       <Col> <CardOne title="$0/month" subtitle="FREE" /></Col>
       <Col><CardTwo title="$9/month" subtitle="PLUS" /></Col> 
       <Col><CardThree title="$49/month" subtitle="PRO" /></Col> 
      </Row>
      </Container>
   


  );
}

export default App;
