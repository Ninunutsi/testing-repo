import { useEffect, useState } from "react"

function useFetch(url){
    const [data, setData] = useState(null)
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        const fetchData = async () => {
            try {
                const resp = await fetch(url)
                if(!resp.ok){
                    throw new Error("not ok")
                }
                const result = await resp.json()
                setData(result)
                setLoading(false)
            } catch (error) {
                console.log(error)
                setLoading(false)
            }
        }
        fetchData()
    }, [url])


     return {data, loading}
}

export default useFetch