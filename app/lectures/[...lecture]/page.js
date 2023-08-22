const page = ({params}) => {
  return (
    <div>
        <h1>Day :{params.lecture[0]}</h1>
        <h3>Lecture : {params.lecture[1]}</h3>
    </div>
  )
}

export default page