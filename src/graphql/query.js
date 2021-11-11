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

export const GET_ALL_HOMEWORKS_PER_STUDENT = gql`
    query($courseId: ID!, $userId: ID!){
        getHomeworks(courseId: $courseId, userId: $userId){
            id
            curse_id
            title
            content
            answerCount
        }
    }
`;

export const GET_EVENTS = gql`
    query($start: Date!, $end: Date!){
        getEvents(start: $start, end: $end) {
            start
            end
            title
        }
    }
`;

export const GET_HOMEWORK = gql`
    query($courseId: ID!, $homeworkId: ID!){
        getHomework(courseId: $courseId, homeworkId: $homeworkId){
            id
            curse_id
            title
            content
            answers{
                student_id
                student_answer
                submitAt
            }
            answerCount
        }
    }
`;

export const GET_REMINDERS = gql`
    query($studentId: ID!){
        getReminders(studentId: $studentId){
            homework_id
            course_id
            title
            startDate
        }
    }
`;

export const GET_USER = gql`
    query($userId: ID!){
        getUser(userId: $userId){
            id
            name
            lastname
            cellphone
            email
        }
    }
`;

export const GET_ANSWERS = gql`
    query($page: Int!){
        getAnswers(page: $page){
            id
            student_id
            student_answer
            submitAt
        }
    }
`;