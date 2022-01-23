import { Formik } from "formik";
import { useState } from "react";
import * as yup from "yup";
import Form1 from "./Form1";
import Form2 from "./Form2";
import Form3 from "./Form3";


const Formi2 = () => {
    const [step, setStep] = useState(0)
    const nextStep = () => {
        setStep(step + 1)
    }
    const prevStep = () => {
        setStep(step - 1)
        console.log(step)
    }

    return (
        <div className="Formi2">

            <Formik
                initialValues={{
                    name: "",
                    age: "",
                    weight: "",
                }}

                validationSchema={yup.object({
                    name: yup.string().required("enter name"),
                    age: yup.number().required("enter age"),
                    weight:yup.number().required("enter weight")
                })}
            >
                {props => (
                    <div className="forms">
                       {step ===0?<Form1 isValid={props.isValid} nextStep={nextStep} ></Form1>:
                       step ===1?<Form2 props={props} nextStep={nextStep} prevStep={prevStep}></Form2>
                       :<Form3 isValid={props.isValid}  prevStep={prevStep}></Form3>}
                    </div>
                )}
            </Formik>
        </div>
    );
}

export default Formi2;