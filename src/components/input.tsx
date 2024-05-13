

interface Props{
    children: React.ReactNode;
    type: string;
    onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
}


export default function Input(props : Props) {

    return (
     <>
        <label className=" text-zinc-500">{props.children}</label>
                <input onChange={props.onChange} className="border-l-teal-950 rounded-sm h-8 hover:ring-cyan-600" type={props.type} />
     </>
    )
  }
  
  