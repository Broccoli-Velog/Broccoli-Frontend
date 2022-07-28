import React from "react";
import { useState, useRef, useEffect } from 'react';
import {useSelector} from 'react-redux'

import Note from '../Note/Note'
import './style.css'

import Row from 'react-bootstrap/Row';

export default function NoteList(props){
    const note=useSelector((state)=>state.note)
    
    return (
        <>
            <Row 
            xs={1} sm={2} md={3} lg={4} 
            className="g-4 card-container" 
            style={{margin : 0}}
            >
                {note.map((_, idx) => (
                    <Note note={_} id={idx} key={idx} />
                ))}
            </Row>
        </>
    );
}