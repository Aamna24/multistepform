import React, {useState} from 'react'
import {Form, Button} from 'react-bootstrap'
import {useDispatch, useSelector} from 'react-redux'
import FormContainer from './FormContainer'
import {saveDeclarationDetails} from '../actions/formActions'
import FormCompletetionSteps from './FormCompletetionSteps'

const DeclarationForm = ({history}) => {

    
    const form = useSelector(state=> state.form)
    
    const {declaration} = form
    const [consent, setConsent]=useState('')
    const [prefContact, setPrefContact] = useState('')
    const [decl, setDeclare] = useState('')
    const [prefMark, setPrefMark] = useState('')
   const dispatch = useDispatch()
   
    const submitHandler=(e)=>{
        e.preventDefault()
        dispatch(saveDeclarationDetails({prefContact,prefMark}))
            history.push('/proof')
    
    }

    return (
        <FormContainer>
            <FormCompletetionSteps step1 step2 step3 step4 step5 step6/>

            <h1>Declaration</h1>
            
            <Form onSubmit={submitHandler}>
            <Form.Group controlId='level'>
                    <Form.Label >Contact Preferences</Form.Label>
                    <br/>
                    <Form.Label>
                    <input
                    type="checkbox"
                    label="I consent to being contacted regarding my enrolment and course"
                    name='consent'
                    value={consent}
                    //checked
                    onChange={e=>setConsent(e.target.value)}
                    className='mr-2'
                    />
                       I consent to being contacted regarding my enrolment and course</Form.Label>

                   
                         
                </Form.Group>

                <Form.Group controlId=''>
                    <Form.Label >Preferred Contact Method</Form.Label>
                    <br/>
                    
                    <Form.Check
                    type="checkbox"
                    label="Email"
                    name='email'
                    value='email'
                   
                    onChange={e=>setPrefContact(e.target.value)}
                    className='mr-2'
                    >
                      

                   </Form.Check>

                   <Form.Check
                    type="checkbox"
                    label="Email Or Phone "
                    name='both'
                    value='both'
                    
                    onChange={e=>setPrefContact(e.target.value)}
                    className='mr-2'
                    >
                      

                   </Form.Check>

                   <Form.Check
                    type="checkbox"
                    label="Email, Phone or Post"
                    name='post'
                    value='post'
                    
                    onChange={e=>setPrefContact(e.target.value)}
                    className='mr-2'
                    >
                      

                   </Form.Check>
                         
                </Form.Group>

                
                <Form.Group controlId=''>
                    <Form.Label >Preferred Marketing Method</Form.Label>
                    <br/>
                    
                    <Form.Check
                    type="checkbox"
                    label="Email"
                    name='email'
                    value='email'
                   
                    onChange={e=>setPrefMark(e.target.value)}
                    className='mr-2'
                    >
                      

                   </Form.Check>

                   <Form.Check
                    type="checkbox"
                    label="Email Or Phone "
                    name='both'
                    value='both'
                    
                    onChange={e=>setPrefMark(e.target.value)}
                    className='mr-2'
                    >
                      

                   </Form.Check>

                   <Form.Check
                    type="checkbox"
                    label="Email, Phone or Post"
                    name='post'
                    value='post'
                    
                    onChange={e=>setPrefMark(e.target.value)}
                    className='mr-2'
                    >
                      

                   </Form.Check>
                         
                </Form.Group>

                
                <Form.Group controlId=''>
                    <Form.Label >Declaration</Form.Label>
                    <p>I confirm that the information provided in this application is correct and complete.</p>
                    <p>I agree to My Free Course processing the information provided in accordance with current Data Protection legislation.</p>
                    <p>I declare that I have correct and fully identified my prior qualifications.</p>
                    <p>I agree to make every effort to complete the course, and understand that by withdrawing from the course I may be required to pay £25 administration fee.</p>

                   <Form.Check
                    type="checkbox"
                    label="I confirm and agree to above"
                    name='decl'
                    value='decl'
                    
                    onChange={e=>setDeclare(e.target.value)}
                    className='mr-2'
                    >
                      

                   </Form.Check>
                         
                </Form.Group>

               
              
               

                <Button onClick={e=>{
                    history.push('/oppurtunities')
                }} variant="primary"

                className='mr-5'
                
                >Back</Button>
                

                <Button type="submit" variant="primary">Continue</Button>
                
            </Form>
            
        </FormContainer>
    )
}

export default DeclarationForm
