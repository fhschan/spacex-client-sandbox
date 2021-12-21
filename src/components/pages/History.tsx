import { useQuery } from '@apollo/client'
import { ALL_HISTORY } from '../../apollo/models/history'
import Spinner from 'react-bootstrap/Spinner'

function History() {
  const { loading, error, data } = useQuery(ALL_HISTORY)

  const historyItemsRenderer = (items: any) => {
    if (!items) return null

    // TODO: Need to get unique key from graphql query.
    return items.map((item: any) => (
      <>
        <h3>{item?.title}</h3>
        <p>{item?.details}</p>
      </>
    ))
  }

  console.log('@@@ data', history)
  // console.log('@@@ error', error);
  return (
    <div>
      <h2>History of SpaceX Launches</h2>
      {loading ? (
        <Spinner animation={'border'} />
      ) : (
        historyItemsRenderer(data?.history)
      )}
      {error && <p>ERROR:{JSON.stringify(error)}</p>}
    </div>
  )
}

export default History
