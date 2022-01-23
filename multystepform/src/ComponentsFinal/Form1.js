import { Field, Form } from "formik";
import { TextField } from "formik-mui";





const Form1 = ({isValid,nextStep}) => {
    return ( <div className="Form1">

        <Form>
            <Field type="text" name="name" component={TextField} label="Name" variant="standard"></Field>
            <Field type="text" name="age" component={TextField} label="age" variant="standard"></Field>
            <button  onClick={nextStep} disabled={!isValid} >nextStep</button>
            {/* <button  onClick={nextStep} disabled={!props.isValid}>nextStep</button> */}
        </Form>
    </div> );
}
 
export default Form1;