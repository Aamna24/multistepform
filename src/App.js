
import './App.css';
import {BrowserRouter as Router, Route} from 'react-router-dom'
import {Container} from 'react-bootstrap'
import Header from './components/Header'
import DetailsForm from './components/DetailForm'
import PersonalDetails from './components/PersonalDetails'
import EmployemntForm from './components/EmplyementForm'
import QualificationForm from './components/QualificationForm'
import EqualOppurtunities from './components/EqualOppurtunities'
import DeclarationForm from './components/Declaration'
import Proof from './components/Proof'
import Hello from './components/Hello'
const App=()=> {
  return (
    
    <Router>

    <Header/>
      <Container>
        <Route path="/proof" component={Proof}/>
        <Route path="/declaration" component={DeclarationForm} />
      <Route path="/oppurtunities" component={EqualOppurtunities}/>
      <Route path="/hello" component={Hello}/>

        <Route path="/qualification" component={QualificationForm}/>
        <Route path="/employment" component={EmployemntForm}/>
      <Route path="/personal" component={PersonalDetails}/>
        <Route path="/" component={DetailsForm} exact/>
       

      </Container>
  
    
    </Router>
  );
}

export default App;
