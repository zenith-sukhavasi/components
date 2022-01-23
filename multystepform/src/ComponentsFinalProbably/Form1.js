import { Field, Form,Formik } from "formik";
import { TextField } from "formik-mui";
import * as yup from "yup";




const Form1 = ({data,nextStep,handleSubmit}) => {
    return ( <div className="Form1">
        <Formik
        initialValues={data}
        validationSchema={yup.object({
            name: yup.string().required("enter name"),
            age: yup.number().required("enter age") 
        })}
        onSubmit={handleSubmit}
        >
            {(props) => (
                    <Form>
                    <Field type="text" name="name" component={TextField} label="Name" variant="standard"></Field>
                    <Field type="text" name="age" component={TextField} label="age" variant="standard"></Field>
                    <button type="submit"  disabled={!props.isValid} >nextStep</button>
                   
                </Form>
            )}
        </Formik>
    </div> );
}
 
export default Form1;