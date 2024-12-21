import { validate } from "graphql";
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
            <input className="w-full border border-s-fontMainColor placeholder:text-fontMainPaceholderColor focus:outline-none focus:border-s-fontMainHoverColor text-h6"
                placeholder="What do you eat?"
                onFocus={() => { setIsOpen(true) }}
                onChange={handleInputChange}
            />
        {isOpen && <ul className="absolute w-full bg-pageBackgroundSecondary1Color top-[20px] text-h5">{
            validValues.map((x, index) => <li className="w-full"
                key={index}  ><button value={x}
                    className="w-full pl-1 py-1 text-fontMainColor text-left text-h5"
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
        <div className="w-full flex flex-row mt-2 flex-wrap">{
            tags.map((tag, index) => <div className="px-3 py-1 mb-1 mr-1 rounded-[50px] bg-pageSvgPath0Color text-h6" key={index}>{ tag.toUpperCase() }</div>)
        }</div>
        
    </div>
}