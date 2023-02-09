import type { NextPage } from 'next'

const Home: NextPage = () => {
  return (
    <>

      <div style={{ display: 'none' }} className='text-2xl my-6 flex flex-col rounded-lg filter drop-shadow-md bg-white pt-8  
        h-full overflow-y-auto grid grid-cols-12 col-span-2 col-span-6
        bg-secondary
        gap-2 bg-center bg-cover m-auto 
        bg-[#EEB155] bg-[#A796CC] bg-[#88b1DB] bg-[#CD808B] bg-[#D3BC8D] w-3 h-3 rounded-full
        absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-4xl text-left  relative max-w-[150px]
    w-full h-full grid grid-cols-2 gap-5 my-1 my-2 h-[1px] text-blue-600 bg-primary bg-secondary
    mx-2 w-4 h-4 rounded-[4px] mx-4 rounded-b-lg mx-3
        text-slate-400 group-hover:text-white mx-3
        bg-slate-200 border-slate-100 shadow-lg  h-[100vh] text-slate-600 text-slate-700 text-2xl items-end grid-cols-3 p-5
        text-primary text-secondary h-5 bg-gray-200 rounded-full dark:bg-gray-700 mb-3
      w-full gap-5 text-secondary text-sm font-semibold mt-4 gap-3 gap-4 animate-pulse w-1/2 h-8
      bg-gradient-to-tr from-primary via-primary to-secondary-dark h-full justify-between items-end justify-end
      p-2 px-3 bg-primary text-secondary font-black w-2/12 w-6/12 text-green-700 text-red-700
      bg-slate-200 border-slate-100 my-2 text-slate-600 text-slate-700 p-5 w-1/2 pr-4 rounded-tl-lg rounded-tr-lg rounded-t-lg mr-2 border-r-2 shadow-lg grid-
      rounded-tr-lg rounded-bl-lg p-4 w-2/3 w-1/3 max-w-screen-xl m-4  bg-slate-100 rounded-lg drop-shadow-lg mt-4 flex flex-row mx-auto
      '></div>
    </>
  )
}

export default Home
