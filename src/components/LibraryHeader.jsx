import React from 'react'
import { Link } from 'react-router'

function LibraryHeader() {
  return (
    <div>
      <header>
        <h1>LIBRARY MANAGEMENT SYSTEM</h1>
        <p>Welcome to the Library Management System</p>
      </header>
      <header className="flex justify-center gap-[30px] mt-[15px]">
          <Link to={"/login"}>Login Here</Link>
          <Link to={"/office"}>Office Management</Link>
          <Link to={"/offices"}>View All Offices</Link>
          <Link to={"/books"}>View Books</Link>
        </header>
      </div>
  )
}

export default LibraryHeader
