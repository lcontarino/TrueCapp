import React from 'react'
import './SideBarFilter.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSliders } from '@fortawesome/free-solid-svg-icons'

export const SideBarFilter = () => {
  return (
    <div className='container-fluid sideBarFilter-body'>
        <div className='slideBarFilter-head'>

        <div className='sideBarFilter-title'>
           <p>Filter</p> 
           <div className='sideBarFilter-icon'>
           <FontAwesomeIcon icon={faSliders} className="fa-solid fa-sliders" />
           </div>
           
           
        </div>
        </div>
    </div>
  )
}
export default SideBarFilter;