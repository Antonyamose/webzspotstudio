import React from 'react'
import { motion } from 'motion/react'
import ChooseTemp from './ChooseTemp'

const Choose = () => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className='text-center bg-[#F7F7F7] mt-10 py-18 px-4 md:px-0'
        >
            <p className='bg-black inline-block text-white font-medium px-4 py-2 rounded-lg mb-10'>
                ✦ Why Choose Webzspot
            </p>

            <motion.div
            initial={{opacity:0,x:30}}
            whileInView={{opacity:1,x:0}}
            transition={{duration:1}}
            >
                <p className=' mx-5 mt-[15px] mb-4 md:mb-8 text-xl md:text-6xl font-semibold'>Our strengths <span className='text-[#FF7A0D]'> that set us apart</span> </p>
                <p className='text-[#555] text-2xl mb-8'>Why Webzspot is different and efficient from old school photo delivery methods.</p>
            </motion.div>

            <ChooseTemp />
        </motion.div>
    )
}

export default Choose