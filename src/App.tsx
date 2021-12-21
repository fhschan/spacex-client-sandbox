import { ApolloProvider } from '@apollo/client'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import { client as apolloClient } from './apollo/index'

import SideNav from './components/navigation/SideNav'

import Home from './components/pages/Home'
import Launches from './components/pages/Launches'
import History from './components/pages/History'

function App() {
  return (
    <div className="App">
      <ApolloProvider client={apolloClient}>
        <Router>
          <SideNav />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/history" element={<History />} />
            <Route path="/launches" element={<Launches />} />
          </Routes>
        </Router>
      </ApolloProvider>
    </div>
  )
}

export default App
