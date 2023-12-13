// import { Box, Button, TextField, Typography } from "@mui/material"
// import AddIcon from '@mui/icons-material/Add';
// import { useState } from "react";
// import { Delete } from "@mui/icons-material";

// const inital = [{ name: "Ram" }]
// const InputBasic = () => {
//     const [value, setValue] = useState();
//     const [name, setName] = useState(inital);

//     const addItem = (e) => {
//         e.preventDefault()
//     }
//     console.log(value);

//     return (
//         <div flexDirection="column">
//             <Box display='flex' padding={2}>
//                 <TextField sx={{ width: '500px' }} id="outlined-basic" label="Enter a fruits" variant="outlined" name="name" value={ } />
//                 <Button sx={{ marginLeft: '5px' }} variant="contained" startIcon={<AddIcon />} onClick={addItem} >Add</Button>
//             </Box>
//             <Box display="flex" padding={3}>
//                 {inital.map((e) => {
//                     return (
//                         <Typography color="blue" marginTop={1}>{e.name}
//                             <Button variant="text" startIcon={<Delete sx={{ color: 'red' }} />} />
//                         </Typography>)
//                 })}
//             </Box>
//         </div >
//     )

// }
// export default InputBasic