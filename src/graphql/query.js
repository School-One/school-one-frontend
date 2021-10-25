import gql from 'graphql-tag';

export const GET_ALL_COURSES = gql`
    query($userId: ID!){
        getCourses(userId: $userId) {
            id
            name
            grade_section
            teacher_id
        }
    }
`;