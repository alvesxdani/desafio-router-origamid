/* eslint-disable react/prop-types */
import { useEffect } from "react"

const Head = ({ title, desc}) => {
  useEffect(() => {
    document.title = title;
    document.querySelector('meta[name="description"]').setAttribute('content', desc)
  }, [title, desc])

  return <></>
}

export default Head