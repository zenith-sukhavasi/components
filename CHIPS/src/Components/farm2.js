import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as yup from "yup";
import { TextField } from 'formik-mui';
import Chips from './Chips';
import { useContext, useState,useEffect } from 'react';
import { SkillsContext } from '../Context/Skills';
import Chips2 from './Chips2';
import { Button } from '@mui/material';


const Farm2 = () => {
    const [iserror,setiserror]=useState(false)
    const [skills, setSkills] = useContext(SkillsContext)
    console.log(skills)
    const handleSubmit = (values) => {
        console.log(values);
    }
    const handlechange = (e) => {
        console.log(e.target.value)
        const value = e.target.value
        setSkills(typeof value === "string" ? value.split(",") : value)
        // setPersonName([...personName,e.target.value])
        console.log(skills)
    }
    useEffect(() => {
        console.log("called")
         skills.length >=2?setiserror(false) : setiserror(true)
    },[skills])
    const blurred = () => {
        console.log("blur")
        skills.length >=2?setiserror(false) : setiserror(true)
    }
    
    // const handlechange = (e) => {
    //     console.log(e.target.value)
    //     const value = e.target.value
    //     setFieldValue(typeof value === "string" ? value.split(",") : value)
    //     // setSkills([...skills,e.target.value])
    //     console.log(skills)
    // }
    // const handleDelete = (value) => () => {
    //     // selected.filter((chip) => chip.key !== value);
    //     console.log("hi");
    //     console.log(skills);
    //     setFieldValue(skills.filter((chip) => chip !== value));
    // };
    return (
        <div className="farm">
            <h1>hi</h1>

            <Formik
                initialValues={{
                    email: '',
                    id: "",
                    skills: skills,
                    name: ''
                }}
                enableReinitialize={true}
                validationSchema={
                    yup.object({
                        name: yup.string().required("enter name"),
                         skills: yup.array().min(2,"min 2 needed").required("enter skills")
                        
                    })
                }
                onSubmit={handleSubmit}
            >
                <Form>
                    <Field type="text" name="name" className="input" component={TextField} label="Name" variant="standard"></Field>

                    {/* <Field name="skills" type="text">
                        {({ field: { value }, form: { setFieldValue } }) => (
                            <div className="x">
                                <Chips2 skills={value} 
                                setSkills={setSkills}
                              ></Chips2> 

                                {/* <Chips2 skills={value} handlechange={(e) => (console.log(e.target.value), 
                                setFieldValue('skills', e.target.value))}
                                setFieldValue={setFieldValue}
                                setSkills={setSkills}
                              ></Chips2> */}
                            {/* </div>
                        )}
                    </Field> */} 

                    {/* <Field type="text" name="skills" component={Chips} label="skills" variant="standard"></Field> */}
                    <Chips iserror={iserror} className="chips"  ></Chips>
                    <ErrorMessage  className="error" name="skills"></ErrorMessage>
                    <Button variant="contained" type="submit">Submit</Button>  
                </Form>
            </Formik>
        </div>
    );
}

export default Farm2;
