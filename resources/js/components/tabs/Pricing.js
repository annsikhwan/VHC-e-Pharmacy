import React, {useContext} from 'react';
import {CourseContext} from '../../CourseContext';
import SubmitButton from './SubmitButton';

export default function Pricing(props) {
    let context = useContext(CourseContext)

    const tHead=['ID','Plan Type','Plan Name','Price','Enrollment Cap','Action'];
    
    return (
        
        <>
            <div className="row">
                <div className="form-group col-md-12">

                    {/* <!-- Modal -->

                    {{-- <div className="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                        <div className="modal-dialog" role="document">
                        <div style="max-height: 600px; overflow-y: scroll;" className="modal-content" id="modalContent">
                            <div className="modal-header">
                            <h3 className="modal-title" id="exampleModalLabel">Set a price</h3>
                            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                            </div>
                            <div className="modal-body">
                        
                            </div>
                        </div>
                        </div>
                    </div> --}}
                    <!-- Button trigger modal --> */}

                    <div className="col-md-12 text-right">
                        <button type="button" className="btn btn-success price_model"><i className="icon wb-plus" aria-hidden="true"></i> Add Pricing Plan</button>
                    </div>

                    <table className="table table-hover table-striped w-full">
                        <thead>
                            <tr>
                                {
                                  tHead.map((h)=>{
                                    return <th key={h}>{h}</th>
                                  })
                                }
                            </tr>
                        </thead>
                        <tbody>
                            
                            {context.pricings.map((pricing, index) => {
                            
                            return(
                                <tr key={index}>
                                    <td>{ index+1 }</td>
                                    <td>{ pricing.plan_type }</td>
                                    <td>{ pricing.plan_name }</td>
                                    <td>{ pricing.amount ? `${pricing.amount} ${pricing.currency}` : 'Free'}</td>
                                    {(pricing.plan_type == "Free Plan" || pricing.plan_type == "One-Time Purchase") ?
                                        <td>No</td>
                                        :
                                        <td>Yes</td>
                                    }
                                    {pricing.enrollment_cap ?
                                        <td>N/A</td>
                                        :
                                        <td>{ pricing.enrollment_cap }</td>
                                    }
                                    <td>
                                        <a href="{{ route('instructor.course_pricing.delete', $pricing->id) }}" className="delete-record btn btn-xs btn-icon btn-inverse btn-round" data-toggle="tooltip" data-original-title="delete pricing" >
                                        <i className="icon wb-trash" aria-hidden="true"></i>
                                        </a>
                                    </td>
                                </tr>
                                )
                            })}
                        </tbody>
                    </table>
                </div>
            </div>
        </>
    );
}