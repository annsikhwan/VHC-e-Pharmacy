import React, {useContext, useState} from 'react';
import axios from 'axios';
import {CourseContext} from '../../CourseContext';
// import SubmitButton from './SubmitButton';

export default function Contributors(props) {
    let context = useContext(CourseContext)

    const [foundInstructors, setFoundInstructors] = useState([])
    const [noInstructorsFound, setNotFound] = useState(false)
    const [searching, setSearching] = useState(false)
    const [isSearchFocused, setSearcFocused] = useState(false)


    function searchInstructor(e){
        let searchTerm = e.target.value
        if(searchTerm.replaceAll(' ','').length < 3){
            return
        }
        clearTimeout(window.instructorSearchTimeout)
        window.instructorSearchTimeout = setTimeout(async () => {
            setSearching(true)
            setNotFound(false)
            
            let body = new FormData();
            body.append('search', searchTerm)
            body.append('cid', context.course.id)

            axios.post(context.urls.searchContributor, body)
            .then(res => {
                setFoundInstructors(res.data || [])
                setSearching(false)
                if(res.data?.length == 0){
                    setNotFound(true)
                }
            })
            .catch(e => {
                setFoundInstructors([])
                setSearching(false)
            })

        }, 2000)
    }

    async function inviteInstructor(instructor){
        let data = new FormData()
        data.append('cid', context.course.id)
        data.append('instructor_id', instructor.id)

        // $(e.target).prop('disabled', true).text('Sending invite...')

        axios.post(context.urls.addContributor, data)
        .then(res => {
            context.addContributor(instructor)
            let searchResults = foundInstructors.filter(i => i.id != instructor.id)
            setFoundInstructors(searchResults)
            if(searchResults.length == 0){
                // hide the search
                setSearcFocused(false)
            }
            window.toastr.success('An invitation to contribute on this course is sent to instructor.')

        })
        .catch(e => {
            // $(e.target).prop('disabled', false).text('Invite to contribute')
            console.log(e)
            window.toastr.error('Some error occured while adding contributor.')
        })
    }
    
    return (
        <>
            <div className="row">
                <div className="form-group col-md-12">
                    <div className="contributors-search">
                        <label className="form-control-label">
                            <span>
                                Invite Contributor &nbsp;
                                <i className="fa fa-info-circle" data-toggle="tooltip" data-original-title="Allows other instructors to edit this course."></i>
                            </span>
                            <input type="text" placeholder="Search Instructor" name="instructorSearch" minLength="3" required onChange={searchInstructor} onFocus={e => setSearcFocused(true)} />
                            {searching && <span className="contributors-search-loader">....</span>}
                            {(isSearchFocused && foundInstructors.length > 0) &&
                            <div className="found-contributors">

                                {foundInstructors?.map((instructor,i) => {
                                    return(
                                    <div className="instructor" key={i}>
                                        <img src="/backend/assets/images/user.png"/>
                                        <div>{instructor.first_name} {instructor.last_name}</div>
                                        <div>{instructor.contact_email}</div>
                                        <button className="btn btn-success add-contributor" type="button" data-id="0" onClick={e => inviteInstructor(instructor)}>Invite to contribute</button>
                                    </div>)
                                })}
                            </div>}
                            {(noInstructorsFound && isSearchFocused) && <div className="no-instructor-found">
                                No instructor meeting the search terms found. try searching with email.
                            </div>}
                        </label>
                            {isSearchFocused && <div className="contributors-search-background" onClick={e => setSearcFocused(false)}></div>}
                    </div>
                </div>
            </div>
            {context.contributors.length == 0 ?
                <div className="text-center no-contributors">
                    <h4>There aren't any instructors added as contributors in this course</h4>
                </div>
            :
                <div className="course-contributors">
                    <div className="th">
                        <div>#</div>
                        <div>Thumb</div>
                        <div>Name</div>
                        <div>Email</div>
                        <div>Contributor since</div>
                        <div>Invitation status</div>
                        <div>Options</div>
                    </div>
                    <div className="tbody">
                        {context.contributors?.map((contributor, index) => {
                            return (
                                <div className="tr" key={index}>
                                    <div className="td">{index+1}</div>
                                    <div className="td">
                                        <img src="/backend/assets/images/user.png"/>
                                    </div>
                                    <div className="td">{contributor.instructor.first_name} {contributor.instructor.last_name}</div>
                                    <div className="td">{contributor.instructor.contact_email}</div>
                                    <div className="td">{contributor.added_at ? new Date(contributor.added_at * 1000).toLocaleString('en-US',{ day: "numeric", year: "numeric", month: "short", }) : ''}</div>
                                    <div className="td">
                                        <span disabled className={`btn p-1 btn-${contributor.pending_approval ? 'warning' : 'success'}`}>{contributor.pending_approval ? 'Pending' : 'Accepted'}</span>
                                    </div>
                                    <div className="td">
                                        {parseInt(context.course.instructor?.id) != parseInt(contributor.instructor_id) && <button type="button" className="btn btn-danger" onClick={e => context.revokeContributionAccess(contributor)}>Revoke Access</button>}
                                    </div>
                                </div>
                                )
                        })}
                    </div>
                </div>}

        </>
    );
}