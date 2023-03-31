import React, { Component } from 'react';
// const axios = require('axios')
const CourseContext = React.createContext();
import CurriculumFuncitons from './CurriculumFuncitons';

// import {RiLoader3Fill} from 'react-icons/ri';
import courseData from './course.json';
console.log(courseData);
// const toastr = window.toastr
// import {course} from ''
class CourseContextProvider extends Component {
	constructor(props) {
		super(props)

		for (let fn in CurriculumFuncitons) {
			this[fn] = CurriculumFuncitons[fn]?.bind(this)
		}

		this.state = {
			loading: true,
			course: {
				
			},
			promo: {
				video: {},
				image: {},
			},
			uploadFilesQue: {},
			...this,
		}

	}
	


	componentDidMount = async () => {
		// axios.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest';
		// let token = document.querySelector('input[name="_token"]');

		// if (token) {
		// 	axios.defaults.headers.common['X-CSRF-TOKEN'] = token.value;
		// } else {
		// 	console.error('CSRF token not found: https://laravel.com/docs/csrf#csrf-x-csrf-token');
		// }
		this.loadCourseInfo()
		console.log(this.fileSizeWithUnit("1024"));
		const json=courseData.course.curriculumSorting;
		const curriculum=[
			{
				"id": 1,
				"course_id": 1,
				"title": "Introduction",
				"lecturesSorting": "[1,2,4,3,25]",
				"created_at": "2023-03-25 09:08:36",
				"updated_at": "2023-03-27 08:46:13",
				"lectures": [
					{
						"id": 1,
						"section_id": 1,
						"file_id": 1,
						"title": "Installing a text editor",
						"description": "<p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don`t look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn`t anything embarrassing hidden in the middle of text.<\/p>",
						"type": "audio",
						"content": "",
						"metaData": null,
						"publish": 1,
						"resourcesSorting": "[1]",
						"created_at": "2023-03-25 09:08:36",
						"updated_at": "2023-03-25 09:08:36",
						"resources": [
							{
								"id": 1,
								"lecture_id": 1,
								"uploader_id": 1,
								"name": "sample-15568160485135",
								"title": "samplemp3",
								"path": "",
								"type": "mp3",
								"extension": "mp3",
								"size": "4113874",
								"duration": "00:02:49",
								"tag": "curriculum",
								"processed": 1,
								"metaData": "",
								"created_at": "0000-00-00 00:00:00",
								"updated_at": "0000-00-00 00:00:00"
							},
							{
								"id": 2,
								"lecture_id": 1,
								"uploader_id": 1,
								"name": "sample_15568166868011",
								"title": "sample.pdf",
								"path": "",
								"type": "pdf",
								"extension": "pdf",
								"size": "164061",
								"duration": "11",
								"tag": "curriculum",
								"processed": 1,
								"metaData": "",
								"created_at": "0000-00-00 00:00:00",
								"updated_at": "0000-00-00 00:00:00"
							},
							{
								"id": 3,
								"lecture_id": 1,
								"uploader_id": 1,
								"name": "sample_15568167745496",
								"title": "sample.pdf",
								"path": "",
								"type": "pdf",
								"extension": "pdf",
								"size": "164061",
								"duration": "11",
								"tag": "curriculum_resource",
								"processed": 1,
								"metaData": "",
								"created_at": "0000-00-00 00:00:00",
								"updated_at": "0000-00-00 00:00:00"
							},
							{
								"id": 4,
								"lecture_id": 1,
								"uploader_id": 1,
								"name": "http:\/\/www.google.com",
								"title": "Google Site",
								"path": "",
								"type": "link",
								"extension": "link",
								"size": "",
								"duration": null,
								"tag": "curriculum_resource_link",
								"processed": 1,
								"metaData": "",
								"created_at": "0000-00-00 00:00:00",
								"updated_at": "0000-00-00 00:00:00"
							},
							{
								"id": 5,
								"lecture_id": 1,
								"uploader_id": 1,
								"name": "http:\/\/www.facebook.com",
								"title": "Facebook Resource",
								"path": "",
								"type": "link",
								"extension": "link",
								"size": "",
								"duration": null,
								"tag": "curriculum_resource_link",
								"processed": 1,
								"metaData": "",
								"created_at": "0000-00-00 00:00:00",
								"updated_at": "0000-00-00 00:00:00"
							}
						]
					},
					{
						"id": 2,
						"section_id": 1,
						"file_id": 2,
						"title": "Adding real content",
						"description": "<p>If you are going to use a passage of Lorem Ipsum, you need to be sure there isn`t anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet.<\/p>",
						"type": "document",
						"content": "",
						"metaData": null,
						"publish": 1,
						"resourcesSorting": "[2]",
						"created_at": "2023-03-25 09:08:36",
						"updated_at": "2023-03-25 09:08:36",
						"resources": []
					},
					{
						"id": 3,
						"section_id": 1,
						"file_id": 3,
						"title": "Creating our index page",
						"description": "<p>All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable.<\/p>",
						"type": "document",
						"content": "",
						"metaData": null,
						"publish": 1,
						"resourcesSorting": "[3]",
						"created_at": "2023-03-25 09:08:36",
						"updated_at": "2023-03-25 09:08:36",
						"resources": []
					},
					{
						"id": 4,
						"section_id": 1,
						"file_id": null,
						"title": "Customizing the vendors",
						"description": "<p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using content, making it look like readable English.<\/p>",
						"type": "text",
						"content": "<p>The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using content, making it look like readable English.<\/p><p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using content, making it look like readable English.<\/p><p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don`t look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn`t anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable.<\/p>",
						"metaData": null,
						"publish": 1,
						"resourcesSorting": "[4]",
						"created_at": "2023-03-25 09:08:36",
						"updated_at": "2023-03-25 09:08:36",
						"resources": []
					},
					{
						"id": 25,
						"section_id": 1,
						"file_id": 6,
						"title": "DHAKKA _ Sidhu Moose Wala ft Afsana Khan _ The Kidd _ Punjabi Songs 2020 _ Gold .mp4",
						"description": null,
						"type": "video",
						"content": null,
						"metaData": null,
						"publish": 0,
						"resourcesSorting": null,
						"created_at": "2023-03-27 08:45:55",
						"updated_at": "2023-03-27 08:45:55",
						"resources": [
							{
								"id": 6,
								"lecture_id": 25,
								"uploader_id": 3,
								"name": "DHAKKA-_-Sidhu-Moose-Wala-ft-Afsana-Khan-_-The-Kidd-_-Punjabi-Songs-2020-_-Gold-.mp4",
								"title": "DHAKKA _ Sidhu Moose Wala ft Afsana Khan _ The Kidd _ Punjabi Songs 2020 _ Gold .mp4",
								"path": "app\/course\/1\/DHAKKA-_-Sidhu-Moose-Wala-ft-Afsana-Khan-_-The-Kidd-_-Punjabi-Songs-2020-_-Gold-.mp4",
								"type": "video",
								"extension": "mp4",
								"size": "40044060",
								"duration": "00:05:36",
								"tag": "lecture_main_content",
								"processed": 0,
								"metaData": "",
								"created_at": "2023-03-27 08:46:00",
								"updated_at": "2023-03-27 08:46:00"
							}
						]
					}
				]
			},
			{
				"id": 2,
				"course_id": 1,
				"title": "Neque porro quisquam",
				"lecturesSorting": "[]",
				"created_at": "2023-03-25 09:08:36",
				"updated_at": "2023-03-25 09:08:36",
				"lectures": [
					{
						"id": 5,
						"section_id": 2,
						"file_id": 1,
						"title": "Installing a text editor",
						"description": "<p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don`t look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn`t anything embarrassing hidden in the middle of text.<\/p>",
						"type": "audio",
						"content": "",
						"metaData": null,
						"publish": 1,
						"resourcesSorting": "[1]",
						"created_at": "2023-03-25 09:08:36",
						"updated_at": "2023-03-25 09:08:36",
						"resources": []
					},
					{
						"id": 6,
						"section_id": 2,
						"file_id": 2,
						"title": "Adding real content",
						"description": "<p>If you are going to use a passage of Lorem Ipsum, you need to be sure there isn`t anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet.<\/p>",
						"type": "document",
						"content": "",
						"metaData": null,
						"publish": 1,
						"resourcesSorting": "[2]",
						"created_at": "2023-03-25 09:08:36",
						"updated_at": "2023-03-25 09:08:36",
						"resources": []
					},
					{
						"id": 7,
						"section_id": 2,
						"file_id": 3,
						"title": "Creating our index page",
						"description": "<p>All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable.<\/p>",
						"type": "document",
						"content": "",
						"metaData": null,
						"publish": 1,
						"resourcesSorting": "[3]",
						"created_at": "2023-03-25 09:08:36",
						"updated_at": "2023-03-25 09:08:36",
						"resources": []
					},
					{
						"id": 8,
						"section_id": 2,
						"file_id": null,
						"title": "Customizing the vendors",
						"description": "<p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using content, making it look like readable English.<\/p>",
						"type": "text",
						"content": "<p>The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using content, making it look like readable English.<\/p><p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using content, making it look like readable English.<\/p><p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don`t look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn`t anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable.<\/p>",
						"metaData": null,
						"publish": 1,
						"resourcesSorting": "[4]",
						"created_at": "2023-03-25 09:08:36",
						"updated_at": "2023-03-25 09:08:36",
						"resources": []
					}
				]
			},
			{
				"id": 3,
				"course_id": 1,
				"title": "Dignissimos ducimus qui blanditiis praesentium",
				"lecturesSorting": "[]",
				"created_at": "2023-03-25 09:08:36",
				"updated_at": "2023-03-25 09:08:36",
				"lectures": [
					{
						"id": 9,
						"section_id": 3,
						"file_id": 1,
						"title": "Installing a text editor",
						"description": "<p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don`t look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn`t anything embarrassing hidden in the middle of text.<\/p>",
						"type": "audio",
						"content": "",
						"metaData": null,
						"publish": 1,
						"resourcesSorting": "[1]",
						"created_at": "2023-03-25 09:08:36",
						"updated_at": "2023-03-25 09:08:36",
						"resources": []
					},
					{
						"id": 10,
						"section_id": 3,
						"file_id": 2,
						"title": "Adding real content",
						"description": "<p>If you are going to use a passage of Lorem Ipsum, you need to be sure there isn`t anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet.<\/p>",
						"type": "document",
						"content": "",
						"metaData": null,
						"publish": 1,
						"resourcesSorting": "[2]",
						"created_at": "2023-03-25 09:08:36",
						"updated_at": "2023-03-25 09:08:36",
						"resources": []
					},
					{
						"id": 11,
						"section_id": 3,
						"file_id": 3,
						"title": "Creating our index page",
						"description": "<p>All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable.<\/p>",
						"type": "document",
						"content": "",
						"metaData": null,
						"publish": 1,
						"resourcesSorting": "[3]",
						"created_at": "2023-03-25 09:08:36",
						"updated_at": "2023-03-25 09:08:36",
						"resources": []
					},
					{
						"id": 12,
						"section_id": 3,
						"file_id": null,
						"title": "Customizing the vendors",
						"description": "<p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using content, making it look like readable English.<\/p>",
						"type": "text",
						"content": "<p>The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using content, making it look like readable English.<\/p><p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using content, making it look like readable English.<\/p><p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don`t look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn`t anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable.<\/p>",
						"metaData": null,
						"publish": 1,
						"resourcesSorting": "[4]",
						"created_at": "2023-03-25 09:08:36",
						"updated_at": "2023-03-25 09:08:36",
						"resources": []
					}
				]
			},
			{
				"id": 4,
				"course_id": 1,
				"title": "Maxime placeat facere possimus",
				"lecturesSorting": "[]",
				"created_at": "2023-03-25 09:08:36",
				"updated_at": "2023-03-25 09:08:36",
				"lectures": [
					{
						"id": 13,
						"section_id": 4,
						"file_id": 1,
						"title": "Installing a text editor",
						"description": "<p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don`t look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn`t anything embarrassing hidden in the middle of text.<\/p>",
						"type": "audio",
						"content": "",
						"metaData": null,
						"publish": 1,
						"resourcesSorting": "[1]",
						"created_at": "2023-03-25 09:08:36",
						"updated_at": "2023-03-25 09:08:36",
						"resources": []
					},
					{
						"id": 14,
						"section_id": 4,
						"file_id": 2,
						"title": "Adding real content",
						"description": "<p>If you are going to use a passage of Lorem Ipsum, you need to be sure there isn`t anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet.<\/p>",
						"type": "document",
						"content": "",
						"metaData": null,
						"publish": 1,
						"resourcesSorting": "[2]",
						"created_at": "2023-03-25 09:08:36",
						"updated_at": "2023-03-25 09:08:36",
						"resources": []
					},
					{
						"id": 15,
						"section_id": 4,
						"file_id": 3,
						"title": "Creating our index page",
						"description": "<p>All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable.<\/p>",
						"type": "document",
						"content": "",
						"metaData": null,
						"publish": 1,
						"resourcesSorting": "[3]",
						"created_at": "2023-03-25 09:08:36",
						"updated_at": "2023-03-25 09:08:36",
						"resources": []
					},
					{
						"id": 16,
						"section_id": 4,
						"file_id": null,
						"title": "Customizing the vendors",
						"description": "<p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using content, making it look like readable English.<\/p>",
						"type": "text",
						"content": "<p>The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using content, making it look like readable English.<\/p><p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using content, making it look like readable English.<\/p><p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don`t look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn`t anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable.<\/p>",
						"metaData": null,
						"publish": 1,
						"resourcesSorting": "[4]",
						"created_at": "2023-03-25 09:08:36",
						"updated_at": "2023-03-25 09:08:36",
						"resources": []
					}
				]
			},
			{
				"id": 5,
				"course_id": 1,
				"title": "Molestias excepturi sint occaecati cupiditate",
				"lecturesSorting": "[]",
				"created_at": "2023-03-25 09:08:36",
				"updated_at": "2023-03-25 09:08:36",
				"lectures": [
					{
						"id": 17,
						"section_id": 5,
						"file_id": 1,
						"title": "Installing a text editor",
						"description": "<p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don`t look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn`t anything embarrassing hidden in the middle of text.<\/p>",
						"type": "audio",
						"content": "",
						"metaData": null,
						"publish": 1,
						"resourcesSorting": "[1]",
						"created_at": "2023-03-25 09:08:36",
						"updated_at": "2023-03-25 09:08:36",
						"resources": []
					},
					{
						"id": 18,
						"section_id": 5,
						"file_id": 2,
						"title": "Adding real content",
						"description": "<p>If you are going to use a passage of Lorem Ipsum, you need to be sure there isn`t anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet.<\/p>",
						"type": "document",
						"content": "",
						"metaData": null,
						"publish": 1,
						"resourcesSorting": "[2]",
						"created_at": "2023-03-25 09:08:36",
						"updated_at": "2023-03-25 09:08:36",
						"resources": []
					},
					{
						"id": 19,
						"section_id": 5,
						"file_id": 3,
						"title": "Creating our index page",
						"description": "<p>All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable.<\/p>",
						"type": "document",
						"content": "",
						"metaData": null,
						"publish": 1,
						"resourcesSorting": "[3]",
						"created_at": "2023-03-25 09:08:36",
						"updated_at": "2023-03-25 09:08:36",
						"resources": []
					},
					{
						"id": 20,
						"section_id": 5,
						"file_id": null,
						"title": "Customizing the vendors",
						"description": "<p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using content, making it look like readable English.<\/p>",
						"type": "text",
						"content": "<p>The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using content, making it look like readable English.<\/p><p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using content, making it look like readable English.<\/p><p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don`t look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn`t anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable.<\/p>",
						"metaData": null,
						"publish": 1,
						"resourcesSorting": "[4]",
						"created_at": "2023-03-25 09:08:36",
						"updated_at": "2023-03-25 09:08:36",
						"resources": []
					}
				]
			},
			{
				"id": 6,
				"course_id": 1,
				"title": "Reprehenderit qui in ea voluptate velit esse",
				"lecturesSorting": "[]",
				"created_at": "2023-03-25 09:08:36",
				"updated_at": "2023-03-25 09:08:36",
				"lectures": [
					{
						"id": 21,
						"section_id": 6,
						"file_id": 1,
						"title": "Installing a text editor",
						"description": "<p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don`t look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn`t anything embarrassing hidden in the middle of text.<\/p>",
						"type": "audio",
						"content": "",
						"metaData": null,
						"publish": 1,
						"resourcesSorting": "[1]",
						"created_at": "2023-03-25 09:08:36",
						"updated_at": "2023-03-25 09:08:36",
						"resources": []
					},
					{
						"id": 22,
						"section_id": 6,
						"file_id": 2,
						"title": "Adding real content",
						"description": "<p>If you are going to use a passage of Lorem Ipsum, you need to be sure there isn`t anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet.<\/p>",
						"type": "document",
						"content": "",
						"metaData": null,
						"publish": 1,
						"resourcesSorting": "[2]",
						"created_at": "2023-03-25 09:08:36",
						"updated_at": "2023-03-25 09:08:36",
						"resources": []
					},
					{
						"id": 23,
						"section_id": 6,
						"file_id": 3,
						"title": "Creating our index page",
						"description": "<p>All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable.<\/p>",
						"type": "document",
						"content": "",
						"metaData": null,
						"publish": 1,
						"resourcesSorting": "[3]",
						"created_at": "2023-03-25 09:08:36",
						"updated_at": "2023-03-25 09:08:36",
						"resources": []
					},
					{
						"id": 24,
						"section_id": 6,
						"file_id": null,
						"title": "Customizing the vendors",
						"description": "<p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using content, making it look like readable English.<\/p>",
						"type": "text",
						"content": "<p>The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using content, making it look like readable English.<\/p><p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using content, making it look like readable English.<\/p><p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don`t look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn`t anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable.<\/p>",
						"metaData": null,
						"publish": 1,
						"resourcesSorting": "[4]",
						"created_at": "2023-03-25 09:08:36",
						"updated_at": "2023-03-25 09:08:36",
						"resources": []
					}
				]
			}
		];
		// this.sortCurriculum(curriculum,json)
		console.log(this.sortCurriculum(curriculum,json))
	}

