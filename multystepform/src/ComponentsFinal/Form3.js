import { Field, Form, Formik } from "formik";
import { TextField } from "formik-mui";





const Form3 = ({isValid,prevStep}) => {
    return ( <div className="Form3">
        <Form>
            <Field type="text" name="name" component={TextField} label="Name" variant="standard"></Field>
            <Field type="text" name="weight" component={TextField} label="weight" variant="standard"></Field>
            <button onClick={prevStep}>prevstep</button>
            <button type="submit" Disabled={!isValid}>Submit</button>
        </Form>
    </div> );
}
 
export default Form3;