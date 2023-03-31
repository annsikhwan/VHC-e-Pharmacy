import React, {useContext} from 'react';
import {CourseContext} from '../../CourseContext';

export default function SubmitButton(props) {
    let context = useContext(CourseContext)

    return (
        <div className="d-flex align-items-end flex-column">
            <button type="button" className="btn btn-primary" disabled={context.loading} onClick={context.updateCourse}>{context.loading ? 'Saving...' : 'Update'}</button>
        </div>
    );
}