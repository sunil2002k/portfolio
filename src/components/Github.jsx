import React, { useEffect,useState } from 'react'

const Github = () => {
    
    const [data, setData] = useState([])

    useEffect( () => {
        async function fetchData() {
         fetch('https://api.github.com/users/sunil2002k')
        .then(response=> response.json())
        .then(data=>{setData(data)})
}
fetchData()},[])
  return (
    <>
    <div>Github followers  {data.followers}</div>
    <img src={data.avatar_url }alt="git picture" className='h-10 w-10 rounded-[50%]   ' />
    </>
  )
}

export default Github