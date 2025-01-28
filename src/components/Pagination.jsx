import React from 'react'

function Pagination({totalProducts,cardPerPage,setCurrentPage,currentPage}) {

    const pages=[]
    console.log(totalProducts,cardPerPage);
    
    for(let i=1;i<=Math.ceil(totalProducts/cardPerPage);i++){
        pages.push(i)
    }

    const handlePrev=()=>{
      if(currentPage>1){
        setCurrentPage(currentPage-1)
      }
    }

    const handleNext=()=>{
      if(currentPage<pages.length){
        setCurrentPage(currentPage+1)
      }
    }

  return (
    <>
    
   <div className='d-flex justify-content-center mb-3'>
    <button className='btn' onClick={handlePrev} disabled={currentPage==1}><i className="fa-solid fa-arrow-left"></i></button>
   {
        pages?.map(page=>(
            <button onClick={()=>setCurrentPage(page)} className={`btn me-0 ${currentPage==page?'active':''}`}>{page}</button>
        ))
    }
    <button onClick={handleNext} disabled={currentPage==pages.length} className='btn'><i className="fa-solid fa-arrow-right"></i></button>
   </div>

    </>
  )
}

export default Pagination