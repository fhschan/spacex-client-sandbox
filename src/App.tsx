import './styles.css'
import logo from './react.png'

export default function App() {
  return (
    <>
      <img src={logo} alt="React" width={100} height={100} />
      <h1>
        SpaceX demo - {process.env.NODE_ENV} {process.env.name}
      </h1>
    </>
  )
}
