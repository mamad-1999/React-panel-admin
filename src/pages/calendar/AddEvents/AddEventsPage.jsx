import React from 'react'

// import component 
import BoxLayout from '../../../components/BoxLayout/BoxLayout'
import PanelLayout from '../../../components/PanelLayout/PanelLayout'
import BreadCrumbPanel from '../../../components/BreadCrumbs/BreadCrumbPanel'

const AddEventsPage = () => {
  return (
    <PanelLayout>
      <BoxLayout justify='start'>
        <BreadCrumbPanel />
      </BoxLayout>
    </PanelLayout>
  )
}

export default AddEventsPage