import { Box, Button, TextField, Typography } from "@mui/material"
import AddIcon from '@mui/icons-material/Add';
import { useState } from "react";
import { Delete } from "@mui/icons-material";
const InputBasic = () => {
    const [value, setValue] = useState({ name: "" });
    const [name, setName] = useState({ name: "" });
    const addItem = (e) => {
        e.preventDefault()
        setValue({
            [name]: name
        });
    }
    console.log(value);

    return (
        <div flexDirection="column">
            <Box display='flex' padding={2}>
                <TextField sx={{ width: '500px' }} id="outlined-basic" label="Enter a fruits" variant="outlined" name="name" value={name.name} onChange={(e) => {
                    setName({ ...name, [e.target.name]: e.target.value })
                }} />
                <Button sx={{ marginLeft: '5px' }} variant="contained" startIcon={<AddIcon />} onClick={addItem} >Add</Button>
            </Box>
            <Box display="flex" padding={3}>
                {/* {value.map((e) => { */}
                <Typography color="blue" marginTop={1}></Typography>
                {/* })} */}
                <Button variant="text" startIcon={<Delete sx={{ color: 'red' }} />} />
            </Box>
        </div >
    )

}
export default InputBasic