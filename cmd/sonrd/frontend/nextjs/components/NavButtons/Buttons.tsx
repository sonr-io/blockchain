import React, { FC } from 'react'

interface IProps {
}

/**
* @author
* @function @HomeButton
**/


 export const HomeButton:FC<IProps> = (props:any) => {
    return (
      <div className='flex flex-row items-center py-[6px] px-[8px] static w-[226px] h-[36px] left-[calc(50% - 226px/2)] top-[calc(50% - 36px/2 - 144px)]'>
        <div className='flex-none order-none self-stretch flex-grow-0 my-[22px] mx-0'>
          <div className='flex flex-row items-center p-0 static w-[210px] h-[24px] left-[8px] top-[6px] hover:bg-[#1C64F2] hover:rounded-md hover:text-white hover:text-bold cursor-pointer'>
            <div className='flex-none order-none flex-grow-1 my-0 mx-[25px]'>
            🏠 Home
            </div>
          </div>
        </div>
      </div>
     )
   }

   export const ChannelsButton:FC<IProps> = (props:any) => {
    return (
      <div className='flex flex-row items-center py-[6px] px-[8px] static w-[226px] h-[36px] left-[calc(50% - 226px/2)] top-[calc(50% - 36px/2 - 144px)]'>
      <div className='flex-none order-none self-stretch flex-grow-0 my-[22px] mx-0'>
        <div className='flex flex-row items-center p-0 static w-[210px] h-[24px] left-[8px] top-[6px] hover:bg-[#1C64F2] hover:rounded-md hover:text-white hover:text-bold cursor-pointer'>
          <div className='flex-none order-none flex-grow-1 my-0 mx-[25px]'>
          ♻️ Channels
          </div>
        </div>
      </div>
    </div>
     )
   }
   export const BlobsButton:FC<IProps> = (props:any) => {
    return (
      <div className='flex flex-row items-center py-[6px] px-[8px] static w-[226px] h-[36px] left-[calc(50% - 226px/2)] top-[calc(50% - 36px/2 - 144px)]'>
      <div className='flex-none order-none self-stretch flex-grow-0 my-[22px] mx-0'>
        <div className='flex flex-row items-center p-0 static w-[210px] h-[24px] left-[8px] top-[6px] hover:bg-[#1C64F2] hover:rounded-md hover:text-white hover:text-bold cursor-pointer'>
          <div className='flex-none order-none flex-grow-1 my-0 mx-[25px]'>
          🔒 Blobs
          </div>
        </div>
      </div>
    </div>
     )
   }

   export const ObjectsButton:FC<IProps> = (props:any) => {
    return (
      <div className='flex flex-row items-center py-[6px] px-[8px] static w-[226px] h-[36px] left-[calc(50% - 226px/2)] top-[calc(50% - 36px/2 - 144px)]'>
      <div className='flex-none order-none self-stretch flex-grow-0 my-[22px] mx-0'>
        <div className='flex flex-row items-center p-0 static w-[210px] h-[24px] left-[8px] top-[6px] hover:bg-[#1C64F2] hover:rounded-md hover:text-white hover:text-bold cursor-pointer'>
          <div className='flex-none order-none flex-grow-1 my-0 mx-[25px]'>
          🔦 Objects
          </div>
        </div>
      </div>
    </div>
     )
   }
   export const GraphButton:FC<IProps> = (props:any) => {
    return (
      <div className='flex flex-row items-center py-[6px] px-[8px] static w-[226px] h-[36px] left-[calc(50% - 226px/2)] top-[calc(50% - 36px/2 - 144px)]'>
      <div className='flex-none order-none self-stretch flex-grow-0 my-[22px] mx-0'>
        <div className='flex flex-row items-center p-0 static w-[210px] h-[24px] left-[8px] top-[6px] hover:bg-[#1C64F2] hover:rounded-md hover:text-white hover:text-bold cursor-pointer'>
          <div className='flex-none order-none flex-grow-1 my-0 mx-[25px]'>
          📈 Graph
          </div>
        </div>
      </div>
    </div>
     )
   }
   export const BucketsButton:FC<IProps> = (props:any) => {
    return (
      <div className='flex flex-row items-center py-[6px] px-[8px] static w-[226px] h-[36px] left-[calc(50% - 226px/2)] top-[calc(50% - 36px/2 - 144px)]'>
      <div className='flex-none order-none self-stretch flex-grow-0 my-[22px] mx-0'>
        <div className='flex flex-row items-center p-0 static w-[210px] h-[24px] left-[8px] top-[6px] hover:bg-[#1C64F2] hover:rounded-md hover:text-white hover:text-bold cursor-pointer'>
          <div className='flex-none order-none flex-grow-1 my-0 mx-[25px]'>
          🪣 Buckets
          </div>
        </div>
      </div>
    </div>
     )
   }