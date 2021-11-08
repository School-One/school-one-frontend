import gql from 'graphql-tag';

export const LOGIN_USER = gql`
    mutation login(
        $email: String!
        $password: String!
    ){
        login(
            email: $email, password: $password
        ){
            id
            email
            name
            lastname
            createdAt
            token
        }
    }
`;

export const ADD_EVENT = gql`
    mutation createEvent($title: String!, $start: Date!, $end: Date!){
        createEvent(
            title: $title
            start: $start
            end: $end
        ){
            id
            start
            end
            title
        }
    }
`