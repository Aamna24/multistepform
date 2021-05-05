import React, {useState} from 'react'
import {Form, Button} from 'react-bootstrap'
import {useDispatch, useSelector} from 'react-redux'
import FormContainer from './FormContainer'
import {saveIdProof} from '../actions/formActions'
import FormCompletetionSteps from './FormCompletetionSteps'
import SignaturePad from "react-signature-canvas";

const Proof = ({history}) => {

    
    const form = useSelector(state=> state.form)
    const details = useSelector(state=> state.detailsForm)
    const {detailsFormData} = details
    
    const {personalDetails} = form
    

    const [idPic, setID] = useState() 
   
   const [trimmedDataURL, setTrimmed] = useState(null)
   const dispatch = useDispatch()
   
    const submitHandler=(e)=>{
        
        e.preventDefault()
        const localImageUrl =  window.URL.createObjectURL(idPic)
        dispatch(saveIdProof({localImageUrl,trimmedDataURL}))
        
    
    }
    //var sigPad = {};
    const [sigPad, setSigPad] = useState({})

    const clearSig = () => {
      sigPad.clear();
      console.log("on click:", trimmedDataURL);
    };
  
   const trim = () => {
      setTrimmed(sigPad.getTrimmedCanvas().toDataURL("image/png"),
      );
    };
  
    return (
        <FormContainer>
            <FormCompletetionSteps step1 step2 step3 step4 step5 step6 step7/>

            <h1>Step7: ID Proof</h1>
            
            <Form onSubmit={submitHandler}>
                <Form.Label>The coures are fully funded.Proof of identity is mandatory to access the funding. If this is not provided you will be ineligible for funding and will not be able to access your chosen course.</Form.Label>
                <Form.Label>Examples of acceptable ID evidences are: Passport / Birth Certificate / Full Drivers License (provisional licences are not acceptable)</Form.Label>
        
        <Form.Group controlId='title'>

                    <Form.Label>Please upload one of the following ID Proofs- Passport / Birth Certificate / Full Drivers License (provisional licences are not acceptable)</Form.Label>
                    <Form.Control
                     type='file' 
                     placeholder='Enter address'
                      
                      onChange={(e)=> setID(e.target.files[0])}></Form.Control>           
                </Form.Group>

             <Form.Label as="legend">Please Sign the Application</Form.Label>
                <SignaturePad
            id="canvas"
            penColor="green"
            className="mr-6"
            ref={(ref) => {
                setSigPad(ref)
              }}
            canvasProps={{
              width: 500,
              height: 200,
              className: "sigCanvas",
            }}
          />
                 <br/>     
        <Button   className='mr-5 ' onClick={trim}>Sign </Button>
        <Button onClick={clearSig}>Clear Signature</Button>
                <br/>

                <br/>
                <br/>

               
                <Button onClick={e=>{
                    history.push('/declaration')
                }} variant="primary"

                className='mr-5'
                
                >Back</Button>
                

                <Button type="submit" variant="primary">Save Progrss & Continue</Button>
                
            </Form>
            
        </FormContainer>
    )
}

export default Proof
