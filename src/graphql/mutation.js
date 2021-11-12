import gql from 'graphql-tag';

export const LOGIN_USER = gql`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      id
      email
      name
      lastname
      createdAt
      rol
      token
    }
  }
`;

export const ADD_EVENT = gql`
  mutation createEvent($title: String!, $start: Date!, $end: Date!) {
    createEvent(title: $title, start: $start, end: $end) {
      id
      start
      end
      title
    }
  }
`;

export const ANSWER_HOMEWORK = gql`
  mutation answerHomework($homeworkId: ID!, $studentAnswer: String!) {
    answerHomework(homeworkId: $homeworkId, studentAnswer: $studentAnswer)
  }
`;

export const CREATE_HOMEWORK = gql`
  mutation createHomework($courseId: ID!, $title: String!, $content: String!) {
    createHomework(courseId: $courseId, title: $title, content: $content) {
      id
      title
      content
    }
  }
`;
