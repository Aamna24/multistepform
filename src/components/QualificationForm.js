import React, {useState} from 'react'
import {Form, Button} from 'react-bootstrap'
import {useDispatch, useSelector} from 'react-redux'
import FormContainer from './FormContainer'
import {saveQualificationDetails} from '../actions/formActions'
import FormCompletetionSteps from './FormCompletetionSteps'
const QualificationForm = ({history}) => {

    
    const form = useSelector(state=> state.form)
    
    const {qualificationDetails} = form
    

    const [level, setLevel] = useState(qualificationDetails.level) 
    const [mathGrades, setMathGrades] = useState(qualificationDetails.mathGrades)
    const [englishGrades, setEnglishGrades] = useState(qualificationDetails.englishGrades)
    
   const dispatch = useDispatch()
   
    const submitHandler=(e)=>{
        e.preventDefault()
        dispatch(saveQualificationDetails({level, mathGrades,englishGrades}))
            history.push('/oppurtunities')
    
    }

    return (
        <FormContainer>
            <FormCompletetionSteps step1 step2 step3 step4/>

            <h1>Step 4: Qualification Details</h1>
            
            <Form onSubmit={submitHandler}>
            <Form.Group controlId='level'>
                    <Form.Label>What is your highest level of qualification? </Form.Label>
                    <Form.Control
                     as ="select"
                     
                      value={level} 
                      onChange={(e)=> setLevel(e.target.value)}>
                           <option value="">[Please select one]</option>
                           <option value="None">None</option>
              <option value="Entry Level">
                Entry Level - (e.g. Basic/Foundation Level, Word Power or Number
                Power, GCF Entry Level Award/Certificate)
              </option>
              <option value="Level 1">
                Level 1 - (e.g. GSCE(5 or more grades D-G or fewer than 5 grades
                A*-C), AS Level, CSE below grade 1, GNVQ Foundation, QCF Level 1
                Award/Certificate/ Diploma or NVQ 1)
              </option>
              <option value="Level 2">
                Level 2 (e.g. 5 or more GCSE/O Levels at grades A* - C, 1 A
                Level, 2/3 AS Levels, 5 or more CSE grade 1’s, GNVQ
                Intermediate, QCF Diploma Level 2)
              </option>
              <option value="Level 3">
                Level 3 - (e.g. 4 or more AS Levels, 2 or more A Levels, BTEC
                Diploma, BTEC Extended Diplomas, QAA Access to Higher Education,
                QCF Diplomas Level 3)
              </option>
              <option value="Level 4">
                Level 4 - (e.g. Higher National Certificate (HNC), QCF Level 4
                Award/Certificate/Diploma or NVQ Level 4)
              </option>
              <option value="Level 5">
                Level 5 - (e.g. Foundation Degree, Higher National Diploma (HND)
                or QCF Level 5 Award/Certificate/Diploma)
              </option>
              <option value="Level 6">
                Level 6 - (e.g. Bachelors Degree, Professional Graduate
                Certificate in Education (PGCE) or QCF Level 6
                Award/Certificate/Diploma)
              </option>
              <option value="Level 7">Level 7+</option>
                          </Form.Control>           
                </Form.Group>

                <Form.Group controlId='mathGrades'>
                    <Form.Label>Maths GCSE Grades:</Form.Label>
                    <Form.Control
                     type='text' 
                    
                     value={mathGrades}
                     onChange={(e)=> setMathGrades(e.target.value)} 
                     ></Form.Control>           
                </Form.Group>

                <Form.Group controlId='englishGrades'>
                    <Form.Label>English GCSE Grades:</Form.Label>
                    <Form.Control
                     type='text' 
                    
                     value={englishGrades}
                     onChange={(e)=> setEnglishGrades(e.target.value)} 
                     ></Form.Control>           
                </Form.Group>
              
               

                <Button onClick={e=>{
                    history.push('/employment')
                }} variant="primary"

                className='mr-5'
                
                >Back</Button>
                

                <Button type="submit" variant="primary">Continue</Button>
                
            </Form>
            
        </FormContainer>
    )
}

export default QualificationForm
