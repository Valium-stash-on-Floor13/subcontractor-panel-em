


const Home = () => {




  
  return (
      <>

    <section className="main overflow-y-auto ml-[300px] z-0 top-0 w-[calc(100vw-300px)] pt-[30px] pb-[100px] right-0 mt-[70px] min-h-[calc(100vh-70px)] bg-white">
    <h2 className='font-bold text-[#0e0e2b] text-[30px] mb-[30px] ml-[120px]'>Home </h2>


    <div className="  ml-[100px] shadow-black/20 shadow-lg form  bg-white rounded-[10px] mb-[30px]">

<div className="cards flex justify-around items-start px-[30px] py-[20px] mb-[30px]">
    <div className="card w-[300px] bg-gradient-to-r from-[#6FA6FF] mr-3 to-indigo-500 rounded shadow-sm shadow-black/30 py-[30px]">
      <h2 className="text-white font-bold text-[30px] text-center">2</h2>
      <h2 className="text-white  font-bold text-[20px] text-center">Total Active Orders</h2>
    </div>
   
    <div className="card w-[300px] bg-gradient-to-r from-[#6FA6FF] mr-3 to-indigo-500 rounded shadow-sm shadow-black/30 py-[30px]">
      <h2 className="text-white font-bold text-[30px] text-center">68700 Є</h2>
      <h2 className="text-white  font-bold text-[20px] text-center">Total Revenue</h2>
    </div>
   
    <div className="card w-[300px] bg-gradient-to-r from-[#6FA6FF] to-indigo-500 rounded shadow-sm shadow-black/30 py-[30px]">
      <h2 className="text-white font-bold text-[30px] text-center">9</h2>
      <h2 className="text-white  font-bold text-[20px] text-center">Completed Orders</h2>
    </div>
   
</div>

      </div>
      <h2 className='font-bold text-[#0e0e2b] text-[30px] mb-[30px] ml-[120px]'>New orders </h2>
      <div className="table w-[900px] overflow-auto-x  ml-[100px] shadow-black/20 shadow-lg form  mb-[60px] bg-white rounded-[10px]">
   
      <div className=' w-[90%] bg-indigo-500  mb-[20px] px-[20px] py-[6px] '>
  <input type="text" className='mr-[40px] w-[350px] px-[20px] py-[6px] rounded' placeholder="Search by location or customer name" />
<span className='pl-[100px] mr-[20px] text-white font-semibold'>Sort by </span> 
<select className='bg-white text-indigo-700 font-bold px-[8px] py-[4px] rounded' name="" id="" >
<option value="all" selected>All</option>
<option value="monthly" >Today</option>
<option value="weekly"selected>Yesterday</option>
<option value="daily">Today</option>
</select>
</div>

   <table className='table w-[100%] overflow-scroll-x '>
     <tr className='text-left w-[100%] bg-gradient-to-r from-[#6FA6FF] mr-3 to-indigo-500 text-white' >
     <th className='font-semibold w-[100%] px-[20px] py-[5px]'>Name</th>
     <th className='font-semibold w-[100%] px-[20px] py-[5px]'>City</th>
     <th className='font-semibold w-[100%] px-[20px] py-[5px]'>Area(m.sq)</th>
     <th className='font-semibold w-[100%] px-[20px] py-[5px]'>Pricing</th>
     <th className='font-semibold w-[100%] px-[20px] py-[5px]'>Section</th>

     <th className='font-semibold w-[100%] px-[20px] py-[5px]'>Date</th>
     <th className='font-semibold w-[100%] px-[20px] py-[5px]'>Accept</th>
     <th className='font-semibold w-[100%] px-[20px] py-[5px]'>Reject</th>

     <th className='font-semibold w-[100%] px-[20px] py-[5px]'>View</th>
  
   
     </tr>
     <tbody>
       <tr className='text-left w-[100%] text-black border-[rgba(0,0,0,0.1) border-2'>
       <td className='font-semibold w-[200px] px-[20px] py-[5px]'>Test User</td>
      
       <td className='font-semibold w-[100%] px-[20px] py-[5px]'>Munich</td>
      
       <td className='font-semibold w-[100%] px-[20px] py-[5px]'>60</td>
       <td className='font-semibold w-[100%] px-[20px] py-[5px]'>1000 Є</td>
    
       <td className='font-semibold w-[100%] px-[20px] py-[5px]'>Kitchen</td>
       <td className='font-semibold w-[100%] px-[20px] py-[5px]'>12|06|22</td>
       <td className='font-semibold w-[100%] px-[20px] py-[5px]'><button className='bg-green-500 text-white rounded px-[10px] py-[5px] font-medium'>Accept</button></td>
       <td className='font-semibold w-[100%] px-[20px] py-[5px]'><button className='bg-red-500 text-white rounded px-[10px] py-[5px] font-medium'>Reject</button></td>
       <td className='font-semibold w-[100%] px-[20px] py-[5px]'><button className='bg-indigo-500 text-white rounded px-[10px] py-[5px] font-medium'>View</button></td>
       </tr>
       <tr className='text-left w-[100%] text-black border-[rgba(0,0,0,0.1)] border-2'>
       <td className='font-semibold w-[200px] px-[20px] py-[5px]'>Rihie Green</td>

       <td className='font-semibold w-[100%] px-[20px] py-[5px]'>Munich</td>
     
       <td className='font-semibold w-[100%] px-[20px] py-[5px]'>90</td>
       <td className='font-semibold w-[100%] px-[20px] py-[5px]'>700 Є</td>
      
       <td className='font-semibold w-[100%] px-[20px] py-[5px]'>Basement</td>
       <td className='font-semibold w-[100%] px-[20px] py-[5px]'>22|06|22</td>
       <td className='font-semibold w-[100%] px-[20px] py-[5px]'><button className='bg-green-500 text-white rounded px-[10px] py-[5px] font-medium'>Accept</button></td>
       <td className='font-semibold w-[100%] px-[20px] py-[5px]'><button className='bg-red-500 text-white rounded px-[10px] py-[5px] font-medium'>Reject</button></td>
       <td className='font-semibold w-[100%] px-[20px] py-[5px]'><button className='bg-indigo-500 text-white rounded px-[10px] py-[5px] font-medium'>View</button></td>
  
     
       <td></td>
         </tr>
     
     </tbody>
   </table>
      </div>
      
    <div className="  ml-[100px] shadow-black/20 shadow-lg form  bg-white rounded-[10px] mb-[30px]">

<div className="cards flex justify-around items-start px-[30px] py-[20px] mb-[30px]">
    <div className="card w-[300px] bg-gradient-to-r from-[#6FA6FF] mr-3 to-indigo-500 rounded shadow-sm shadow-black/30 py-[30px]">
      <h2 className="text-white font-bold text-[30px] text-center">98</h2>
      <h2 className="text-white  font-bold text-[20px] text-center">Total Subcontractors</h2>
    </div>
   
    <div className="card w-[300px] bg-gradient-to-r from-[#6FA6FF] mr-3 to-indigo-500 rounded shadow-sm shadow-black/30 py-[30px]">
      <h2 className="text-white font-bold text-[30px] text-center">69</h2>
      <h2 className="text-white  font-bold text-[20px] text-center">Total Cities</h2>
    </div>
   
    <div className="card w-[300px] bg-gradient-to-r from-[#6FA6FF] to-indigo-500 rounded shadow-sm shadow-black/30 py-[30px]">
      <h2 className="text-white font-bold text-[30px] text-center">3</h2>
      <h2 className="text-white  font-bold text-[20px] text-center">Pending Payments</h2>
    </div>
   
</div>

      </div>
      
      </section>
      </>
  )
}

export default Home