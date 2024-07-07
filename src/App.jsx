import linkedinLogo from './assets/LinkedInLogo.svg'
import githubLogo from './assets/GithubLogo.svg'
import './App.css'
import CurrencyRateFetch from './components/CurrencyRate'

function App() {
  return (
    <>
      <div>
        <a href="https://github.com/DariuszWantuch" target="_blank">
          <img src={githubLogo} className="logo github" alt="Github logo" />
        </a>
        <a href="https://www.linkedin.com/in/dariuszwantuch/" target="_blank">
          <img src={linkedinLogo} className="logo linkedin" alt="LinkedIn logo" />
        </a>
      </div>
      <CurrencyRateFetch/>
    </>
  )
}
export default App
