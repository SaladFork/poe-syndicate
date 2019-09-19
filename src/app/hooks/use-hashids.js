import Hashids from 'hashids'

import useHash from './use-hash'

const hashids = new Hashids()

const useHashids = () => {
  let [hash, setHash] = useHash()

  const setHashid = numbers => setHash(hashids.encode(numbers))

  return [hashids.decode(hash), setHashid]
}

export default useHashids
