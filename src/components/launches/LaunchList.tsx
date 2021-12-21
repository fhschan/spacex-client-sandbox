import { useQuery } from '@apollo/client'

import LaunchItem from './LaunchItem'
// To fix bootstrap config? Probably not sure what extension d.ts is.
// import { LaunchType } from './launchTypes'
import { LAUNCHES } from '../../apollo/models/launches'
import LoadingSpinner from '../common/LoadingSpinner'

function LaunchList() {
  const { loading, error, data } = useQuery(LAUNCHES)

  console.log('@@@ data from graphql', data, loading, error)

  return (
    <div>
      <h2>Launch List</h2>
      {loading ? (
        <LoadingSpinner />
      ) : (
        data?.launches?.map((launch: any /*LaunchTypes*/) => (
          <LaunchItem key={launch.flight_number} {...launch} />
        ))
      )}
      {error && <p>ERROR:{error}</p>}
    </div>
  )
}

export default LaunchList
