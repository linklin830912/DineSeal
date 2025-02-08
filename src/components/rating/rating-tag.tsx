import React, { useEffect, useState } from "react";
type RatingTagProps = {
    values: string[];
    handleTagSelected:(x:string[]) => void
}
export default function RatingTag(props: RatingTagProps) { 
    const [isOpen, setIsOpen] = useState(false);
    const [tags, setTags] = useState<string[]>([]);
    const [validValues, setValidValues] = useState<string[]>(props.values);
    useEffect(() => { 
        setIsOpen(false)
    }, [tags])
    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        
    }
    return <div className="w-full flex flex-col">
        <div className="w-full flex relative flex-col">
            <input className="w-full border-2 border-svgStrokeColor0 px-2 py-1 focus:outline-none text-h4 rounded-md"
                placeholder="What do you eat?"
                onFocus={() => { setIsOpen(true) }}
                onChange={handleInputChange}
            />
        {isOpen && <ul className="absolute w-full bg-backgroundColor0 top-[35px] text-h4">{
            validValues.map((x, index) => <li className="w-full"
                key={index}  ><button value={x}
                    className="w-full px-2 py-1 text-fontColor0 text-left text-h4 shadow-[0_2px_0px_0] shadow-fontColor0"
                    onClick={(e: React.MouseEvent<HTMLButtonElement>) => {
                        setTags([...tags, x])
                        let newValidValues = [...validValues];
                        newValidValues = newValidValues.filter((v) =>  v !== x )
                        setValidValues(newValidValues);
                        props.handleTagSelected([...tags, x]);
                    }}>{x.toUpperCase()}</button></li>)
            }
        </ul>}
        </div>
        <div className="w-full flex mt-1 flex-wrap">{
            tags.map((tag, index) => <div className="px-2 py-1 mb-1 mr-1 rounded-[50px] bg-buttonColor0 text-h6" key={index}>{ tag.toUpperCase() }</div>)
        }</div>
        
    </div>
}