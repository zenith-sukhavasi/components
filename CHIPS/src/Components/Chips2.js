import Select from "@mui/material/Select";
import Chip from "@mui/material/Chip";
import MenuItem from "@mui/material/MenuItem";
import CancelIcon from '@mui/icons-material/Cancel';
import InputLabel from "@mui/material/InputLabel";
import FormControl from '@mui/material/FormControl';

import Box from "@mui/material/Box";




const Chips2 = ({skills,setSkills}) => {
    const skills2 = ["HTML", "CSS", "JAVA SCRIPT", "REACT", "ANGULAR", '.NET', 'SQL', 'MONGO DB', 'MUI', 'BOOTSTRAP', 'TAILWIND']
    // console.log(skills)
    const handlechange = (e) => {
        console.log(e.target.value)
        const value = e.target.value
        setSkills(typeof value === "string" ? value.split(",") : value)
        // setPersonName([...personName,e.target.value])
        console.log(skills)
    }
    const handleDelete = (value) => () => {
        // selected.filter((chip) => chip.key !== value);
        console.log("hi");
        console.log(skills);
        console.log(value)
        console.log(skills.filter((chip) => chip !== value))
        setSkills(skills.filter((chip) => chip !== value));
        
    };
   
 
    return (
        <div className="chips2">
            <FormControl sx={{ width: "400px" }}>
                <InputLabel id="demo-multiple-chip-label">Chip</InputLabel>
                <Select
                    labelId="demo-multiple-chip-label"
                    id="demo-multiple-chip"
                    label="AGE"
                    multiple
                    value={skills}
                    sx={{ minWidth: 120 }}
                    onMouseDown={(event) => event.stopPropagation()}
                    onChange={handlechange}
                    renderValue=
                    {(selected) => <Box sx={{ display: 'flex', gap: 1, flexWrap: "wrap", width: '100%' }}>
                        {skills.map(skill => (

                            <Chip color="primary" deleteIcon={
                                <CancelIcon
                                    onMouseDown={(event) => event.stopPropagation()}
                                />
                            } key={skill} label={skill}
                                onDelete={handleDelete(skill)} />

                        ))}
                    </Box>}
                >
                    {skills2.map((skill) => (
                        <MenuItem className="menuitem" key={skill} value={skill}>{skill}</MenuItem>
                    ))}
                </Select>
            </FormControl>

        </div>
    );
}

export default Chips2;
