import { Field, Form, Formik } from "formik";
import { TextField } from "formik-mui";
import * as yup from "yup";




const Form3 = ({data,handleSubmit,prevStep}) => {
    // const handleSubmit=(values)=>{
    //     // setData((data)=>{...data,...values});
    //     setData((prev) => ({ ...prev, ...values }));
    //     console.log(data);
    // }
    return ( <div className="Form3">
         <Formik
        initialValues={data}
        validationSchema={yup.object({
            name: yup.string().required("enter name"),
           weight:yup.number().min(10,"weight too low").required("enter weight").max(200,"weight too high"),
        })}
        onSubmit={handleSubmit}
        >  
        {(props)=>( <Form>
            <Field type="text" name="name" component={TextField} label="Name" variant="standard"></Field>
            <Field type="text" name="weight" component={TextField} label="weight" variant="standard"></Field>
            <button type="button" onClick={prevStep} >prevstep</button>
            <button type="submit" disabled={!props.isValid}>Submit</button>
        </Form>)}
        </Formik>
    </div> );
}
 
export default Form3;