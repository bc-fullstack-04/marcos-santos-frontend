

interface Props{
    children: React.ReactNode;
    type?: "submit";
}

export default function Button(props: Props) {

    return (
     <>
        <button type={props.type} className="bg-black rounded-sm text-white h-10 mt-5">{props.children}</button>
     </>
    )
  }
  
  