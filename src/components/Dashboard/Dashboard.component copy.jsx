import React from 'react'
import {DashboardWrapper} from './Dashboard.styles'
import DashboardNavbar from '../DashboardNavbar/DashboardNavbar.component'

const Dashboard = ({isOpen}) => {

  const handleChild = () => {
    
  }

  return (
    <DashboardWrapper alignItems={`${ isOpen ? 'end' : 'center'}`}>
        <DashboardNavbar/>
    </DashboardWrapper>
  )
}
export default Dashboard