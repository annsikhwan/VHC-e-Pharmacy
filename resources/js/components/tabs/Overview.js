import React, {useContext, useEffect} from 'react';
import {CourseContext} from '../../CourseContext';
import SubmitButton from './SubmitButton';

export default function Overview(props) {
    let context = useContext(CourseContext)
    useEffect(()=>{
        // window.$('#overviewEditor').summernote({
        //     tabsize: 2,
        //     height: 250,
        //     minHeight: 250,
        //     maxHeight: null,
        //     toolbar: [
        //         ['style', ['style']],
        //         ['font', ['bold', 'underline', 'clear']],
        //         ['fontname', ['fontname']],
        //         ['para', ['ul', 'ol', 'paragraph']],
        //         ['table', ['table']],
        //         ['insert', ['link', 'picture', 'video']],
        //         ['view', ['fullscreen']]
        //     ],
          // });
          // window.$('#overviewEditor').on("summernote.change", context.handleInputField)
    },[])
    return (
        <>
            <div className="row">
                <div className="form-group col-md-12">
                    <label className="form-control-label">
                        <h4>Course Page Contents</h4>
                        <textarea id="overviewEditor" className="form-control" name="overview" defaultValue={context.course.overview}></textarea>
                    </label>
                </div>
            </div>
            <SubmitButton />
        </>
    );
}