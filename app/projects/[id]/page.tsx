
import projects from "@/data/projects.json"

const page = ({ params }: { params: { id: string}}) => {
  const projectData = projects.find((project) => project.id === params.id)

  return (
    <div>{projectData?.title}</div>
  )
}

export default page