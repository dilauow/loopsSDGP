import React from 'react'
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import HailIcon from '@mui/icons-material/Hail';
import "./navBar.css"
import { useNavigate } from 'react-router-dom';

export default function NavBar() {
    const navigate = useNavigate();

    function handleclick(){
        navigate("/loginpage")
    }

    const navigate2 = useNavigate();

    function handleclick2(){
        navigate2("/preview")
    }

  return (
    <div className="navBarBox">
        <div className="navBarLeft">
            <span className='logo'>HireVision</span>
            <HailIcon className='personlogo'/>
        </div>
        <div className="navBarCenter">
        </div>
        <div className="navBarRight">
            <div className="navBarLinks">
                <Stack spacing={3} className='buttons'>
                    <Button className='bt2' variant='Candidate' onClick={handleclick}>Sign-in</Button>
                </Stack>
            </div>
        </div>
    </div>
  )
}
