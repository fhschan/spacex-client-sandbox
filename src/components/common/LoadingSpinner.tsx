import Spinner from 'react-bootstrap/Spinner'

// TODO:
// - Add import types to define better than any
// - Check out why loading spinner is not working. Guessing I forgot to add something during installation.
function LoadingSpinner(props: any) {
  return (
    <>
      <Spinner animation="border" role="status" {...props}>
        <p>Loading...</p>
      </Spinner>
    </>

    // <Spinner animation="border" role="status" {...props}>
    //   <span className="visually-hidden">Loading...</span>
    // </Spinner>
  )
}

export default LoadingSpinner
