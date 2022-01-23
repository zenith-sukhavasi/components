import { Field, Form, Formik } from "formik";
import { TextField } from "formik-mui";





const Form3 = ({prevStep}) => {
    return ( <div className="Form3">
        <Form>
            <Field type="text" name="name" component={TextField} label="Name" variant="standard"></Field>
            <button onClick={prevStep}>prevstep</button>
        </Form>
    </div> );
}
 
export default Form3;