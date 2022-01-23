import { Field, Form } from "formik";
import { TextField } from "formik-mui";





const Form1 = ({nextStep}) => {
    return ( <div className="Form1">
        {props =>(
        <Form>
            <Field type="text" name="name" component={TextField} label="Name" variant="standard"></Field>
            <button  onClick={nextStep} >nextStep</button>
            {/* <button  onClick={nextStep} disabled={!props.isValid}>nextStep</button> */}
        </Form>)}
    </div> );
}
 
export default Form1;