"use client";
import React from "react";
import { PinContainer } from "../../ui/3d-pin";
import Image from "next/image";


import data from '../../Data/data.json'


interface Info {
  quote: string;
  link: string;
  title: string;
  image:string
}
 const Projectpage = () => {
  return (
      <div className="min-h-screen bg-black py-12 pt-36 ">
      <h1 className="text-7xl max:md-text-xl text-center font-sans  mb-8 font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400" >
        PROJECT 
      </h1>
      <div className=" mt-5 max-md:flex grid grid-cols-2  gap-48 max-md:gap-10 max-md:flex-wrap justify-center">
        {data.data.map((course: Info,index) => (
          <PinContainer   key={index}
          title= {course.link}
        href={course.link}  
          
          
          className="inter-var m-4">


<div className="flex basis-full flex-col p-4 tracking-tight text-slate-100/50 sm:basis-1/2 w-[20rem] h-[20rem] ">
          <h3 className="max-w-xs text-sm !pb-2 !m-0 font-bold text-center   max-md:text-sm  text-slate-100">
           {course.quote}
          </h3>
          <div className="text-base !m-0 !p-0 font-normal">
            <span className="text-slate-500 ">
       
            </span>
          </div>
          <div className="flex flex-1 w-full rounded-lg mt-4 bg-gradient-to-br from-violet-500 via-purple-500 to-blue-500"  > 
          
          <Image
           className=" bg-cover w-full object-cover rounded-lg "
          
          src={course.image}
          alt="img"        
          width={500}
          height={500}
          />

      
          </div>
        

        </div>

            
            
          </PinContainer>
        ))}
      </div>
    </div>
  )
}
export default Projectpage