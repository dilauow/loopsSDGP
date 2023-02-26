import React from 'react'
import "./leftpane.css"

export default function leftpane() {
  return (
  <div className='leftPaneBox'>
    <div className="leftPaneContainer">
      <div className="leftPaneMenu">

        <li className="leftPainMenuItem">
          <DisplaySettingsIcon className='leftPaneMenuIcon'/>
          <span className='leftPaneMenuText'>Skills</span>
        </li>
        <li className="leftPainMenuItem">
          <input placeholder='Search for your skills' className="searchInput" />
        </li>

        <li className="leftPainMenuItem">
          <WorkIcon className='leftPaneMenuIcon'/>
          <span className='leftPaneMenuText'>Job Type</span>
        </li>
        <li className="leftPainMenuItem">
          <input type="checkbox" />
          <span className='CheckboxDescription'> Full Time</span>
        </li>
        <li className="leftPainMenuItem">
          <input type="checkbox" />
          <span className='CheckboxDescription'> Part Time</span>
        </li>
        <li className="leftPainMenuItem">
          <input type="checkbox" />
          <span className='CheckboxDescription'> Internship</span>
        </li>
        <li className="leftPainMenuItem">
          <input type="checkbox" />
          <span className='CheckboxDescription'> Casual</span>
        </li>

        <li className="leftPainMenuItem">
          <BorderAllIcon className='leftPaneMenuIcon'/>
          <span className='leftPaneMenuText'>Modality</span>
        </li>
        <li className="leftPainMenuItem">
          <input type="checkbox" />
          <span className='CheckboxDescription'> In Office</span>
        </li>
        <li className="leftPainMenuItem">
          <input type="checkbox" />
          <span className='CheckboxDescription'> Remote</span>
        </li>

        <li className="leftPainMenuItem">
          <PublicIcon className='leftPaneMenuIcon'/>
          <span className='leftPaneMenuText'>Country</span>
        </li>
        <li className="leftPainMenuItem">
          <input placeholder='Type Your Country' className="searchInput" />
        </li>

        <li className="leftPainMenuItem">
          <PaidIcon className='leftPaneMenuIcon'/>
          <span className='leftPaneMenuText'>Salary</span>
        </li>
        <li className="leftPainMenuItem">
          <span>Currency</span>
        </li>
        <li className="leftPainMenuItem">
          <input placeholder='Currency' className="searchInput" />
        </li>
        <li className="leftPainMenuItem">
          <span>Paid Every</span>
        </li>
        <li className="leftPainMenuItem">
          <input placeholder='Type Here' className="searchInput" />
        </li>


      </div>
    </div>
  </div>
  )
}
