import React from 'react'
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import PersonPinIcon from '@mui/icons-material/PersonPin';
import HailIcon from '@mui/icons-material/Hail';
import "./navBar.css"
import { useNavigate } from 'react-router-dom';

export default function NavBar() {
    const navigate = useNavigate();

    function handleclick(){
        navigate("/signup")
    }

    const navigate2 = useNavigate();

    function handleclick2(){
        navigate2("/")
    }

  return (
    <div className="navBarBox">
        <div className="navBarLeft">
            <span className='logo' onClick={handleclick2}>HireVision</span>
            <HailIcon className='personlogo'/>
        </div>
        <div className="navBarCenter">
        </div>
        <div className="navBarRight">
            <div className="navBarLinks">
                <Stack spacing={3} className='buttons'>
                    {/* <Button className='bt2' variant='Candidate' onClick={handleclick}>Admin Sign-in</Button> */}
                </Stack>
            </div>
        </div>
    </div>
  )
}
