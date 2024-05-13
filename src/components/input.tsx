
interface Props{
    style?: React.CSSProperties;
    placeholder?: string;
    type: string;
    children: React.ReactNode;
    value?: string;
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void; 
    required?: boolean;
}
export default function Input(props: Props){
    return (
        <div className="flex flex-col ">
            <label className="text-sm text-xs text-zinc-500 mb-1">{props.children}</label>
            <input onChange={props.onChange} required={props.required} placeholder={props.placeholder} style={props.style} value={props.value}  type={props.type} className="bg-zinc-50 p-1 text-black rounded-md ring-1 ring-zinc-900/20 mb-3 w-72"></input>
        </div>
    )
}