	async loadCourseInfo() {

				//axios call here for getting data from database

	async function extractIDs(json) {
			let parsed = []
			try {
				parsed = JSON.parse(json || '[]');
				console.log(parsed)
			} catch (e) { console.log(e) }
			
			parsed = await parsed.map(c => c.course_id)
			// console.log(parsed)
			return parsed
		}
		let curriculum = await this.sortCurriculum(courseData?.curriculum, courseData?.course.curriculumSorting)
        
		curriculum.forEach((section) => {
			section.lectures = this.sortCurriculum(section.lectures, section.lecturesSorting)
		})
		let selected_bundel_courses = extractIDs(courseData.course?.bundled_courses);
		let selected_upsells = extractIDs(courseData.course?.upsells_courses);
		this.setState({ ...this.state, loading: false, ...courseData, curriculum, course: { ...(courseData?.course || {}), selected_upsells, selected_bundel_courses } })
		// console.log(res)
	}
	// handleInputField = (event) => {
	// 	let course = this.state.course;
	// 	course[event.target.name] = event.target.value;
	// 	this.setState({...this.state, course})
	// }

	// courseSelection = (event, cid) => {
	// 	let course = this.state.course;
	// 	if((course[event.target.name] || []).includes(cid)){
	// 		course[event.target.name] = course[event.target.name].filter(id => id != cid)
	// 	}else{
	// 		course[event.target.name].push(cid)
	// 	}
	// 	this.setState({...this.state, course})
	// }

