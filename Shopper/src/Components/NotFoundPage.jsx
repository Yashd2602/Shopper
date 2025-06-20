import React from 'react'
import { Link } from 'react-router-dom'


function NotFoundPage() {
    
  return<div className='nfp'>
    <h1>Error 404:Page Not Found</h1>
    <button><Link to="/">Back to Home</Link></button></div>
}

export default NotFoundPage
