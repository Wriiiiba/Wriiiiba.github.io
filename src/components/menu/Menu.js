import {useEffect, useState} from "react";
import "./Menu.styles.css"
import axios from "axios";
import Content from "../content/Content";

function Menu() {
    const [categories, setCategories] = useState([])
    const [catsImg, setCatsImg] = useState([])
    const [categoryId, setCategoryId] = useState(1)
    const [count, setCount] = useState(10)
    useEffect(()=>{
        axios
            .get("https://api.thecatapi.com/v1/categories ")
            .then(data => setCategories(data.data))
    }, [])

    useEffect(()=>{
        axios
            .get(`https://api.thecatapi.com/v1/images/search?limit=${count}&page=1&category_ids=${categoryId}`)
            .then(data => setCatsImg(data.data))
    }, [categoryId, count])

    const handleClick=(id)=>{
        setCategoryId(id)
        setCount(10)
    }

    const moreHandleClick=()=>{
        setCount(prev => prev + 10)
    }

    const handleGoHome=()=>{
        setCategoryId(1)
        setCount(10)
    }

    return (
        <>
        <div className="container">
            <div className="menuItem" onClick={handleGoHome}>HOME</div>
            {categories.map((item)=>{
            return (
                <div className="menuItem" key={item.id} onClick={()=>{handleClick(item.id)}}>{item.name.toUpperCase()}</div>
            )
        })}</div>

        <Content catsImg={catsImg} />

       <div className="moreHandleBox"><button className="moreHandle" onClick={moreHandleClick}>More cats</button></div>
        </>
    )
}

export default Menu;