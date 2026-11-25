import React from 'react'

function LibraryCards({bookInfo}) {
  return (
    <div className="border-[3px] border-solid border-[blue] w-full box-border p-[15px]">
        <div>{bookInfo.code}</div>
        <div>{bookInfo.name}</div>
        <div>{bookInfo.price}</div>
    </div>
  )
}

export default LibraryCards
