import { Field, Form, Formik } from "formik";
import { TextField } from "formik-mui";
import * as yup from "yup";




const Form2 = ({data,nextStep,prevStep,handleSubmit}) => {
  
    return ( <div className="Form2">
           <Formik
        initialValues={data}
        validationSchema={yup.object({
            name: yup.string().required("enter name"),
            
        })}
        onSubmit={handleSubmit}
        >
        {(props) => (
            <Form>
            <Field type="text" name="name" component={TextField} label="Name" variant="standard"></Field>
            <button type="submit"  disabled={!props.isValid} >nextStep</button>
            <button onClick={prevStep}>prevstep</button>
        </Form>
        )}
        </Formik>
    </div> );
}
 
export default Form2;