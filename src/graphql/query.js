import gql from 'graphql-tag';

export const GET_ALL_COURSES = gql`
    query($userId: ID!){
        getCourses(userId: $userId) {
            id
            name
            grade_section
            teacher{ name }
        }
    }
`;

export const GET_ONE_COURSE = gql`
    query($courseId: ID!){
        getCourse(courseId: $courseId){
            id
            name
            grade_section
            teacher{
                teacher_id
                name
                email
            }
        }
    }
`;