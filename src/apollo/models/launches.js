import { gql } from '@apollo/client'

export const LAUNCHES = gql`
  query GetLaunches {
    launches {
      flight_number
      name
      success
      details
    }
  }
`
