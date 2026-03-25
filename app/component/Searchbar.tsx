import { LiquidMetal } from '@paper-design/shaders-react'
import React from 'react'



const Searchbar = () => {
  return (
    <div className='flex h-screen w-screen items-center bg-black '>
      <div className='flex h-96 w-4xl items-center justify-center shadow-[inset_0_2px_10px_rgba(255,255,255,0.25),inset_0_-3px_6px_rgba(0,0,0,0.9)] gap-28 rounded-r-full'>
        
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-36 text-neutral-400">
            <path strokeLinecap="round" strokeLinejoin="round" d="m18.375 12.739-7.693 7.693a4.5 4.5 0 0 1-6.364-6.364l10.94-10.94A3 3 0 1 1 19.5 7.372L8.552 18.32m.009-.01-.01.01m5.699-9.941-7.81 7.81a1.5 1.5 0 0 0 2.112 2.13" />
        </svg>
        
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-36 text-neutral-400">
            <path fillRule="evenodd" d="M9 4.5a.75.75 0 0 1 .721.544l.813 2.846a3.75 3.75 0 0 0 2.576 2.576l2.846.813a.75.75 0 0 1 0 1.442l-2.846.813a3.75 3.75 0 0 0-2.576 2.576l-.813 2.846a.75.75 0 0 1-1.442 0l-.813-2.846a3.75 3.75 0 0 0-2.576-2.576l-2.846-.813a.75.75 0 0 1 0-1.442l2.846-.813A3.75 3.75 0 0 0 7.466 7.89l.813-2.846A.75.75 0 0 1 9 4.5ZM18 1.5a.75.75 0 0 1 .728.568l.258 1.036c.236.94.97 1.674 1.91 1.91l1.036.258a.75.75 0 0 1 0 1.456l-1.036.258c-.94.236-1.674.97-1.91 1.91l-.258 1.036a.75.75 0 0 1-1.456 0l-.258-1.036a2.625 2.625 0 0 0-1.91-1.91l-1.036-.258a.75.75 0 0 1 0-1.456l1.036-.258a2.625 2.625 0 0 0 1.91-1.91l.258-1.036A.75.75 0 0 1 18 1.5ZM16.5 15a.75.75 0 0 1 .712.513l.394 1.183c.15.447.5.799.948.948l1.183.395a.75.75 0 0 1 0 1.422l-1.183.395c-.447.15-.799.5-.948.948l-.395 1.183a.75.75 0 0 1-1.422 0l-.395-1.183a1.5 1.5 0 0 0-.948-.948l-1.183-.395a.75.75 0 0 1 0-1.422l1.183-.395c.447-.15.799-.5.948-.948l.395-1.183A.75.75 0 0 1 16.5 15Z" clipRule="evenodd" />
        </svg>
        <div className='relative overflow-hidden rounded-full border-4 border-neutral-800'>
                <LiquidMetal
                    width={330}
                    height={330}
                    colorBack="#1a1a1a"
                    colorTint="#ffffff"
                    shape="circle"
                    repetition={1.5}
                    softness={0.5}
                    shiftRed={0.3}
                    shiftBlue={0.3}
                    distortion={0.07}
                    contour={0.4}
                    angle={100}
                    speed={0.6}
                    scale={1.5}
                    fit="cover"
                />
                <div className='group absolute inset-0 m-4 rounded-full
                    flex items-center justify-center border-t-4 border-neutral-600 text-neutral-500
                    bg-[linear-gradient(to_bottom,#525252,#000000,#525252)]
                    bg-[length:100%_200%]
                    bg-top transition-[background-position] duration-[900ms] ease-[cubic-bezier(0.22,1,0.36,1)]
                    hover:bg-bottom  '>             
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" className='size-40 transition-transform duration-[900ms] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:-translate-y-2' strokeLinejoin="round">
                        <path d="m5 12 7-7 7 7"/><path d="M12 19V5"/>
                    </svg>
                </div>
        </div>
        

      </div>
    </div>
  )
}

export default Searchbar
