import React, { useEffect, useState } from 'react'
import { useLoaderData } from 'react-router-dom'

function GitHub() {
    const data= useLoaderData()
    // const [data, setData] = useState([])
    // useEffect( ()=> {
    //     fetch('https://api.github.com/users/BhagyashreeGhodke')
    //     .then(response => response.json())
    //     .then(data => {
    //         console.log(data);
    //         setData(data)
    //     })
    // }, [])
    return (
        <>
        <div className='text-center m-4 bg-gray-600 text-white p-4 text-3xl'>GitHub Public Repos: {data.public_repos} 
        <img  src={data.avatar_url} alt="Github avatar" width={300}/>
        </div>
        </>
    )
}

export default GitHub

export const githubInfoLoader = async () => {
    const response = await fetch('https://api.github.com/users/BhagyashreeGhodke')
    return response.json()
}