import React, {useContext, useCallback, useReducer, useEffect} from 'react';
import { Droppable, Draggable } from "react-beautiful-dnd";
import { Parser } from 'html-to-react';
import {useDropzone} from 'react-dropzone'

import {CourseContext} from '../../../CourseContext';
import {Resource} from './Resource';

import {MdDragIndicator, MdOutlineDescription, MdPublishedWithChanges, MdOutlineUnpublished, MdDeleteOutline, MdClose, MdFileUploadOff} from 'react-icons/md';
import {FaAngleDown, FaAngleRight, FaRegFileAudio} from 'react-icons/fa';
import {CiEdit} from 'react-icons/ci';
import {GiCheckMark} from 'react-icons/gi';
import {ImFileVideo} from 'react-icons/im';
import {AiFillCloseSquare, AiOutlineRedo} from 'react-icons/ai';
import {BsJournalText, BsFileEarmarkMedical} from 'react-icons/bs';


const lectureTypesIcons = {
    "video" : <ImFileVideo />,
    "audio" : <FaRegFileAudio />,
    "document" : <BsFileEarmarkMedical />,
    "text" : <BsJournalText />,
}

export default function Lecture(props){
    const {lecture, index, sectionIndex, toggleLecture, isExpanded} = props;
    const context = useContext(CourseContext)
    
    const [lectureEdits , setLectureEdits] = useReducer(
        (state, updates) => ({ ...state, ...updates }),
        {title: lecture.title, description: lecture.description, content: lecture.content, type: ''}
    )
    
    const handleChange = (e) => {
        setLectureEdits({...lectureEdits, [e.target.name]: e.target.value})
    }
    
    const saveLectureEdits = (e) => {
        context.updateLecture(lectureEdits, index, sectionIndex)
        setLectureEdits({title: lecture.title, description: lecture.description, content: lecture.content, type: ''})
    }
    const cancelEditTitle = (e) => {
        setLectureEdits({title: lecture.title, content: lecture.content, description: lecture.description, type: ''})
    }
    const cancelEditDescription = (e) => {
        setLectureEdits({title: lecture.title, description: lecture.description, content: lecture.content, type: ''})
    }

    const onDrop = useCallback(files => {
        context.uploadResources(files, lecture)
    }, [])

    useEffect(() => {
        if(lectureEdits.type == 'description'){
            $('textarea.lecture-description, textarea.lecture-content').summernote({
                tabsize: 2,
                height: 150,
                minHeight: 100,
                maxHeight: null,
                toolbar: [
                    ['style', ['style']],
                    ['font', ['bold', 'underline', 'clear']],
                    ['para', ['ul', 'ol', 'paragraph']],
                    ['table', ['table']],
                    ['insert', ['link', 'video']],
                    ['view', ['fullscreen']]
                ],
            });
            $('.lecture-description, .lecture-content').on("summernote.change", handleChange)
        }
    }, [lectureEdits.type])

    const capitalizeWord = word => {
        return (word.charAt(0).toUpperCase() + word.slice(1))
    }
    const lectureFile = lecture.resources?.find(r => r.id == lecture.file_id) || {}
    // const resources = lecture.resources?.filter(r => r.id != lecture.file_id) || []
    const {getRootProps, getInputProps, isDragActive} = useDropzone({onDrop})


    return (
        <>
            <Draggable draggableId={`lecture_${lecture.id}`} index={index} type="lecture">
            {(provided, snapshot) => {
                return (
                    <div
                        ref={provided.innerRef}
                        {...provided.dragHandleProps}
                        {...provided.draggableProps}
                    >
                    <div className="lecture-container" style={{background: snapshot.isDragging ? "#eeeeee" : "white"}}>
                        <div className="lecture-header" style={{backgroundColor: lecture.publish ? '#54b551':'#f0ad4e'}}>
                            <div className="lecture-header-controls">
                                <MdDragIndicator className="drag-handle" />
                                <span className="svg-btn" onClick={e => toggleLecture(lecture)} style={{lineHeight: 1}}>
                                    {isExpanded ? <FaAngleDown/> : <FaAngleRight /> }
                                </span>
                            </div>
                            <h4 onClick={e => setLectureEdits({type: 'title'})}>
                                {lectureEdits.type == 'title' ? 
                                <input type="text" name="title" value={lectureEdits.title} onChange={handleChange}/>
                                :
                                <>
                                    <small>Lecture {index+1}: </small>
                                    {lecture.title} <CiEdit className="svg-btn"/>
                                </>}
                            </h4>
                            <div className="lecture-header-controls">
                                {'title' == lectureEdits.type && <>
                                        <GiCheckMark onClick={saveLectureEdits} className="svg-btn" title="Update Title"/>
                                        <MdClose onClick={cancelEditTitle} className="svg-btn" title="Cancel Editing"/>
                                    </>}
                                <MdOutlineDescription className="svg-btn" title="Edit Lecture Description" onClick={e => setLectureEdits({type:'description'})} />
                                <span onClick={e => context.togglePublishedLecture(props.index, props.sectionIndex)}>
                                    {lecture.publish ? <MdOutlineUnpublished className="svg-btn" title="Unpublish Lecture"/> : <MdPublishedWithChanges className="svg-btn" title="Publish Lecture"/>}
                                </span>
                                <MdDeleteOutline className="svg-btn" title="Delete Lecture" onClick={e => context.deleteLecture(index, sectionIndex)}/>
                            </div>
                        </div>


                        {isExpanded &&
                            <div className="lecture-contents">

                                <div className={`lecture-details type-${lecture.type}`}>
                                    <div className="lecture-type-icon">
                                        {lectureTypesIcons[lecture.type]}
                                    </div>
                                    <div className="details-table">
                                        <div>
                                            <strong>Lecture Type:</strong> {capitalizeWord(lecture.type)}
                                        </div>
                                        <div>
                                            <strong>Create At:</strong> {lecture.created_at}
                                        </div>
                                        <div>
                                            {lecture.type != 'text' && <><strong>File size:</strong> {context.filesizeWithUnit(lectureFile?.size)}</>}
                                        </div>
                                        <div>
                                            <strong>Last Update:</strong> {lecture.updated_at}
                                        </div>
                                        <div>
                                            {['video','audio'].includes(lecture.type) && <><strong>Duration:</strong> {lectureFile?.duration || '00:00:00'}</>}
                                        </div>
                                    </div>
                                    
                                </div>

                                {lecture.description && <div className="lecture-description">
                                    <h5>Lecture Description</h5>
                                    <div>
                                        {Parser().parse(lecture.description || '<p>No description</p>')}
                                    </div>
                                </div>}


                                <Droppable droppableId={`lecture_${lecture.id}`} key={`lecture_${lecture.id}`} type="resource">
                                    {(provided, snapshot) => {
                                        return(                                    
                                            <>
                                                <div ref={provided.innerRef} {...provided.droppableProps} className="lecture-resources">
                                                    <h5>Lecture Resources</h5>
                                                    <div className="resources-container" style={{backgroundColor: snapshot.isDraggingOver ? '#ccccccaa' : 'white', paddingBottom: snapshot.isDraggingOver ? '20px' : '0'}}>
                                                        {(lecture.resources?.length > 0) && 
                                                            <div className="resources-container-inner">

                                                                <div className="resources-header">
                                                                    <strong></strong>
                                                                    <strong>File Name</strong>
                                                                    <strong>Size</strong>
                                                                    <strong>Type</strong>
                                                                    <strong>Uploaded At</strong>
                                                                    <strong></strong>
                                                                </div>
                                                                {lecture.resources?.map((resource, i) => (
                                                                    lecture.file_id == resource.id ? '' :
                                                                    <Resource key={resource.id} resource={resource} index={i} lecture={lecture} />
                                                                ))}
                                                            </div>
                                                        }


                                                        {/* <<<<<<<<<<<<< UPLOAD DROPZONE START HERE >>>>>>>>>>>>> */}
                                                        <div className="add-resources-dropzone">
                                                            <div className="uploading-files">
                                                            {Object.keys(context.uploadFilesQue).map((key,index)=>{
                                                                let file = context.uploadFilesQue[key]
                                                                if(file.lecture_id == lecture.id){

                                                                    return (
                                                                        <div key={index} className="uploading-file">
                                                                            <div className="file-details">
                                                                                <div className="file-name">
                                                                                    <strong>Name:</strong> {file.file.name}
                                                                                </div>
                                                                                <div className="file-size">
                                                                                    <strong>File Size:</strong> {context.filesizeWithUnit(file.file.size)}
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
                                                                                <div className={`progress-bar-success ${file.error ? ' upload-error':''}`} style={{width: `${file.progress}%`}} ></div>
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
                                                                    <p className="dragged-files">Drop the files here ...</p> :
                                                                    <p>Drag 'n' drop files here to attach as resources.</p>
                                                                }
                                                            </div>
                                                        </div>

                                                        {/* <<<<<<<<<<<<< UPLOAD DROPZONE ENDS HERE >>>>>>>>>>>>> */}

                                                    </div>
                                                </div>
                                            </>
                                        )
                                    }}
                                </Droppable>
                            </div>}
                        </div>
                    </div>
                )
            }}
            </Draggable>

            {lectureEdits.type == 'description'&& <div className="popup lecture-description-popup">
                <div className="popup-overlay"></div>
                <div className="popup-inner"  style={{width: '80%', maxWidth: '1200px'}}>
                    <h3>Edit Lecture Details</h3>
                    <AiFillCloseSquare className="svg-btn close-btn" onClick={cancelEditDescription} />

                    <label>
                        <span>Lecture Description</span>
                        <textarea name="description" className="lecture-description" value={lectureEdits.description}></textarea>
                    </label>
                    {lecture.type == 'text' && <label>
                        <span>Lecture Content</span>
                        <textarea name="content" className="lecture-content" value={lectureEdits.content}></textarea>
                    </label>}
                    <button type="button" onClick={saveLectureEdits} className="btn btn-primary">Update Lecture</button>
                </div>
            </div>}
        </>
    );
}