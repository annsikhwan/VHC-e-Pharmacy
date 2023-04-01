import React, {useContext, useState} from 'react';
import { Draggable } from "react-beautiful-dnd";
import {AiOutlineDelete} from 'react-icons/ai';
import {ImDownload3} from 'react-icons/im';
import {MdDragIndicator} from 'react-icons/md';

import {CourseContext} from '../../../CourseContext';

export function Resource({lecture, resource, index}){
    const context = useContext(CourseContext)

    const deleteResource = e => {
        if(confirm('This will permanently delete the file from server.\nAre you sure to continue?')){
            context.deletedResourceFile(lecture.id, resource.id)
        }
    }

    return (
        <Draggable draggableId={`resource_${resource.id}`} index={index} type='resource'>
            {(provided, snapshot)=>{
                return (
                    <div
                        ref={provided.innerRef}
                        {...provided.dragHandleProps}
                        {...provided.draggableProps}
                        className={(index % 2) == 1 ? 'odd': ''}
                    >
                        <div className="resource-container" style={{background: snapshot.isDragging ? '#eeeeee' : 'white' }}>
                            <strong><MdDragIndicator style={{cursor: 'grab'}}/></strong>
                            <span>{resource.title}</span>
                            <span>{context.filesizeWithUnit(resource.size)}</span>
                            <span>{resource.type}</span>
                            <span>{resource.created_at}</span>
                            {/* {console.log(resource)} */}
                            <span style={{display: 'flex', gap: '10px'}}>
                                <ImDownload3 className="svg-btn" style={{color: '#1568c1'}} onClick={e => context.downloadResourceFile(lecture.id, resource.id)} />
                                <AiOutlineDelete className="svg-btn" style={{color: 'red'}} onClick={deleteResource}/>
                            </span>
                        </div>
                    </div>
                )
            }}
        </Draggable>
    )
}