import React, { useState, useEffect, useCallback } from "react";
import {useSelector} from 'react-redux'
import { useInView } from 'react-intersection-observer'


import Note from '../Note/Note'
import './style.css'

import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import axios from "axios";

export default function NoteList(props){
    const note=useSelector((state)=>state.note)
    
    const [items, setItems] = useState([])
    const [page, setPage] = useState(1)
    const [loading, setLoading] = useState(false)
    
    const [ref, inView] = useInView()
    const getItems = useCallback(async () => {
        setLoading(true)
        setItems(prevState => {
        // console.log(prevState);
        return [...prevState, ...note]}
        )
        setLoading(false)
    }, [page])
    
    useEffect(() => {
        getItems()
    }, [getItems])

    useEffect(() => {
        // 사용자가 마지막 요소를 보고 있고, 로딩 중이 아니라면
        if (inView && !loading) {
        setPage(prevState => prevState + 1)
        }
    }, [inView, loading])


    return (
        <>
            <Row 
            xs={1} sm={2} md={3} lg={4} 
            className="g-4 card-container list" 
            style={{margin : 0}}
            >
                {items.map((item, idx) => (
                    <React.Fragment key={idx}>
                    {items.length - 1 == idx ? (
                        <Col ref={ref} >
                            <Note note={item} id={idx} key={idx}/>
                        </Col>
                    ) : (
                        <Col>
                            <Note note={item} id={idx} key={idx} />
                        </Col>
                    )}
                    </React.Fragment>
                ))}
            </Row>
        </>
    );
}