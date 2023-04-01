import React, {useContext, useState, useReducer, useEffect} from 'react';


import {AiFillCloseSquare} from 'react-icons/ai';
import {ImFileVideo} from 'react-icons/im';
import {BsJournalText, BsFileEarmarkMedical} from 'react-icons/bs';
import {FaRegFileAudio} from 'react-icons/fa';


import {CourseContext} from '../../../CourseContext';
const {$} = window;

export default function NewLecturePopup(props){
    const context = useContext(CourseContext)
    const [lectureDetails, setLectureDetails] = useReducer(
        (state, updates) => ({ ...state, ...updates }),
        {title: '', type: 'video', description: '', content: '', file: ''}
      );
    
    const handleChange = (e) => {
        setLectureDetails({[e.target.name]: e.target.value})
    }
    const handleFileChange = (e) => {
        setLectureDetails({file: e.target.files[0]})
    }
    const createNewLecture = (e) => {
        context.createLecture(props.section, lectureDetails);
        props.hide();
        // setLectureDetails({...lectureDetails, displayed: false, title: ''})
    }

    useEffect(() => {
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
    },[])


    return (
        <div className="popup lecture-popup">
            <div className="popup-overlay" /* onClick={props.hide} */></div>
            <div className="popup-inner">

                <h3>Create a new lecture</h3>
                <AiFillCloseSquare className="svg-btn close-btn" onClick={props.hide} />

                <div className="lecture-type">
                    <label className={lectureDetails.type == 'video' ? 'selected': ''}>
                        <ImFileVideo />
                        <strong>Video</strong>
                        <input type="radio" name="type" value="video" onChange={handleChange} />
                    </label>
                    <label className={lectureDetails.type == 'audio' ? 'selected': ''}>
                        <FaRegFileAudio />
                        <strong>Audio</strong>
                        <input type="radio" name="type" value="audio" onChange={handleChange} />
                    </label>
                    <label className={lectureDetails.type == 'document' ? 'selected': ''}>
                        <BsFileEarmarkMedical />
                        <strong>Document</strong>
                        <input type="radio" name="type" value="document" onChange={handleChange} />
                    </label>
                    <label className={lectureDetails.type == 'text' ? 'selected': ''}>
                        <BsJournalText />
                        <strong>Text</strong>
                        <input type="radio" name="type" value="text" onChange={handleChange} />
                    </label>
                </div>

                <label>
                    <span>Lecture Title <span className="required">*</span></span>
                    <input type="text" name="title" onChange={handleChange} value={lectureDetails.title} placeholder="Type the lecture title here..." />
                </label>

                <label>
                    <span>Lecture Descrition</span>
                    <textarea type="text" name="description" className="lecture-description" onChange={handleChange} value={lectureDetails.description} placeholder="Lecture Description" />
                </label>
                
                <label style={{display: lectureDetails.type == 'text' ? 'block' : 'none'}}>
                    <span>Lecture Content</span>
                    <textarea type="text" name="content" className="lecture-content" onChange={handleChange} value={lectureDetails.content} placeholder="Lecture Content" />
                </label>

                <label style={{display: lectureDetails.type != 'text' ? 'block' : 'none'}}>
                    <span>File <span className="required">*</span></span>
                    <input type="file" name="file" accept={`${lectureDetails.type == 'document' ? 'application/pdf' : lectureDetails.type+'/*'}`} onChange={handleFileChange} placeholder="Lecture file" />
                </label>


                <button type="button" className="btn btn-primary" onClick={createNewLecture}>Create Lecture</button>
            </div>
        </div>
    )
}