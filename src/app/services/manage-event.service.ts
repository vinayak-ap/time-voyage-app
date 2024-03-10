import { Injectable } from '@angular/core';
import { TimelineEvent } from '../helper/timeline-event.helper';

@Injectable({
    providedIn: 'root'
})
export class ManageEventService {

    timelineEvents: Array<TimelineEvent> = [
        {
            "id": 1,
            "title": "The Fall Of Roman Empire",
            "date": 480,
            "description": "The fall of the Roman Empire was the loss of central political control in the Western Roman Empire, a process in which the Empire failed to enforce its rule, and its vast territory was divided between several successor polities.",
            "image": "https://images.aeonmedia.co/images/b1c9cc82-316d-4363-a17f-ae58867e71dc/essay-cole_thomas_the_course_of_empire_destruction_1836.jpg?width=3840&quality=75&format=auto",
            "video": "https://youtu.be/KJz15Y6hKMM?feature=shared"
        },
        {
            "id": 2,
            "title": "The Renaissance Begins",
            "date": 1400,
            "description": "The Renaissance period marks the revival of art, culture, and learning in Europe, leading to significant advancements in science, art, and philosophy.",
            "image": "https://qph.cf2.quoracdn.net/main-qimg-ad78666e227c4d3c6933fd6a85cb4c8c",
            "video": "https://youtu.be/Om1jvUzVAtE?feature=shared"
        },
        {
            "id": 3,
            "title": "Industrial Revolution",
            "date": 1760,
            "description": "The Industrial Revolution was a period of global transition of the human economy towards more widespread, efficient and stable manufacturing processes that succeeded the Agricultural Revolution.",
            "image": "https://cdn.britannica.com/17/167717-131-94C99B30/boys-mill-Macon-Georgia-1909.jpg",
            "video": "https://youtu.be/xLhNP0qp38Q?feature=shared"
        },
        {
            "id": 4,
            "title": "Declaration of Independence",
            "date": 1776,
            "description": "The Declaration of Independence was adopted by the Continental Congress, declaring the 13 American colonies independent from British rule and laying the foundation for the United States.",
            "image": "https://cdn.britannica.com/21/143621-159-3EDE9040/Declaration-of-Independence-canvas-rotunda-John-Trumbull-July-4-1776.jpg",
            "video": "https://youtu.be/4uE-tqe0xsQ?feature=shared"
        },
        {
            "id": 5,
            "title": "World War I",
            "date": 1914,
            "description": "First World War was a global conflict fought between two coalitions: the Allies and the Central Powers. Battles took place throughout Europe, the Middle East, Africa, the Pacific, and parts of Asia.",
            "image": "https://i.ytimg.com/vi/-GsolnXOiBg/maxresdefault.jpg",
            "video": "https://youtu.be/-GsolnXOiBg?feature=shared"
        },
        {
            "id": 6,
            "title": "World War II",
            "date": 1939,
            "description": "The vast majority of the world's countries, including all the great powers, fought as part of two opposing military alliances: the Allies and the Axis. Many participating countries invested all available economic, industrial, and scientific capabilities into this total war, blurring the distinction between civilian and military resources.",
            "image": "https://images.cdn.kukufm.com/w:720/f:webp/q:85/https://s3.ap-south-1.amazonaws.com/kukufm/channel_icons/762c859391ca4eca8e050bb82653f794_landscape_612.jpg",
            "video": "https://youtu.be/_uk_6vfqwTA?feature=shared"
        },
        {
            "id": 7,
            "title": "Indian Independence And Partition",
            "date": 1947,
            "description": "The birth of India and Pakistan as independent states in 1947 was a key moment in the history of Britain’s Empire and its army. But the process of partition was attended by mass migration and ethnic violence that has left a bitter legacy to this day.",
            "image": "https://static.india.com/wp-content/uploads/2016/08/Independence-Day-India-Getty.jpg?impolicy=Medium_Resize&w=1200&h=800",
            "video": "https://www.youtube.com/live/l0A9d3Gl6vY?feature=shared"
        },
        {
            "id": 8,
            "title": "Vietnam War",
            "date": 1955,
            "description": "The Vietnam War was a conflict in Vietnam, Laos, and Cambodia from 1 November 1955 to the fall of Saigon on 30 April 1975. It was the second of the Indochina Wars and was a major conflict of the Cold War.",
            "image": "https://www.archives.gov/files/citizen-archivist/transcribe/images/17331378%20banner2.jpg",
            "video": "https://youtu.be/7tNTh6KlXXU?feature=shared"
        },
        {
            "id": 9,
            "title": "The Moon Landing",
            "date": 1969,
            "description": "The moon landing is the historic event captivated the world and helped people look to the future. Commander Neil Armstrong and Lunar Module Pilot Buzz Aldrin landed the Apollo Lunar Module Eagle on July 20, 1969",
            "image": "https://i.natgeofe.com/k/1ef0d42f-adf7-49e7-a2de-7d381fd18f95/moon-landing-textimage_4x3.png",
            "video": "https://youtu.be/5JWm9iE5ha4?feature=shared"
        },
        {
            "id": 10,
            "title": "Fall of the Berlin Wall",
            "date": 1989,
            "description": "The fall of the Berlin Wall symbolized the end of the Cold War and the reunification of East and West Germany, marking a significant moment in modern history.",
            "image": "https://upload.wikimedia.org/wikipedia/commons/1/1c/West_and_East_Germans_at_the_Brandenburg_Gate_in_1989.jpg",
            "video": "https://youtu.be/Mn4VDwaV-oo?feature=shared"
        },
    ]

    constructor() { }
}
