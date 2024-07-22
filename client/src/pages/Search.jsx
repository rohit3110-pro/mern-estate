import React from 'react'

export default function Search() {
  return (
    <div className='flex flex-col md:flex-row md:min-h-screen'>
        <div className='p-7 border-b-2 md:border-r-2'>
            <form className='flex flex-col gap-8'>
                <div className='flex items-center gap-2'>
                    <label className='whitespace-nowrap font-semibold'>Search Term:</label>
                    <input type='text' id='serachTerm' className='border rounded-lg p-3 w-full ' placeholder='Search...'></input>
                </div>
                <div className='flex gap-2 flex-wrap items-center'>
                    <label className='font-semibold'>Type:</label>
                    <div className='flex gap-2'>
                    <input type='checkbox' id='all' className='w-5'/>
                    <span>Rent & Sale</span>
                    </div>
                    <div className='flex gap-2'>
                    <input type='checkbox' id='rent' className='w-5'/>
                    <span>Rent</span>
                    </div>
                    <div className='flex gap-2'>
                    <input type='checkbox' id='sale' className='w-5'/>
                    <span>Sale</span>
                    </div>
                    <div className='flex gap-2'>
                    <input type='checkbox' id='offer' className='w-5'/>
                    <span>Offer</span>
                    </div>
                </div>
                <div className='flex gap-2 flex-wrap items-center'>
                    <label className='font-semibold'>Amenities:</label>
                    <div className='flex gap-2'>
                    <input type='checkbox' id='parking' className='w-5'/>
                    <span>Parking</span>
                    </div>
                    <div className='flex gap-2'>
                    <input type='checkbox' id='furnished' className='w-5'/>
                    <span>Furnished</span>
                    </div>
                    <div className='flex items-center gap-2'>
                        <label className='font-semibold'>Sort:</label>
                        <select className='rounded-lg border p-3' id='sort_order'>
                            <option>Price high to low</option>
                            <option>Price low to high</option>
                            <option>Latest</option>
                            <option>Oldest</option>
                        </select>
                    </div>
                </div>
                <button className='bg-slate-700 text-white rounded-lg p-3 uppercase hover:opacity-95'>search</button>
            </form>
        </div>
        <div className=''>
             <h1 className='font-semibold text-3xl mt-5 p-3 border-b text-slate-700'>Listing results:</h1>
        </div>
    </div>
  )
}
