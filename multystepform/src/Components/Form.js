import {Form, Formik } from "formik";
import { useState } from "react";
import * as yup from "yup";
import Form1 from "./Form1";
import Form2 from "./Form2";
import Form3 from "./Form3";
import NewForm1 from "./newForm1";
import NewForm2 from "./NewForm2";



const Formi = () => {
    const [step,setStep]=useState(0)
    const nextStep = ()=>{
        setStep(step+1)
    }
    const prevStep = ()=>{
        setStep(step-1)
        console.log(step)
    }
    return ( 
        <div className="form">
            <Formik 
             initialValues={{
                 name: "",
                 age: "",
             }} 
             
             validationSchema={yup.object({
                 name:yup.string().required("enter name"),
                 age:yup.number().required("enter age")
             })}
             > 
             {props=>(
                 <div className="forms">
                     <Form2 props={props} nextStep={nextStep} prevStep={prevStep}></Form2>
                 </div>
             )}


                {/* {props =>(
             <Form>
                 {console.log(props.isValid)}
             {step===0? <NewForm1 props={props} nextStep={nextStep}></NewForm1>: <NewForm2 isValid={props.isValid}  nextStep={nextStep} prevStep={prevStep}></NewForm2>}
             </Form>)} */}



              {/* {step? <Form1 nextStep={nextStep}></Form1>: <Form2  nextStep={nextStep} prevStep={prevStep}></Form2>}   */}
              {/* {step>1? <Form3   prevStep={prevStep}></Form3>: null}   */}
               {/* {step==0? <Form1 nextStep={nextStep}></Form1>:
               step>1? <Form3   prevStep={prevStep}></Form3>: <Form2  nextStep={nextStep} prevStep={prevStep}></Form2>}    */}
              {/* <Form1></Form1>
                <Form2></Form2> */}
               
            </Formik>
        </div>
     );
}
 
export default Formi;
