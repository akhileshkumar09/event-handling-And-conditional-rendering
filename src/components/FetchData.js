import React,{useState, useEffect} from 'react'

function FetchData() {
    const [data, setData] = useState('');
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null)

    useEffect(() => {
        const url = 'https://jsonplaceholder.typicode.com/posts';

        fetch(url)
        .then((response)=>{
          if(!response.ok){
             throw new Error('Network response was not ok')
          }
          return response.json();
        })
        .then((data)=>{
          setData(data);
          setLoading(false);
        })
        .catch((error)=>{
          setError(error);
          setLoading(false);
        })

    
    }, [])

    if(loading){
      return <h2>loading...</h2>
    }

    if(error){
      return <h2>Error...</h2>
    }
    
  return (
    <div>
        <h2>Fetched Data</h2>
        <ul>
            {
              data.map((item)=>(
                <li key={item.key}>{item.title}</li>
              ))
            }
        </ul>
    </div>
  )
}

export default FetchData