import React from 'react'
import useFetch from './useFetch'

const SomeComp = () => {
  const {data, loading} = useFetch("https://jsonplaceholder.typicode.com/posts")

  return (
    <div>SomeComp</div>
  )
}

export default SomeComp