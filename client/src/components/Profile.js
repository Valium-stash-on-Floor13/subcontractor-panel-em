import React, {useState, useEffect} from 'react'

const goToTop = () => {
  window.scrollTo({
      top: 0,
      behavior: 'smooth',
  });
};


const Profile = () => {
  const [uploadMessage, setUploadMessage]= useState('')
  const [upload, setUpload]= useState('')
  const [sub, setSub] = useState({
    company: "",
    street:"",
    postcode:"",
    location:"Berlin and surroundings",
    phone:"",
    vat:""

  })
  const [success, setSuccess] = useState('')
  const [certificate, setCertificate] = useState('')
 
  
  const email =localStorage.getItem('email')
  // console.log(email)

  useEffect(() => {
    fetch(`http://localhost:5000/api/filemail?email=${email}`)
    .then(response => response.json())
    .then((data) =>{setUpload(data.status)
    })
    .catch((error)=> console.log(error))
  },[uploadMessage])

  useEffect(() => {
    fetch(`http://localhost:5000/api/profiledata?email=${email}`)
    .then(response => response.json())
    .then((data) =>{
      // console.log(data.sub)
      setSub({...sub, 
        company:data.sub.company,
        street:data.sub.street,
        postcode: data.sub.postcode,
        location: data.sub.location,
        phone: data.sub.phone,
        vat: data.sub.vat
    })
    })
    .catch((error)=> console.log(error))
  },[])

    async function handleSubmit(event) { 
        event.preventDefault()
    }
    

    function getBase64(file) {
      return new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = () => resolve(reader.result);
        reader.onerror = error => reject(error);
        
      });
    }

    const fileUpload = (file) =>{
      if (file.size<5000000) {
        getBase64(file).then(
          data =>{
          sendFile(data)})
    
      }else{
        setUploadMessage("error")
      }
}

