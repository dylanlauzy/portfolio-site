import Image from "next/image";

interface ProjectProps {
  date: string;
  icon: string;
  body: string;
}

const Timeline = ({ events, isActive }: {events: ProjectProps[], isActive: boolean}) => {
  return (
    <div className="flex flex-col">
      {events.map((event, index) => (
        <div className="flex gap-x-5">
          <div className="flex flex-col">
            <div className="flex w-8 h-8 rounded-full border-2 w-8 h-8">
              <Image className="m-auto" src={event.icon} alt="icon" width={14} height={14}/>
            </div>
            {(isActive || index != events.length - 1) && (
              <div className="w-0.5 grow bg-accent self-center"></div>
            )}
          </div>
          <div className="flex flex-col gap-y-1 w-full mb-10">
            <h1 className="text-sm font-bold">{event.date}</h1>
            <div className="text-sm">{event.body}</div>
          </div>
        </div>
      ))}

      {isActive && (

        <div className="flex gap-x-5">
          <div className="flex flex-col">
            <div className="flex w-8 h-8 rounded-full border-2 border-dashed w-8 h-8"></div>
          </div>
          <div className="flex grow gap-y-1 w-full">
            <h1 className="text-sm text-gray-300 my-auto">Coming soon...</h1>
          </div>
        </div>
      )}
    </div>
  )
}

export default Timeline