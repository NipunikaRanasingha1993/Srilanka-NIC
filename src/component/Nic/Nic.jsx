import Card from '@mui/material/Card';
import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import lankaNic from 'lanka-nic-2019';
import {useState} from 'react';



export default function Nic(){

    const [nic,setNic] = useState('');
    const [birthday,setBirthday] = useState('');
    const [gender,setGender] = useState('');


    const clickSubmit =()=>{
      const data = lankaNic.infoNic(nic);
      console.log(data)
      if(data.isValidated){
        setBirthday(data.birthday);
        setGender(data.gender);
      }else{
        alert('invalid..!')
      }
      // lankaNic.validateNic('12345678912');
      // lankaNic.swapNic('12345678912');
      // setBirthday(birthday);
      // setGender(gender);
    }

    return(
        <Card sx={{maxWidth:500}}>
            <Box sx={{display:"flex", flexWrap:"wrap"}}>
                <h2>Sri Lanka NIC</h2>
            </Box>
             <Box
      component="form"
      sx={{
        '& > :not(style)': { m: 1, width: '25ch' },
      }}
      noValidate
      autoComplete="off"
    >
      
      <TextField id="standard-basic" label="Enter your NIC" variant="standard" onChange={(val)=>{setNic(val.target.value)}}/>
    </Box>
    <Button variant="contained"onClick={()=>clickSubmit()}>Submit</Button>
    <hr />
    <Card sx={{maxWidth:200,padding:2}}>
    <TextField value={birthday} disabled id="outlined-basic" label="Date Of Birth" variant="outlined" />
    <TextField value={gender} disabled id="outlined-basic" label="Gender" variant="outlined" />
    
    

    </Card>


        </Card>
        )
    }