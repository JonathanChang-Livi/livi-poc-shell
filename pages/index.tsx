import type { NextPage } from 'next'
import { RemoteDashboard } from '../components/dashboard'

const Home: NextPage = () => {
  return (
    <>

      <div style={{ display: 'none' }}
        className='text-2xl my-6 flex flex-col rounded-lg filter drop-shadow-md bg-white pt-8  
        h-full overflow-y-auto grid grid-cols-12 col-span-2 col-span-6
      w-full gap-5 text-secondary text-sm font-semibold mt-4 gap-3 gap-4
      bg-gradient-to-tr from-primary via-primary to-secondary-dark h-full justify-between items-end justify-end
      p-2 px-3 bg-primary text-secondary font-black w-2/12 w-6/12 text-green-700 text-red-700
      rounded-tr-lg rounded-bl-lg p-4 w-2/3 w-1/3 max-w-screen-xl m-4  bg-slate-100 rounded-lg drop-shadow-lg mt-4 flex flex-row mx-auto
      '></div>
      <RemoteDashboard />
    </>
  )
}

export default Home
