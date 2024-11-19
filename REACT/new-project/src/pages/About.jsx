import { useNavigate } from "react-router-dom"

const About = () => {
  const navigate = useNavigate()

  const handleNavigate = () => {
    navigate('/')
  }

  return (
    <>
      <button onClick={handleNavigate}>Torna a Home</button>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum rerum perspiciatis, quaerat itaque, dicta recusandae doloremque in quo eligendi voluptatem officia. Omnis reiciendis aspernatur perspiciatis soluta, at ipsam libero quasi.</p>
    </>
  )
}

export default About