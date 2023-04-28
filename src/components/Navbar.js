import React from 'react'

function Navbar() {
    return (
        <nav className='bg-[#212125] text-white'>
            <ul className='flex justify-between items-center px-5
            py-5 '>
                <li className='flex justify-between space-x-5'>
                    <div className='space-y-1 flex flex-col items-center justify-center'>
                        <div className="border-b-2 border-white w-5 hidden"></div>
                        <div className="border-b-2 border-white w-5"></div>
                        <div className="border-b-2 border-white w-5"></div>
                        <div className="border-b-2 border-white w-5"></div>
                    </div>
                    <div>
                        <img src="" alt="" />
                        <p>Mode</p>
                    </div>
                </li>
                <li className='w-[80%] flex justify-center items-center'>
                    <input type="text" className='w-[80%]' />
                </li>
                <li>Other func</li>
            </ul>
        </nav>
    )
}

export default Navbar