async function sendFile(filebase) { 
  const response = await fetch('http://localhost:5000/api/sendfile', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      email:email,
     file:filebase,
    }),
  })
  const data = await response.json()

  if (data.status === 'ok') {
    setUploadMessage("success")
  }
  else{
    setUploadMessage("failed")
  }
}

   



    async function handleInfo(event) { 

        const response = await fetch('http://localhost:5000/api/editsub', {
          method: 'PUT',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            email:email,
           company:sub.company,
           street:sub.street,
           postcode:sub.postcode,
           location:sub.location,
           phone:sub.phone,
           vat:sub.vat
          }),
        })

        const data = await response.json()

        if (data.status === 'ok') {
          goToTop()
          setSuccess("success")
        }
        else{
          goToTop()
          setSuccess("error")
        }

      }
        
  return (
    <section className="main overflow-y-auto ml-[300px] z-0 top-0 w-[calc(100vw-300px)] pt-[30px] pb-[100px] right-0 mt-[70px] min-h-[calc(100vh-70px)] bg-white">
    <h2 className='font-bold text-[#0e0e2b] text-[30px] mb-[30px] ml-[120px]'>Profile Info</h2>
    
           <div className="w-[70%]  ml-[100px] shadow-black/20 shadow-lg form px-[40px] py-[40px] bg-white rounded-[10px]">
           <form action="" onSubmit={handleSubmit}>
{success==='success' && <div className='mb-[20px]'>
  <p className='bg-blue-100 border-[1px] border-solid border-blue-500 w-[100%] px-[30px] py-[10px] '>Information saved successfully</p>
</div>}
{success==='error' && <div className='mb-[20px]'>
  <p className='bg-red-100 border-[1px] border-solid border-red-500 w-[100%] px-[30px] py-[10px] '>An error occured!</p>
</div>}
               <div className="form-grp bg-[#f7feff] w-[100%] border-[1px] border-indigo/10 shadow-indigo/20 mb-[10px] flex">
                    <label className='bg-indigo-500 text-white font-semibold  px-[10px] py-[6px] w-[200px]' htmlFor="Company Name">Company Name</label>
                    <input className='w-[100%] inline px-[20px] bg-[#f7feff]' type="text" name="company" id="" onChange={event => setSub({...sub, company: event.target.value})} value={sub.company} />
                </div>
        

               <div className="form-grp bg-[#f7feff] w-[100%] border-[1px] border-indigo/10 shadow-indigo/20 mb-[10px] flex">
                    <label className='bg-indigo-500 text-white font-semibold  px-[10px] py-[6px] w-[200px]' htmlFor="Company Name">
                        Location</label>
                        <select className="w-[100%] inline px-[20px] bg-[#f7feff]" name="section" id="section" defaultValue={sub.location} onChange={event => setSub({...sub, location: event.target.value})} value={sub.location} >
                <option className="" value="Berlin and surroundings">Berlin and surroundings</option>
                <option value="Hamburg and surroundings">Hamburg and surroundings</option>
                <option value="Munich and surroundings">Munich and surroundings</option>
                <option value="Cologne  and surroundings">Cologne  and surroundings</option>
                <option value="Frankfurt and surroundings">Frankfurt and surroundings</option>
                <option value="Stuttgart and surroundings">Stuttgart and surroundings</option>
                <option value="Düsseldorf and surroundings">Düsseldorf and surroundings</option>
                <option value="Leipzip and surroundings">Leipzip and surroundings</option>
                <option value="Dortmund and surroundings">Dortmund and surroundings</option>
                <option value="Essen and surroundings">Essen and surroundings</option>
                <option value="Bresmen and surroundings">Bresmen and surroundings</option>
                <option value="Essen and surroundings">Dresden and surroundings</option>
                <option value="Hannover and surroundings">Hannover and surroundings</option>
                <option value="Nuremberg and surroundings">Nuremberg and surroundings</option>
                <option value="Duisburg and surroundings">Duisburg and surroundings</option>
                <option value="Bochum and surroundings">Bochum and surroundings</option>
                <option value="Wuppertal and surroundings">Wuppertal and surroundings</option>
                <option value="Bielefeld and surroundings">Bielefeld and surroundings</option>
                <option value="Bonn and surroundings">Bonn and surroundings</option>
                <option value="Münster and surroundings">Münster and surroundings</option>
            </select> 
                </div>
               <div className="form-grp bg-[#f7feff] w-[100%] border-[1px] border-indigo/10 shadow-indigo/20 mb-[10px] flex">
                    <label className='bg-indigo-500 text-white font-semibold  px-[10px] py-[6px] w-[200px]' htmlFor="Company Name">
                        Street</label><input className='w-[100%] inline px-[20px] bg-[#f7feff]' type="text" name="company" id=""
                        onChange={event => setSub({...sub, street: event.target.value})} value={sub.street} />
                </div>
               <div className="form-grp bg-[#f7feff] w-[100%] border-[1px] border-indigo/10 shadow-indigo/20 mb-[10px] flex">
                    <label className='bg-indigo-500 text-white font-semibold  px-[10px] py-[6px] w-[200px]' htmlFor="Company Name">Postal Code
                    </label><input className='w-[100%] inline px-[20px] bg-[#f7feff]' type="text" name="company" id="" 
                      onChange={event => setSub({...sub, postcode: event.target.value})} value={sub.postcode} />
                </div>

               <div className="form-grp bg-[#f7feff] w-[100%] border-[1px] border-indigo/10 shadow-indigo/20 mb-[10px] flex">
                    <label className='bg-indigo-500 text-white font-semibold  px-[10px] py-[6px] w-[200px]' htmlFor="Company Name">
                        Phone number</label><input className='w-[100%] inline px-[20px] bg-[#f7feff]' type="text" name="company" id="" 
                          onChange={event => setSub({...sub, phone: event.target.value})} value={sub.phone} />
                </div>
               
               <div className="form-grp bg-[#f7feff] w-[100%] border-[1px] border-indigo/10 shadow-indigo/20 mb-[10px] flex">
                    <label className='bg-indigo-500 text-white font-semibold  px-[10px] py-[6px] w-[200px]' htmlFor="Company Name">
                        VAT ID</label><input className='w-[100%] inline px-[20px] bg-[#f7feff]' type="text" name="company" id="" 
                          onChange={event =>setSub({...sub, vat: event.target.value})} value={sub.vat} />
                </div>
            

              
                <button className="transition-all shadow-md mb-[30px] shadow-[#white]-500/20 hover:shadow-[white]/20 text-lg  text-white py-1 font-semibold px-8 bg-orange-400 rounded-lg" type='submit'
                disabled={            
                  (sub.company==='') ||
                  (sub.street==='') ||
                  (sub.postcode==='') ||
                  (sub.location==='') ||
                  (sub.phone===null) ||
                  (sub.phone==='') ||
                  (sub.vat==='') 
                 } onClick={handleInfo} >Update entries</button>
                </form>
                  <hr />

     <div className="form-grp bg-[#f7feff] w-[100%] border-[1px] border-indigo/10 shadow-indigo/20 mb-[10px]">
     {uploadMessage==='success' && <div className='mb-[20px]'>
  <p className='bg-blue-100 border-[1px] border-solid border-blue-500 w-[100%] px-[30px] py-[10px] '>File uploaded successfully</p>
</div>}
{uploadMessage==='error' && <div className='mb-[20px]'>
  <p className='bg-red-100 border-[1px] border-solid border-red-500 w-[100%] px-[30px] py-[10px] '>Either file is bigger than 5 MB or it's corrupted.</p>
</div>}
{uploadMessage==='failed' && <div className='mb-[20px]'>
  <p className='bg-red-100 border-[1px] border-solid border-red-500 w-[100%] px-[30px] py-[10px] '>File upload failed!</p>
</div>}

  {upload==='invalid' && <>  <p className='text-white mb-[4px] bg-blue-800 font-semibold py-[6px] px-[20px]'>Upload your VAT ID certificate</p>
                <div className="form-grp bg-[#f7feff] w-[100%] border-[1px] border-indigo/10 shadow-indigo/20 mb-[10px] flex">
                    <input className='w-[100%] inline px-[20px] bg-[#f7feff]'  type="file" accept='.pdf' name="file" id="file" onChange={(event) =>{
                      const file= event.target.files[0];
                      setUploadMessage("")
                      setCertificate(file)
                    }}/>
                   <button className="transition-all shadow-md shadow-[#white]-500/20 hover:shadow-[white]/20   text-white py-[4px] font-semibold px-[10px] w-[300px] bg-[#6fa1f0] " onClick ={()=>{fileUpload(certificate)}} >Upload</button>
                </div>
                </>}

                {upload==='ok' && <>
                <p className='text-white mb-[4px] bg-green-400 font-semibold py-[6px] px-[20px]'>Certificate has already been uploaded.</p>
                </>}
       
                </div>
                </div>
             </section>
  )
}
export default Profile