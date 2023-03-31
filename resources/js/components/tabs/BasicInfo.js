import React, {useContext, useEffect} from 'react';
import {CourseContext} from '../../CourseContext';
import SubmitButton from './SubmitButton'
const $ = window.$

export default function BasicInfo(props) {
    let context = useContext(CourseContext)
    
    useEffect(()=>{
        // $(".tagsinput").prop('value', context.course.keywords).tagsinput()
        // $(".tagsinput")
        // .on('itemAdded', function(e){ context.handleInputField({target: { name: 'keywords', value: this.value }}) })
        // .on('itemRemoved', function(e){ context.handleInputField({target: { name: 'keywords', value: this.value }}) })
        // $(".tagsinput").val(context.course.keywords)
    },[])
    
    return (
        <>
            <div className="row">

                <div className="form-group col-md-12">
                    <label className="form-control-label">Course Title
                        <span className="required">*</span>
                        <input type="text" className="form-control course_title" name="course_title"
                            placeholder="Course Title" value={context.course.course_title}  onChange={(e)=>e.target.value}/>
                    </label>
                </div>

                <div className="form-group col-md-4">
                    <label className="form-control-label">Instruction Level
                        {/* <select className="form-control" name="instruction_level_id" value={(e)=>e.target.value} onChange={(e)=>e.target.value}>
                            <option value="">Select</option>
                            {context.instruction_levels?.map((instruction_level, index) => {
                                return (
                                    <option value={instruction_level.id} key={index} >
                                    { instruction_level.level }
                                    </option>
                                )
                            })}
                        </select> */}
                    </label>
                </div>

                <div className="form-group col-md-4">
                    <label className="form-control-label">Price &nbsp;
                        <i className="fa fa-info-circle" data-toggle="tooltip" data-original-title="Leave blank if the course is free"></i>
                        <input type="number" className="form-control" id="price" name="price" placeholder="Course Price" value={context.course.price} onChange={(e)=>e.target.value}/>
                    </label>
                </div>

                <div className="form-group col-md-4">
                    <label className="form-control-label">Strike Out Price &nbsp;
                    <i className="fa fa-info-circle" data-toggle="tooltip" data-original-title="Applied only for paid courses"></i>
                        <input type="number" className="form-control" name="strike_out_price" placeholder="Strike Out Price" value={context.course.strike_out_price} onChange={(e)=>e.target.value} />
                    </label>
                </div>

                <div className="form-group col-md-12">
                    <label className="form-control-label">Keywords
                        <input type="text" className="form-control tagsinput" name="keywords" placeholder="Keywords"/>
                    </label>
                </div>

                <div className="form-group col-md-12">
                    <label className="form-control-label">Sub Title
                        <textarea name="course_subtitle" className="overview form-control" value={context.course.course_subtitle || ''} onChange={(e)=>e.target.value}></textarea>
                    </label>
                </div>

            </div>
            <SubmitButton />
        </>
    );
}
