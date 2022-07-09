import React, {FC} from 'react';
import '../Style.scss';


interface ToolProps {
    icon: string
    title: string,
    level: string,
    color: string,
    id?: string,
}


 
const Tool: FC<ToolProps> = (props) => {
    return (
        <div className="tool_container">
          <div className="tool">
            <img src={props.icon} alt="" className="icon" id={props.id} />
            <div className="tool_title" id={props.color} >{props.title}</div>
          </div>
          <div className="tool_level_container">
            <div className="tool_level" id={props.level} color={props.color}></div>
          </div>
          
        </div>
    );
}
 
export default Tool;