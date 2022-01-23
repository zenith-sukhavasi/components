import { Field, Form } from "formik";
import { TextField } from "formik-mui";





const NewForm1 = ({props,nextStep}) => {
    console.log(props.isValid,"isvalid")
    return ( <div className="Form1">
        
            <Field type="text" name="name" component={TextField} label="Name" variant="standard"></Field>           
            <Field type="text" name="age" component={TextField} label="age" variant="standard"></Field>
            <button  onClick={nextStep} disabled={!props.isValid} >nextStep</button>
       
    </div> );
}
 
export default NewForm1;