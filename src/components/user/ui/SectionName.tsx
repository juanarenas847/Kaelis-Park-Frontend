
interface Props {
    name: string;
    desc: string;
}


export const SectionName = ({name , desc} : Props) => {
  return (
    
                <div className="p-0">
    
                    <h1 className="text-sm  font-bold">
                        {name}
                    </h1>
                    <p className="text-xs opacity-50">
                        {desc}
                    </p>
    
                </div>
    
  )
}
