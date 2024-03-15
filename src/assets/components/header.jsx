import React from 'react'
import headercss from './header.module.css'
import 'bootstrap/dist/css/bootstrap.min.css'

function Header() {
  return (
    <div className={headercss.main}>

        <div className="div"><i class="fas fa-bars"></i></div>
        <div className="div"><h4><b>ToDo List</b></h4></div>

    </div>
  )
}

export default Header;