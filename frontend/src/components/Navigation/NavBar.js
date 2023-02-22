import React from 'react'
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import "./navBar.css"

export default function NavBar() {
  return (
    <div className="navBarBox">
        <div className="navBarLeft">
            <span className='logo'>Hire Vision</span>
        </div>
        <div className="navBarCenter">

        </div>
        <div className="navBarRight">
            <div className="navBarLinks">
                <Stack direction="row" spacing={2}>
                    <Button variant='PostaJob' href='#contained-buttons'>+ Post a job</Button>
                    <Button variant='Candidate' href='#contained-buttons'>Candidate Sign-in</Button>
                    <Button variant='Employer' href='#contained-buttons'>Employer Sign-in</Button>
                </Stack>
            </div>
        </div>
    </div>
  )
}
