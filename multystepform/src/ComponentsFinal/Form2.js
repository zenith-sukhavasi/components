import { Field, Form, Formik } from "formik";
import { TextField } from "formik-mui";





const Form2 = ({props,nextStep,prevStep}) => {
    console.log(props.isValid,"isvalid");
    return ( <div className="Form2">
        <Form>
            <Field type="text" name="name" component={TextField} label="Name" variant="standard"></Field>
            <button  onClick={nextStep} disabled={!props.isValid} >nextStep</button>
            <button onClick={prevStep}>prevstep</button>
        </Form>
    </div> );
}
 
export default Form2;