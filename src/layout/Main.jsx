import React,{useContext} from 'react'
import LayoutContext from '../context/LayoutContext'


const Main = () => {

    const {content} = useContext(LayoutContext)

  return (
    <div>
        {content}
    </div>
  )
}

export default Main