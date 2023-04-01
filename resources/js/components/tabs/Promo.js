import React, { useContext, useState } from "react";
import { CourseContext } from "../../CourseContext";
import SubmitButton from "./SubmitButton";

export default function Promo(props) {
    let context = useContext(CourseContext);
    let videoSrc =
        context.promo.video.src ||
        (context.video?.course_id
            ? context.urls.courseAssetsBase + context.video.bunny_url
            : "");

    return (
        <>
            <div className="row">
                <div className="form-group col-md-6">
                    <span>Course Promo Image</span>
                    <div className="uploader">
                        <input
                            type="file"
                            accepts="image/*"
                            className="item-img file center-block"
                            name="course_image"
                            id="file-upload"
                            onChange={context.handlePromoImage}
                            accept="image/*"
                        />
                        <label htmlFor="file-upload" id="file-drag">
                            {context.promo.image.src ||
                            context.course.course_image ? (
                                <img
                                    src={
                                        context.promo.image.src
                                            ? context.promo.image.src
                                            : context.course.course_image
                                            ? context.urls.courseAssetsBase +
                                              context.course.course_image
                                            : "#"
                                    }
                                    alt="Preview"
                                />
                            ) : (
                                <>
                                    <div className="promo-icon">
                                        <i
                                            className="fa fa-upload"
                                            aria-hidden="true"
                                        ></i>
                                        <div>Select an image or drag here</div>
                                        <span className="btn btn-primary">
                                            Select an image
                                        </span>
                                    </div>
                                </>
                            )}
                        </label>
                    </div>
                </div>

                <div className="form-group col-md-6">
                    <span>Course Promo Video</span>
                    <div className="uploader">
                        <label>
                            <input
                                type="file"
                                accepts="video/*"
                                className="item-img file center-block"
                                name="course_video"
                                onChange={context.handlePromoVideo}
                                accept="video/mp4,video/x-m4v,video/*"
                            />

                            {videoSrc ? (
                                <video
                                    width="320"
                                    height="240"
                                    controls
                                    preload="auto"
                                    key={videoSrc}
                                >
                                    <source src={videoSrc} type="video/mp4" />
                                </video>
                            ) : (
                                <>
                                    <div className="promo-icon">
                                        <i
                                            className="fa fa-upload"
                                            aria-hidden="true"
                                        ></i>
                                        <div>Select a video or drag here</div>
                                        <span className="btn btn-primary">
                                            Select a video
                                        </span>
                                    </div>
                                </>
                            )}

                            <div id="vresponse" className="hidden">
                                <div id="vmessages"></div>
                            </div>
                        </label>
                    </div>
                </div>
            </div>
            <SubmitButton />
        </>
    );
}
