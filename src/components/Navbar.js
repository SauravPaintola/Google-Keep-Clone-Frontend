import React, { useState } from 'react'

function Navbar() {


    const [searchBarView, setSearchBarView] = useState(0);
    const [sideBarView, setSideBarView] = useState(0)
    const [sideBarOption, setSideBarOption] = useState(0)
    const sideOptions = [
        { id: 0, name: 'Notes', symbol: "lightbulb" },
        { id: 1, name: 'Reminders', symbol: "notifications" },
        { id: 2, name: 'Edit labels', symbol: "edit" },
        { id: 3, name: 'Archive', symbol: "archive" },
        { id: 4, name: 'Trash', symbol: "delete" },
    ]
    return (
        <nav className='bg-[#212125] text-white text-sm relative'>
            <div className={`bg-[#212125] text-white ${sideBarView ? "w-12" : "w-56"} transition-all duration-500 absolute h-[100vh] -z-10 top-[68px] flex flex-col  items-center space-y-3`} id="sidebar">
                {
                    sideOptions.map((data) => {
                        return <div onClick={() => {
                            setSideBarOption(data.id)
                            setSideBarView(0)
                        }} id={data.id} className={`${sideBarOption === data.id ? "bg-[#41331c]" : ""} transition-all duration-500 rounded-full p-2  flex justify-start items-center space-x-5 ${sideBarView ? "" : "pr-16 pl-5 w-full  rounded-l-none"}`}>
                            <span class="material-symbols-outlined ">
                                {data.symbol}
                            </span>
                            {!sideBarView && <span className='whitespace-nowrap'>{data.name}</span>}
                        </div>
                    })
                }


            </div>
            <ul className='flex justify-between items-center px-5 z-10
            py-5 '>
                <li className='flex justify-between space-x-5'>
                    <div className='space-y-1 flex flex-col items-center justify-center' onClick={() => { setSideBarView(!sideBarView) }}>
                        <div className="border-b-2 border-white w-4"></div>
                        <div className="border-b-2 border-white w-4"></div>
                        <div className="border-b-2 border-white w-4"></div>
                    </div>
                    <div className='flex justify-center items-center space-x-2 '>
                        <span class="material-symbols-outlined">
                            description
                        </span>
                        <p className='text-xl'>Keep</p>
                    </div>
                </li>
                <li className='flex justify-end pr-3 md:pr-0 md:justify-between items-center rounded-md w-full md:w-[60%] md:bg-[#f1f3f43d] md:px-5 '>
                    <span onClick={() => { setSearchBarView(1) }} className="material-symbols-outlined">
                        search
                    </span>

                    <input type="text" className='w-full bg-transparent hidden px-3 py-2 focus:outline-none' placeholder='Search' />
                    <div className={`${searchBarView ? 'flex' : 'hidden'} absolute w-44 bg-white rounded-md left-0  items-center px-2`} onMouseDown={() => { setSearchBarView(0) }}>
                        <span onClick={() => { setSearchBarView(0) }} class="material-symbols-outlined text-gray-600 text-base font-bold">
                            arrow_back
                        </span>
                        <input type="text" className='w-full bg-transparent px-3 py-2 focus:outline-none text-gray-800' placeholder='Search' />

                    </div>
                </li>
                <li className='flex'>
                    <div className='flex justify-center items-center space-x-4'>
                        <span class="material-symbols-outlined">
                            sync
                        </span>
                        <span class="material-symbols-outlined hidden">
                            gallery_thumbnail
                        </span>
                        <span class="material-symbols-outlined">
                            settings
                        </span>
                    </div>
                    <div className='flex justify-between items-center'>

                        <div className='-space-x-4 flex justify-center items-center'>
                            <span class="material-symbols-outlined font-semibold">
                                more_vert
                            </span><span class="material-symbols-outlined font-semibold">
                                more_vert
                            </span><span class="material-symbols-outlined font-semibold">
                                more_vert
                            </span>
                        </div>

                        <div className='rounded-full h-5 w-5 shadow bg-green-500 text-center flex justify-center items-center'>
                            <p>S</p>
                        </div>
                    </div>
                </li>
            </ul>
        </nav>
    )
}

export default Navbar