	// addContributor = (instructor) => {
	// 	let contributor = {
	// 		id: instructor.id,
	// 		added_at: (new Date().setSeconds(1)/1000),
	// 		pending_approval: true,
	// 		instructor
	// 	}
	// 	let contributors = [ contributor, ...(this.state?.contributors||[]) ]
	// 	this.setState({...this.state, contributors})
	// }

	// handlePromoVideo = (e) => {
	// 	if(e.target.files?.length == 0){
	// 		return
	// 	}
	// 	let video = {
	// 		file: e.target.files[0],
	// 		src: URL.createObjectURL(e.target.files[0])
	// 	}
	// 	this.setState({...this.state, promo:{ ...this.state.promo, video }})
	// }

	// handlePromoImage = (e) => {
	// 	if(e.target.files?.length == 0){
	// 		return
	// 	}
	// 	if(e.target.files[0].type.split('/')[0] != 'image'){
	// 		toastr.error('Please select a valid image file.')
	// 	}
	// 	let image = {
	// 		file: e.target.files[0],
	// 		src: URL.createObjectURL(e.target.files[0])
	// 	}
	// 	this.setState({...this.state, promo:{ ...this.state.promo, image }})
	// }

	// revokeContributionAccess = (contributor) => {
	// 	let data = this.createFormData({
	// 		course_id: this.state.course.id,
	// 		contributor_id: contributor.instructor_id
	// 	})

