import React from 'react';
import StartScreen from '../../Start/StartScreen';
import Sidebar from '../Sidebar/Sidebar';
import { useQuery } from '@apollo/react-hooks';
import { GET_HOMEWORK } from '../../../graphql/query';
import { Editor } from '../../../components/main/sidebar/Editor';

export default function HomeworkScreen(props) {

    const courseId = props.match.params.courseid;
    const homeworkId = props.match.params.homeworkid;

    const { data: {getHomework} = {}} = useQuery(GET_HOMEWORK, {
        variables: {
            courseId,
            homeworkId
        }
    });

    let homeworkMarkup;

    if(!getHomework){
        homeworkMarkup = <p>Loading...</p>
    }else {

        const {
            id,
            curse_id,
            title,
            content,
            answers,
            answerCount
        } = getHomework;

        homeworkMarkup = (
            <StartScreen>
                <Sidebar>
                    <div className="row mt-3">
                        <div className="col-md-12">
                            <h1>
                            {title}
                            </h1>
                        </div>
                        <div className="col-md-12 my-3" style={{height: '0.2rem', backgroundColor: '#D6D6D6'}} />
                        <div className="col-md-12">
                            <p>
                                {content}
                            </p>
                        </div>
                        <div className="col-md-12 my-3" style={{height: '0.2rem', backgroundColor: '#D6D6D6'}} />
                            <Editor />
                        <div className="col-md-12 my-3" style={{height: '0.2rem', backgroundColor: '#D6D6D6'}} />
                        <div className="col-md-12">
                            <h6 className="fw-bold">
                                Respuestas
                            </h6>
                        </div>
                    </div>
                </Sidebar>
            </StartScreen>
        );

    }

    return homeworkMarkup;
}
