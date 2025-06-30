import React from 'react'
import { Link } from 'react-router-dom';

const hire = () => {
  return (
    <div>
      <div className='sec_app'>
        <h1>Securing Your Flutter App: Best Practices and Techniques</h1>
      </div>
      <div className='development_main_page'>
        <h1>Hire Page</h1>
      </div>
      <div className='footer_menu_main'>
        <div className='footer_menu'>
          <ul>
            <li> <Link to="/">About</Link></li>
            <li> <Link to="/">Insights</Link></li>
            <li> <Link to="/">Community</Link></li>
            <li> <Link to="/">Privacy & Policies</Link></li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default hire
