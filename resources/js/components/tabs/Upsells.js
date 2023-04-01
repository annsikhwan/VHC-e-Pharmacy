import React, {useContext, useState} from 'react';
import {CourseContext} from '../../CourseContext';
import SubmitButton from './SubmitButton';

export default function Upsells(props) {
    const context = useContext(CourseContext)
    let selectedUpsells = [];
    try{
        selectedUpsells = JSON.parse(context.course.upsells_courses || '[]');
    }catch(e){console.log(e)}

    const [selected, setSelected] = useState(selectedUpsells.map(u => u.course_id))

    function selectAll(e){
        e.preventDefault()
        setSelected(context.availableToUpsell?.map(c => c.id))
        
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
                <div className="form-group col-md-12">
                    {context.availableToUpsell?.length > 0 ?
                        <div className="form-group col-md-12">
                            <div className="row">
                                <div className="col-sm-6">
                                    <h4>
                                        Upsell Courses &nbsp;
                                        <i className="fa fa-info-circle" data-toggle="tooltip" data-original-title="Courses selected below will display on the course enrollment page for student as upsells."></i>
                                    </h4>
                                </div>
                                <div className="col-sm-6 text-right">
                                <a href="#" onClick={selectAll} ><small>Select All</small></a> /
                                    <a href="#" onClick={unSelectAll} > <small>Clear Selection</small></a>
                                </div>
                            </div>

                            <div className="upsells-courses-options selectable-courses-options">
                                <div className="selectable-courses-header">
                                {
                                    selectableCoursesHeader.map((h)=>{
                                        return <span>{h}</span>
                                    })
                                    }
                                </div>
                                {context.availableToUpsell?.map((upsell, i) => (
                                    <label className="bundle-course-option" key={i}>
                                        <img src={upsell.thumb_image ? '/storage/'+upsell.thumb_image : '/backend/assets/images/blog_image.jpeg'}/>
                                        <span>{upsell.course_title} </span>
                                        <span>{upsell._instructor?.first_name} {upsell._instructor?.last_name}</span>
                                        <span>{upsell._instructor?.contact_email}</span>
                                        <span>${upsell.price ? upsell.price : '0.00'}</span>
                                        <input type="checkbox" name="selected_upsells" checked={context.course?.selected_upsells?.includes(upsell.id)} onChange={e => context.courseSelection(e, upsell.id)}/>
                                    </label>
                                ))}
                            </div>

                        </div>
                    :
                        <div className="col-md-12 text-center">
                            <h4>Currently, there are no courses to upsell.</h4>
                        </div>
                    }
                </div>
            </div>
            {context.availableToUpsell?.length > 0 && <SubmitButton/>}
        </>
    );
}