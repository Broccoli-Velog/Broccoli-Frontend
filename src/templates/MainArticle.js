import React from "react";

const items=[{title: '아이템1', text: 'a'}, {title: '아이템2', text: 'b'}]

function MainArticle(){
    return (
        <>
            <div>MainArticle</div>
            { items.map((item, i)=> <Items key={i} list={{item}} /> )}
        </>
    )
}

function Items(props){
    const {title, text}=props.list.item;
    return (
        <div>
            title: {title}, {text}
        </div>
    )
}


export default MainArticle;