import { gql } from '@apollo/client'

export const ALL_HISTORY = gql`
  query GetAllHistory {
    history {
      title
      details
      event_date_utc
      links {
        article
      }
    }
  }
`
