import React from 'react'
interface gridobj {
    id:number,
  imgsrc: string,
  title: string,
  info: string,
}
interface gridProps {
    data: gridobj;
  }
  
const Gridsection:React.FC<gridProps> = ({data}) => {
  return (
    <div className={`gridbox${data.id} gridbox`}>
        <div className="gridtext">
            <p className="gridtitle">{data.title}</p>
            <p className='gridinfo'>{data.info}</p>
        </div>
        <div className="gridimg">
            <img src={data.imgsrc} alt="bottle" />
        </div>
    </div>
  )
}

export default Gridsection