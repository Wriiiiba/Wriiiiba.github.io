function Content(props) {
    return (
        <div className="cats">
            {props.catsImg.map((item)=>{
                return (
                    <div className="catsItem">
                        <img  src={item.url}/>
                    </div>
                )
            })}
        </div>
    )
}

export default Content;