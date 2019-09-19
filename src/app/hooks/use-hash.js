import { useLocation } from 'react-use'

const useHash = () => {
  const { hash } = useLocation()

  const setHash = newHash =>
    window.history.replaceState(undefined, undefined, `#${newHash}`)

  return [decodeURIComponent(hash.substr(1)), setHash]
}

export default useHash
