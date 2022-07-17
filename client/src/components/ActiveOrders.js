import React from 'react'

const ActiveOrders = () => {
  return (
    <section className="main overflow-y-auto ml-[300px] z-0 top-0 w-[calc(100vw-300px)] pt-[30px] pb-[100px] right-0 mt-[70px] min-h-[calc(100vh-70px)] bg-white">

<h2 className='font-bold text-[#0e0e2b] text-[30px] mb-[30px] ml-[120px]'>Active Orders</h2>

    <div className="table w-[900px] overflow-auto-x  ml-[100px] shadow-black/20 shadow-lg form  bg-white rounded-[10px]">
  
    <div className=' w-[90%] bg-indigo-500  mb-[20px] px-[20px] py-[6px] '>
  <input type="text" className='mr-[40px] w-[350px] px-[20px] py-[6px] rounded' placeholder="Search by location or customer name" />
<span className='pl-[100px] mr-[20px] text-white font-semibold'>Sort by </span> 
<select className='bg-white text-indigo-700 font-bold px-[8px] py-[4px] rounded' name="" id="" >
<option value="all" >All</option>
<option value="monthly" >Today</option>
<option value="weekly" selected>Yesterday</option>
<option value="daily">Today</option>
</select>
</div>

   <table className='table w-[100%] overflow-scroll-x'>
     <tr className='text-left w-[100%] bg-gradient-to-r from-[#6FA6FF] mr-3 to-indigo-500 text-white' >
     <th className='font-semibold w-[100%] px-[20px] py-[5px]'>Name</th>
     <th className='font-semibold w-[100%] px-[20px] py-[5px]'>Id</th>
     <th className='font-semibold w-[100%] px-[20px] py-[5px]'>City</th>
     <th className='font-semibold w-[100%] px-[20px] py-[5px]'>Postcode</th>
     <th className='font-semibold w-[100%] px-[20px] py-[5px]'>Area(m.sq)</th>
     <th className='font-semibold w-[100%] px-[20px] py-[5px]'>Email</th>
     <th className='font-semibold w-[100%] px-[20px] py-[5px]'>Phone</th>
     <th className='font-semibold w-[100%] px-[20px] py-[5px]'>Section</th>
     <th className='font-semibold w-[100%] px-[20px] py-[5px]'>Method</th>
     <th className='font-semibold w-[100%] px-[20px] py-[5px]'>Date</th>
     <th className='font-semibold w-[100%] px-[20px] py-[5px]'>View</th>
     <th className='font-semibold w-[100%] px-[20px] py-[5px]'>Next</th>
   
     </tr>
     <tbody>
       <tr className='text-left w-[100%] text-black border-[rgba(0,0,0,0.1) border-2'>
       <td className='font-semibold w-[200px] px-[20px] py-[5px]'>Smith Gladroff</td>
       <td className='font-semibold w-[100%] px-[20px] py-[5px]'>EM016788</td>
       <td className='font-semibold w-[100%] px-[20px] py-[5px]'>Aechen</td>
       <td className='font-semibold w-[100%] px-[20px] py-[5px]'>788998</td>
       <td className='font-semibold w-[100%] px-[20px] py-[5px]'>60</td>
       <td className='font-semibold w-[100%] px-[20px] py-[5px]'>smith@gmail.com</td>
       <td className='font-semibold w-[100%] px-[20px] py-[5px]'>6786778654</td>
       <td className='font-semibold w-[100%] px-[20px] py-[5px]'>Kitchen</td>
       <td className='font-semibold w-[100%] px-[20px] py-[5px]'>Escalator</td>
       <td>12|6|22</td>
       <td><button className='bg-green text-white rounded px-[10px] py-[5px] font-medium'>View</button></td>
       </tr>
       <tr className='text-left w-[100%] text-black border-[rgba(0,0,0,0.1)] border-2'>
       <td className='font-semibold w-[200px] px-[20px] py-[5px]'>Rihie Green</td>
       <td className='font-semibold w-[100%] px-[20px] py-[5px]'>EM016789</td>
       <td className='font-semibold w-[100%] px-[20px] py-[5px]'>Munich</td>
       <td className='font-semibold w-[100%] px-[20px] py-[5px]'>236577</td>
       <td className='font-semibold w-[100%] px-[20px] py-[5px]'>90</td>
       <td className='font-semibold w-[100%] px-[20px] py-[5px]'>richieg@gmail.com</td>
       <td className='font-semibold w-[100%] px-[20px] py-[5px]'>785687676</td>
       <td className='font-semibold w-[100%] px-[20px] py-[5px]'>Basement</td>
       <td className='font-semibold w-[100%] px-[20px] py-[5px]'>Floor-4</td>
       <td>22|6|22</td>
       <td><button className='bg-green text-white rounded px-[10px] py-[5px] font-medium'>View</button></td>
       <td></td>
         </tr>
     
     </tbody>
   </table>
      </div>
      </section>
 
  )
}

export default ActiveOrders