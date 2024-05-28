import React from 'react';
import html from '../assests/html.png';
import css from '../assests/css.png';
import js from '../assests/JavaScript.png';
import php from '../assests/php.png';
import next from '../assests/next.png';
import react from '../assests/react.png';
import tailwind from '../assests/tailwind.png';
import bootstrap from '../assests/bootstrap.png';
import mysql from '../assests/sql.png';
import msoffice from '../assests/office.png';
import Image from 'next/image';
import ci from '../assests/ci.png';

function Skills() {
    const skills = [
        {
            title: 'Technical Skills',
            content: [
                {
                    name: 'HTML',
                    img: html
                },
                {
                    name: 'CSS',
                    img: css,
                },
                {
                    name: 'JavaScript',
                    img: js
                },

                {
                    name: 'PHP',
                    img: php
                },
                {
                    name: 'CodeIgniter',
                    img: ci
                },
                {
                    name: 'React JS',
                    img: react
                },
                {
                    name: 'Next JS',
                    img: next
                },
                {
                    name: 'Tailwind',
                    img: tailwind,
                },
                {
                    name: 'Bootstrap',
                    img: bootstrap
                },
                {
                    name: 'MySQL',
                    img: mysql
                },

                {
                    name: 'MsOffice',
                    img: msoffice
                },


            ]
        },
        {
            title: 'Skills',
            content: [
                {
                    name: 'Communication',
                    img: html
                },
                {
                    name: 'Teamwork',
                    img: html
                },
                {
                    name: 'Communication',
                    img: html
                },

            ]
        }
    ];

    return (
        <div id='skills' className='container m-auto '>
            {skills.map((item, index) => (
                <div key={index} id='about' className='grid grid-cols-1 lg:grid-cols-3 py-20 m-auto container px-[10%] bg-white h-full'>
                    <div className='col-span-1 my-auto'>
                        <div className='flex gap-2 mb-3 text-[22px] lg:text-[30px] justify-center'>
                            {item.title}
                        </div>
                    </div>
                    <div className="col-span-2 lg:flex w-full">
                        <div className={`h-[2px] w-full lg:h-full ${item.title == 'Technical Skills' ? 'lg:w-[5px]' : 'lg:w-[2px]'} my-5 lg:my-0 bg-black rounded-full flex`} />
                        <div className="lg:flex flex-wrap gap-x-4 gap-y-4 lg:gap-y-10 lg:ml-20">
                            {item.content.map((item, index) => (
                                <div key={index} className='flex items-center mb-4 lg:mb-0'>
                                    <div className='h-14 w-14 relative '>
                                        <Image src={item.img} alt={item.name} objectFit='contain' layout='fill' className='h-fit w-fit' />
                                    </div>
                                    <div className='ml-2 text-center'>{item.name}</div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
}

export default Skills;
