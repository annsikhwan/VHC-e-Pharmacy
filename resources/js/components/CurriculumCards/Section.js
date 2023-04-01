import React, {useContext, useState, useCallback} from 'react';
import { Droppable, Draggable } from "react-beautiful-dnd";
import {useDropzone} from 'react-dropzone'

import {CourseContext} from '../../../CourseContext';

import {MdDragIndicator, MdDeleteOutline, MdClose, MdFileUploadOff} from 'react-icons/md';
import {FaAngleDown, FaAngleRight} from 'react-icons/fa';
import {CiEdit} from 'react-icons/ci';
import {GiCheckMark} from 'react-icons/gi';

import Lecture from './Lecture';
import NewLecturePopup from './NewLecturePopup';
import { AiOutlineRedo } from 'react-icons/ai';


export default function Section({ section, index, toggleSection, isExpanded }){
    const context = useContext(CourseContext)
    const [expandedLectures, setExpandedLectures] = useState([])
    const [editingSection , setEditingSection] = useState({})
    const [showLecturePopup , setShowLecturePopup] = useState(false)

    const toggleLecture = (lecture) => {
        let expanded = [...expandedLectures]
        if(expandedLectures.includes(lecture.id)){
            expanded.splice(expanded.indexOf(lecture.id), 1)
        }else{
            expanded.push(lecture.id)
        }
        setExpandedLectures(expanded)
    }

    const handleChange = (e) => {
        let section = {...editingSection}
        section.title = e.target.value
        setEditingSection(section)
    }
    
    const saveSectionTitle = (e) => {
        console.log(e)
        // constext save section title
        context.saveSectionTitle(editingSection, index)
        setEditingSection({})
    }
    const cancelEditTitle = (e) => {
        console.log(e)
        setEditingSection({})
    }

    const onDrop = useCallback(files => {
        context.uploadFilesAsLectures(files, section)
    }, [])
    const {getRootProps, getInputProps, isDragActive} = useDropzone({onDrop})


    


    return (
        <>
            <Draggable
                draggableId={`section_${section.id}`}
                index={index}
                type="section"
                payload={section}
            >
                {(provided, snapshot) => (
                    <div
                        ref={provided.innerRef}
                        {...provided.draggableProps}
                        {...provided.dragHandleProps}
                    >
                        <div className="section-container" style={{backgroundColor: snapshot.isDragging ? '#0000ff10' : 'white'}} >
                            <div className="section-header">
                                <div className="section-header-controls">
                                    <MdDragIndicator className="drag-handle" />
                                    {isExpanded ? <FaAngleDown className="svg-btn" onClick={e => toggleSection(section)}/> : <FaAngleRight className="svg-btn" onClick={e => toggleSection(section)}/> }
                                </div>
                                <h3 onClick={e => setEditingSection(section)}>
                                    {section.id == editingSection.id ? 
                                        <input type="text" name="title" value={editingSection.title} onChange={handleChange}/>
                                        :
                                        <>
                                            <small>Section {index+1}: </small>
                                            {section.title}<CiEdit className="svg-btn"/>
                                        </>
                                        }
                                </h3>
                                <div className="section-header-controls">
                                    {section.id == editingSection.id && <>
                                        <GiCheckMark onClick={saveSectionTitle} className="svg-btn"/>
                                        <MdClose onClick={cancelEditTitle} className="svg-btn"/>
                                    </>}
                                    <MdDeleteOutline className="svg-btn" onClick={e => context.deleteSection(index)}/>
                                </div>
                            </div>
                            {isExpanded &&
                            <Droppable droppableId={`section_${section.id}`} type="lecture">
                                {(provided, snapshot) => (
                                    <>
                                        <div
                                            ref={provided.innerRef}
                                            {...provided.droppableProps}
                                        >
                                            <div className="lectures-container" style={{backgroundColor: snapshot.isDraggingOver ? '#ccccccaa' : 'white'}}>
                                                {section.lectures?.map((lecture, i) => (
                                                    <Lecture
                                                        key={lecture.id}
                                                        lecture={lecture}
                                                        index={i}
                                                        sectionIndex={index}
                                                        toggleLecture={toggleLecture}
                                                        isExpanded={expandedLectures.includes(lecture.id)}
                                                    />
                                                ))}
                                                {provided.placeholder} 
                                            </div>
                                        </div>
                                        
                                        
                                        <div className="add-lectures-dropzone">
                                            <div className="uploading-files">

                                                {Object.keys(context.uploadFilesQue).map((key,index)=>{
                                                    let file = context.uploadFilesQue[key]
                                                    if(file.section_id == section.id){

                                                        return (
                                                            <div key={index} className="uploading-file">
                                                                <div className="file-details">
                                                                    <div className="file-name">
                                                                        <strong>Name:</strong> {file.file.name}
                                                                    </div>
                                                                    <div className="file-size">
                                                                        <strong>Size:</strong> {context.filesizeWithUnit(file.file.size)}
                                                                    </div>
                                                                    {file.error && 
                                                                    <div className="failed-options" style={{fontSize: '20px', lineHeight: '20px', display: 'flex', gap: '10px'}}>
                                                                        <MdFileUploadOff className="svg-btn" onClick={e => context.cancelUpload(key)} style={{color: 'red'}} title="Cancel upload"/>
                                                                        <AiOutlineRedo className="svg-btn" onClick={e => context.retryUpload(key)} title="Retry Upload"/>
                                                                    </div>}
                                                                </div>
                                                                <div className="progress-bar-rail">
                                                                    {parseInt(file.progress) == 100 ? 
                                                                    <>{file.error? 'Failed to process the file':'Processing...'}</> :
                                                                    <>{file.progress?.toFixed(2)} %</>}
                                                                    <div className="progress-bar-success" style={{width: `${file.progress}%`}} ></div>
                                                                </div>
                                                            </div>
                                                        )
                                                    }
                                                })}
                                            </div>
                                            
                                            <div {...getRootProps()} className="lecture-files-dropzone">
                                                <input {...getInputProps()} />
                                                {
                                                    isDragActive ?
                                                    <p className="dragged-files"> <br/>Drop the files here ...</p> :
                                                    <p>Drag 'n' drop some videos, audios or documents here to create lectures from files.<br/>OR<br/></p>
                                                }
                                            </div>
                                            <button type="button" className="btn btn-primary" onClick={e => setShowLecturePopup(true)}>Add Lecture</button>
                                        </div>
                                    </>
                                )}
                            </Droppable>}
                        </div>
                    </div>
                )}
            </Draggable>
            
            
            {showLecturePopup &&
            <NewLecturePopup
                section={section}
                sectionIndex={index}
                hide={e => setShowLecturePopup(false)}
            />}
        </>
    );
}