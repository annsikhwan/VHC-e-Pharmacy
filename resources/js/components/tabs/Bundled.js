import React, {useContext, useEffect, useState} from 'react';
import {CourseContext} from '../../CourseContext';
import SubmitButton from './SubmitButton';
// import { map } from 'jquery';

export default function Bundled(props) {
    const context = useContext(CourseContext)
    let selected_course = []
    useEffect(()=>{
        try{
            selected_course = JSON.parse(context.course.bundled_courses || '[]');
        }catch(e){console.log(e)}
    },[])
    const [selected, setSelected] = useState(selected_course.map(c => c.course_id))
    
    function selectAll(e){
        e.preventDefault()
        setSelected(context.availableToBundle?.map(c => c.id))
    }
    function unSelectAll(e){
        e.preventDefault()
        setSelected([])
    }
   function handleCheckBox(course){
      if(!selected.includes(course.id)){
          setSelected([...selected, course.id])
      }else{
          setSelected(selected.filter(id => id != course.id))
      }
  }
    const selectableCoursesHeader=['Thumb','Title','Instructor','Instructor Email','Course Price','Bundled']
  
    return (
        <>
            <div className="row">
                <div className="form-group col-md-12 bundle_toggle"> 
                    {context.availableToBundle?.length > 0 ?
                        <div className="form-group col-md-12">
                            <div className="row mb-5">
                                <div className="col-sm-6">
                                    <h4>Bundle Courses
                                        <i className="fa fa-info-circle" data-toggle="tooltip" data-original-title="Selecting courses below will convert this course into a bundle."></i>
                                    </h4>
                                </div>
                                <div className="col-sm-6 text-right">
                                    <a href="#" onClick={selectAll} ><small>Select All</small></a> /
                                    <a href="#" onClick={unSelectAll} > <small>Clear Selection</small></a>
                                </div>
                            </div>

                            <div className="bundle-courses-options selectable-courses-options">
                                <div className="selectable-courses-header">
                                    {
                                    selectableCoursesHeader.map((h)=>{
                                        return <span>{h}</span>
                                    })
                                    }
                                    
                                </div>
                                {context.availableToBundle?.map((course, i) => (
                                    <label className="bundle-course-option" key={i}>
                                        <img src={course.thumb_image ? '/storage/'+course.thumb_image : '/backend/assets/images/blog_image.jpeg'} />
                                        <span>{course.course_title} </span>
                                        <span>{course._instructor?.first_name} {course._instructor?.last_name}</span>
                                        <span>{course._instructor?.contact_email}</span>
                                        <span>${course.price ? course.price : '0.00'}</span>
                                        <input type="checkbox" name="selected_bundel_courses" checked={context.course?.selected_bundel_courses?.includes(course.id)} onChange={e => context.courseSelection(e, course.id)} />
                                    </label>
                                ))}
                            </div>
                        </div>
                    :
                        <div className="col-md-12 text-center">
                            <h4>Currently, there aren't any courses available to bundle.</h4>
                        </div>
                    }
                </div>
            </div>
            {context.availableToBundle.length > 0 && <SubmitButton/>}
        </>
    );
}