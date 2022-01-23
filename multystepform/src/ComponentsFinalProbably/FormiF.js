import { Formik } from "formik";
import { useState } from "react";
import * as yup from "yup";
import Form1 from "./Form1";
import Form2 from "./Form2";
import Form3 from "./Form3";


const FormiF = () => {
    const [data, setData] = useState({
        name: "",
        age: "",
        weight: "",
    })
    const [step, setStep] = useState(0)
    const nextStep = () => {
        setStep(step + 1)
    }
    const prevStep = () => {
        setStep(step - 1)
        console.log(step)
    }
    const handleSubmit=(values)=>{
        // setData((data)=>{...data,...values});
        setData((prev) => ({ ...prev, ...values }));
        console.log(data);
        nextStep()
    }

    return (
        <div className="FormiF">

            <div className="forms">
                {step === 0 ? <Form1 data={data} nextStep={nextStep} handleSubmit={handleSubmit}></Form1> :
                    step === 1 ? <Form2 data={data} nextStep={nextStep} prevStep={prevStep} handleSubmit={handleSubmit}></Form2>
                        : <Form3 data={data} setData={setData} prevStep={prevStep} handleSubmit={handleSubmit}></Form3>}
            </div>
        </div>
    );
}

export default FormiF;