
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as yup from "yup";
import { TextField } from 'formik-mui';

const Farm = () => {
  
    return ( 
        <div className="farm">
            <h1>hi</h1>
            <Formik
            initialvalue={{
                email: '',
                id: "",
                skills:'',
                name:''
             } }
            > <Form>
              <Field type="text" name="name" component={TextField} label="Name" variant="standard"></Field>
                 {/* <Field type="text" component={TextField} name='id' >
                                        </Field> */}
                {/* <Field component={TextField} name="skills" /> */}

           
                </Form>
            </Formik>

        </div>
     );
}
 
export default Farm;