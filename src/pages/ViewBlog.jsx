import React, { useState, useEffect} from 'react';
import Footer from '../components/Footer'
import axios from "axios";

function ViewBlog() {
  const [isLoading, setisLoading] = useState(true)
  const [blogs, setBlogs] = useState([])

  useEffect(() => {
    axios("https://634a6eef33bb42dca403ecb0.mockapi.io/blogMSWellbeing").then(
      (res) => {
        // console.log(res.data);
        setBlogs(res.data);
        setisLoading(false);
      }
    );
  }, []);

  console.log(blogs);

  const clickBlog = (item) => {
    console.log("Berhasil di klik")
    console.log(item)
  }
  
 return (
   <div>
     {isLoading ? (
       <span>Sedang mengambil data</span>
     ) : (
       blogs.map((item, index) => (
         <div key={index} onClick={() => clickBlog(item)}>
           <div className="font-serif px-5 pt-5 text-lg sm:text-4xl font-bold text-textPrimary text-center">
             {item.tittle}
           </div>
           <div>
             <div className="font-serif px-5 font-semibold text-sm text-[#71717a] text-center mt-2">
               {item.releaseDate}
             </div>
             <div className="font-serif px-5 italic text-center">
               Author by : {item.author}
             </div>
             <div className="flex flex-wrap justify-center w-full">
               <img src={item.img} alt="" />
             </div>
           </div>
         </div>
       ))
     )}
     {/* <Navbar />
        <div>
            <h1 className='italic'>Judul</h1>
            <p className=''>Author | Tanggal</p>
            <img src="" alt="" />
            <div className='sub-title'>

            </div>
            <div className='desc'></div>
        <Footer />
        </div> */}
   </div>
 );
}

export default ViewBlog