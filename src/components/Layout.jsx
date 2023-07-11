import React from 'react'

export default function Layout(props) {
    const{ children } = props
  return (
    <div className='min-h-screen bg-slate-900 text-white flex flex-col gap-10 p-4'>
        <header className='flex flex-col gap-4 items-center justify-center max-w-[800px] py-16 sm:py-20 w-full mx-auto'>
          <h1 className="text-lg sm:text-3xl md:text-4xl font-semibold text-center">Compound Interest Calculator</h1>
        <div className='flex items-center gap-4 text-2xl'>
        <i class="fa-solid fa-money-check-dollar"></i>
        <i class="fa-solid fa-money-check-dollar"></i>
        <i class="fa-solid fa-money-check-dollar"></i>

        </div>
        </header>
        <p className='text-center font-slate-200 text-sm md:text-base'>Compound till I die!</p>
        <main className='flex-1 flex flex-col gap-6 max-w-[600px] w-full mx-auto'>
        {children}
        </main>
        <footer></footer>
        </div>
  )
}