	// 	axios.post('/course/invitation/revoke', data)
	// 	.then(res => {
	// 		toastr[courseData?.type](courseData?.msg || 'An error occured!');
	// 		if(courseData?.type == 'success'){
	// 			let contributors = this.state.contributors?.filter(c => c.instructor_id != contributor.instructor_id)
	// 			this.setState({contributors})
	// 		}
	// 	})
	// 	.catch(e => console.log(e))
	// }

	updateCourse = (e) => {
		// console.log('will update Course')
		e.preventDefault()
		const form = e.target;
		console.log(e.target);
		// let btn_obj = $(this);
		// btn_obj.text('Please Wait...').prop('disabled', true);
		this.setState({...this.state, loading: true})
		let formData = new FormData();

		for(let field in this.state.course){
			formData.append(field, this.state.course[field]);
		}
		formData.append('course_id',this.state.course?.id)
		formData.append('selected_upsells', this.state.course?.selected_upsells?.join(','))
		formData.append('selected_bundel_courses', this.state.course?.selected_bundel_courses?.join(','))
		formData.append('course_image', this.state.promo.image.file)
		formData.append('course_video', this.state.promo.video.file)

		// console.log(this.state.course)
		axios.post(this.state.urls.saveCourse, formData)
		.then(res => {
			if( res?.data?.course?.id ){
				let {course, promo, video} = this.state;

				course = {...course, ...(res?.data?.course || {})}
				// promo = { image: {...promo.image, file: null}, video: {...promo.video, file: null, } }
				promo = { image: {}, video: {} }
				video = courseData?.video || video
				this.setState({...this.state, course, promo, video, loading: false})
				toastr.success('Course details updated.')
			}else{
				toastr.error('Error updating course info, please try again in a moment.')
				this.setState({...this.state, loading: false})
			}
		})
		.catch(e => {
			console.log(e)
			this.setState({...this.state, loading: false})
		})
	}

	render() {
		return (
			<CourseContext.Provider value={this.state}>
				{this.state.course?.id ? <>
					{this.props.children}
				</> : <div className="course-info-loader">
					{/* <RiLoader3Fill /> */}
					<strong>Loading Data....</strong>
				</div>}
			</CourseContext.Provider>
		)
	}
}

export { CourseContext, CourseContextProvider };
