import React from 'react'
import Breadcrum from '../component/breadcrumb'

export default function Upload() {
  return (
    <>
     {/* Upload Form Start */}
      <div>
      <Breadcrum/>
        <form className='max-w-3xl p-10 border bg-main rounded-lg shadow-xl m-auto'>
            <div className='w-full pb-4'>
                <label htmlFor="" className='text-white text-lg '>Title* :</label>
                <input type='text' className='w-full bg-gray-200 p-4 rounded-lg border text-black font-bold text-base'/>
            </div>
            <div className='w-full pb-4'>
                <label htmlFor="" className='text-white text-lg '>Actress* :</label>
                <input type='text' className='w-full bg-gray-200 p-4 rounded-lg border text-black font-bold text-base'/>
            </div>
            <div className='w-full pb-4'>
                <label htmlFor="" className='text-white text-lg '>Producer* :</label>
                <input type='text' className='w-full bg-gray-200 p-4 rounded-lg border text-black font-bold text-base'/>
            </div>
            <div className='w-full pb-4'>
                <label htmlFor="" className='text-white text-lg '>Release Date* :</label>
                <input type='text' className='w-full bg-gray-200 p-4 rounded-lg border text-black font-bold text-base'/>
            </div>
            <div className='w-full pb-4'>
                <label htmlFor="" className='text-white text-lg '>Thumbnail :</label>
                <input type='text' className='w-full bg-gray-200 p-4 rounded-lg border text-black font-bold text-base'/>
            </div>
            <div className='w-full pb-4'>
                <label htmlFor="" className='text-white text-lg '>Description* :</label>
                <textarea name="" id="" cols="30" rows="6" className='w-full bg-gray-200 p-4 rounded-lg border text-black font-bold text-base'></textarea>
            </div>
            <div className='w-full pb-4'>
                <label htmlFor="" className='text-white text-lg '>Studio :</label>
                <input type='text' className='w-full bg-gray-200 p-4 rounded-lg border text-black font-bold text-base'/>
            </div>
            <div className='w-full pb-4'>
                <label htmlFor="" className='text-white text-lg '>Seo Tile* :</label>
                <input type='text' className='w-full bg-gray-200 p-4 rounded-lg border text-black font-bold text-base'/>
            </div>
            <div className='w-full pb-4'>
                <label htmlFor="" className='text-white text-lg '>Seo Description* :</label>
                <input type='text' className='w-full bg-gray-200 p-4 rounded-lg border text-black font-bold text-base'/>
            </div>
            <div className='w-full pb-4'>
                <label htmlFor="" className='text-white text-lg '>Status :</label>
                <select name="" id="" className='w-full bg-gray-200 p-4 rounded-lg border text-black font-bold text-base'>
                    <option value="publish">Publish</option>
                    <option value="unpublish">Unpublish</option>
                </select>
            </div>
            <div className='w-full pb-4'>
                <label htmlFor="" className='text-white text-lg '>Keywords* :</label>
                <input type='text' className='w-full bg-gray-200 p-4 rounded-lg border text-black font-bold text-base'/>
            </div>
            <div className='btn'>
                <button className='font-bold'>Upload Video</button>
            </div>
        </form>
      </div>
     {/* Upload Form End */}
    </>
  )
}
