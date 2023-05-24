import React from 'react'
import Pagination from './Pagination'

function Favourites() {
  return (
    <>
      <div className='mt-4 flex space-x-2 justify-center'>
        <button className='p-1 px-2 bg-blue-300 rounded-lg text-lg font-bold text-white'>All Genres</button>
        <button className='p-1 px-2 bg-gray-300 rounded-lg text-lg font-bold text-white hover:bg-blue-300'>All Genres</button>
      </div>
      
      <div className='mt-4 flex justify-center space-x-2'>
        <input type="text" placeholder='Search' className='border-2 py-1 px-2 placeholder:text-center focus:outline-none focus:ring-2 focus:ring-blue-300 focus:border-transparent' />
        <input type="number" value={1} className='border-2 py-1 px-2 text-center focus:outline-none focus:ring-2 focus:ring-blue-300 focus:border-transparent'/>
      </div>
      <DataTable />
      <Pagination />
    </>
  )
}

function DataTable(){
  return(
    <div class="overflow-hidden rounded-lg border border-gray-200 shadow-md m-5">
  <table class="w-full border-collapse bg-white text-left text-sm text-gray-500">
    <thead class="bg-gray-50">
      <tr>
        <th scope="col" class="px-6 py-4 font-medium text-gray-900">Name</th>
        <th scope="col" class="px-6 py-4 font-medium text-gray-900">
          <div className='flex space-x-1'>
            <img className='cursor-pointer' src='https://img.icons8.com/external-those-icons-lineal-those-icons/24/000000/external-up-arrows-those-icons-lineal-those-icons-3.png' />
            <div>Rating</div>
            <img className='cursor-pointer' src='https://img.icons8.com/external-those-icons-lineal-those-icons/24/000000/external-down-arrows-those-icons-lineal-those-icons-4.png' />
            </div>
        </th>
        <th scope="col" class="px-6 py-4 font-medium text-gray-900"><div className='flex space-x-1'>
            <img className='cursor-pointer' src='https://img.icons8.com/external-those-icons-lineal-those-icons/24/000000/external-up-arrows-those-icons-lineal-those-icons-3.png' />
            <div>Popularity</div>
            <img className='cursor-pointer' src='https://img.icons8.com/external-those-icons-lineal-those-icons/24/000000/external-down-arrows-those-icons-lineal-those-icons-4.png' />
            </div></th>
        <th scope="col" class="px-6 py-4 font-medium text-gray-900 text-center">Genre</th>
        <th scope="col" class="px-6 py-4 font-medium text-gray-900 text-center">Remove</th>
      </tr>
    </thead>
    <tbody class="divide-y divide-gray-100 border-t border-gray-100">
      <tr class="hover:bg-gray-50">
        <th class="flex items-center px-6 py-4 font-normal text-gray-900 space-x-2">
            <img
              class="h-[7rem] object-fit"
              src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
              
            />
            <div class="font-medium text-gray-700">Steven Jobs</div>
        </th>
        <td class="px-6 py-4">
         10
        </td>
        <td class="px-6 py-4">10</td>
        <td class="px-6 py-4">
          <div class="flex justify-center">
            <span
              class="inline-flex items-center gap-1 rounded-full bg-green-50 px-2 py-1 text-xs font-semibold text-green-600"
            >
              Action
            </span>
          </div>
        </td>
        <td class="px-6 py-4">
          <div className='flex justify-center'>
            <span class="inline-flex items-center gap-1 rounded-full px-2 py-1 text-xs font-semibold text-red-600 cursor-pointer">
              Delete
            </span>
          </div>
        </td>
      </tr>
    </tbody>
  </table>
</div>
  )
}

export default Favourites