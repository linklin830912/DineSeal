import { gql } from "@apollo/client"
export const ADD_USER = gql`
    mutation MyMutation($email: String!, $userName: String!) {
      insert_Users(objects: {email: $email, userName: $userName}) {
        returning {
          userId
        }
      }
    }
  `;