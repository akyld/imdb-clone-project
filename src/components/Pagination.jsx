import React from 'react'

function Pagination() {
  return (
    <div className='flex justify-center my-4'>
        <div className='border-2 p-2 rounded-l-xl border-r-0 border-red-500'>Previous</div>
        <div className='border-2 p-2 border-r-0 border-red-500'>1</div>
        <div className='border-2 p-2 rounded-r-xl border-red-500'>Next</div>
    </div>
  )
}

export default Pagination