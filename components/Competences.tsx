import React from 'react';
import { motion } from "framer-motion";
import Competence from './Competence';

type Props = {}

function Competences({ }: Props) {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1.5 }}
            className='flex relative flex-col text-center
            md:text-left xl:flex-row max-w-[200px] xl:px-10 min-h-screen justify-center
            xl:space-y-0 mx-auto items-center'>
            <h3 className='absolute top-24 uppercase tracking-[20px] text-gray-500
            text-2xl'>
                Competences
            </h3>
            <h3 className='absolute top-36 uppercase tracking-[3px] text-gray-500 text-sm'>
                diplomes et competences de Mme Sadat
            </h3>
            <div className='grid grid-cols-3 gap-5'>
                <Competence />
                <Competence />
                <Competence />
                <Competence />
                <Competence />
                <Competence />
                <Competence />
                <Competence />
                <Competence />
            </div>
        </motion.div>
    );
}

export default Competences;