import React, { FC } from 'react'
import Image from 'next/image'
import sonrBlue from '../public/sonrblue.png'
interface IProps {

}

/**
* @author
* @function @Header
**/

const Header:FC<IProps> = () => {
  return (
    <div className="flex flex-row items-center py-0 px-2 static bg-gray-300">
        <div className="flex flex-row items-center p-0 static w-28 left-5 top-3">
        <Image src={sonrBlue} alt="sonr logo"/>
        </div>
    </div>
   )
 }

 export default Header