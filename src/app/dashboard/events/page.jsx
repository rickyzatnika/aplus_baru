"use client"

import { useRouter } from 'next/navigation';
import React, { useState, useEffect } from 'react'
import useSWR, { mutate } from "swr";
import axios from 'axios';

const AddEventPages = () => {



   const fetcher = (url) => fetch(url).then((res) => res.json());

  // Penggunaan SWR untuk mengambil data dengan mem-passing URL ke dalam useSWR hook
  const { data, error } = useSWR(`${process.env.NEXT_PUBLIC_API}/api/events`, fetcher);
  



  const router = useRouter();
  const [date, setDate] = useState("");
  const [content, setContent] = useState("");
  const [desc, setDesc] = useState("");
  const [slug, setSlug] = useState("");
  const [place, setPlace] = useState("");
  const [category, setCategory] = useState("");
  const [photo, setPhoto] = useState("");
  const [loading, setLoading] = useState(false);
  const [title, setTitle] = useState('');
   const [showModal, setShowModal] = useState(false);


    useEffect(() => {
    
  }, [data]);

  useEffect(() => {
    // Fungsi untuk mengubah title menjadi slug
    const generateSlug = (title) => {
      return title
        .toLowerCase()
        .replace(/\s+/g, '-') // Ganti spasi dengan tanda "-"
        .replace(/[^a-z0-9-]/g, '') // Hapus karakter selain huruf kecil, angka, dan "-"
    };

    // Ubah nilai slug setiap kali nilai title berubah
    const newSlug = generateSlug(title);
    setSlug(newSlug);
  }, [title]); // Bergantung pada perubahan nilai title



  const CLOUD_NAME = "inkara-id";
  const UPLOAD_PRESET = "myBlog_project_nextjs";


  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!photo || !title || !category || !desc || !slug || !date || !content) {

      return;
    }
    try {
      setLoading(true);
      const imageUrl = await uploadImage();

      const res = await fetch("/api/events", {
        headers: {
          "Content-Type": "application/json",
        },
        method: "POST",
        body: JSON.stringify({
          title,
          content,
          date,
          place,
          desc,
          slug,
          category,
          imageUrl,

        }),
      });

      if (!res.ok) {
        throw new Error("Error occured!");
      }
      await res.json();

      const setTimeoutId = setTimeout(() => {
        setLoading(false);
        router.push("/projects/events");
      }, 3000)
      return () => clearTimeout(setTimeoutId);

    } catch (error) {
      console.log(error);
    }
  };

  const uploadImage = async () => {
    if (!photo) return;
    const formData = new FormData();

    formData.append("file", photo);
    formData.append("upload_preset", UPLOAD_PRESET);

    try {
      const res = await fetch(
        `https://api.cloudinary.com/v1_1/${CLOUD_NAME}/image/upload`,
        {
          method: "POST",
          body: formData,
        }
      );
      const data = await res.json();
      const imageUrl = data["secure_url"];

      return imageUrl;
    } catch (error) {
      console.log(error);
    }
  };


    // Delete Client

  const deleteClient = async (slug) => {
    await axios.delete(`${process.env.NEXT_PUBLIC_API}/api/events/${slug}`);

    mutate(`${process.env.NEXT_PUBLIC_API}/api/events`);
    
  };


    const toggleModal = () => {
    setShowModal(!showModal);
  }



  return (

     <div className='relative w-full'>
      <div className='text-left  pb-8'>
        <button onClick={toggleModal} className='cursor-pointer py-2 px-3 rounded-3xl bg-black text-white' >Add Event</button>
      </div>
      {showModal ? (
         <form onSubmit={handleSubmit} className='w-full lg:w-[75%]'>
        <div className='flex items-start flex-col gap-2 mb-5'>
          <label>Title</label>
          <input value={title} onChange={(e) => setTitle(e.target.value)} placeholder='Masukkan Judul' type="text" className=' placeholder:text-sm w-full text-zinc-800 py-2 px-2 placeholder:text-zinc-400 border border-zinc-400 focus:outline-none focus:border-zinc-600' />
        </div>
        <div className='flex items-start flex-col gap-2 mb-5'>
          <label>Description</label>
          <input value={desc} onChange={(e) => setDesc(e.target.value)} placeholder='Deskripsi Judul max - 50 karakter' type="text" className=' placeholder:text-sm  w-full text-zinc-800 py-2 px-2 placeholder:text-zinc-400 border border-zinc-400 focus:outline-none focus:border-zinc-600' />
        </div>
        <div className='flex items-start flex-col gap-2 mb-5'>
          <label>Date</label>
          <input value={date} onChange={(e) => setDate(e.currentTarget.value)} placeholder='Tanggal Acara' type="text" className=' placeholder:text-sm  w-full text-zinc-800 py-2 px-2 placeholder:text-zinc-400 border border-zinc-400 focus:outline-none focus:border-zinc-600' />
        </div>
        <div className='flex items-start flex-col gap-2 mb-5'>
          <label>Place</label>
          <input value={place} onChange={(e) => setPlace(e.currentTarget.value)} placeholder='Nama Tempat' type="text" className=' placeholder:text-sm  w-full text-zinc-800 py-2 px-2 placeholder:text-zinc-400 border border-zinc-400 focus:outline-none focus:border-zinc-600' />
        </div>
        <div className='flex items-start flex-col gap-2 mb-5'>
          <label>Content</label>
          <input value={content} onChange={(e) => setContent(e.target.value)} placeholder='Max - 1000 karakter' type="text" className=' placeholder:text-sm  w-full text-zinc-800 py-2 px-2 placeholder:text-zinc-400 border border-zinc-400 focus:outline-none focus:border-zinc-600' />
        </div>
        {/* <div className='hidden items-start flex-col gap-2 mb-5'>
          <label>Slug</label>
          <input value={slug} onChange={(e) => setSlug(e.target.value)} placeholder='Max - 1000 karakter' type="text" className=' placeholder:text-sm  w-full text-zinc-800 py-2 px-2 placeholder:text-zinc-400 border border-zinc-400 focus:outline-none focus:border-zinc-600' />
        </div> */}
        <div className='flex items-start flex-col gap-2 mb-5'>
          <label>Category</label>
          <input value={category} onChange={(e) => setCategory(e.target.value)} placeholder='Event Management / Production / Branding' type="text" className=' placeholder:text-sm  w-full text-zinc-800 py-2 px-2 placeholder:text-zinc-400 border border-zinc-400 focus:outline-none focus:border-zinc-600' />
        </div>
        {/* File */}

        <div className="form-control w-full max-w-xs mb-5">
          <label className="label">
            <span className="label-text">Image Cover</span>
          </label>
          <input id="image" onChange={(e) => setPhoto(e.target.files[0])} type="file" className="file-input file-input-bordered w-full max-w-xs" />
        </div>

        <button
          className="btn capitalize btn-md text-sm w-fit px-8  font-normal border-none bg-[#2A323C] hover:bg-[#27303a] text-gray-300/80 "
          type="submit"
        >
          {loading ? <div className="flex items-center gap-1"><span>Loading...</span> <span className="loading loading-spinner loading-xs"></span></div> : <div>Publish</div>}
        </button>
      </form>
      ) : (
       <>

       {data?.map((item) => (
         <div key={item.id} className=' group border-b w-full  '>
           <div className='py-2 px-4 flex group-hover:bg-zinc-200/50 w-9/12 items-center justify-between group '>
            <h1>{item.title}</h1>
           <button className='py-1.5 px-3 bg-red-400 text-white rounded-xl hover:bg-red-600 ' onClick={() => deleteClient(item.slug)}>Delete</button>
           
           </div>
         </div>
       ))}

     </>
      )
        
      }
    </div>


   
  )
}

export default AddEventPages