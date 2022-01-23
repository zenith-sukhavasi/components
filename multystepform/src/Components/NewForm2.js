import { Field, Form, Formik } from "formik";
import { TextField } from "formik-mui";





const NewForm2 = ({isValid,nextStep,prevStep}) => {
    console.log(isValid,"isvalid")
    return ( <div className="Form2">
            <Field type="text" name="name" component={TextField} label="Name" variant="standard"></Field>
            <button  onClick={nextStep} disabled={!isValid} >nextStep</button>
            <button onClick={prevStep}>prevstep</button>
    </div> );
}
 
export default NewForm2;