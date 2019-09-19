import React, { useEffect } from 'react'
import t from 'prop-types'

import useHashids from 'app/hooks/use-hashids'

import syndicateMembers from 'data/syndicate-members.json'

import styles from './SyndicateMember.module.css'

const defaultHashid = [...Array(syndicateMembers.length)].map(() => 1)

const useHashedState = () => {
  let [hashid, setHashid] = useHashids()

  useEffect(() => {
    if (!hashid.length) setHashid(defaultHashid)
  }, [hashid])

  return [hashid.length ? hashid : defaultHashid, setHashid]
}

const SyndicateMembers = () => {
  const [state] = useHashedState()

  console.log(state)

  return (
    <React.Fragment>
      <div className={styles.members}>
        {syndicateMembers.map(member => (
          <SyndicateMember member={member} key={member.name} />
        ))}
      </div>
    </React.Fragment>
  )
}

const SyndicateMember = ({ member, ...rest }) => (
  <div className={styles.member} {...rest}>
    <div className={styles.header}>
      <img className={styles.image} src={member.image} />
      <h1 className={styles.memberName}>{member.name}</h1>
    </div>
    <div>
      <SyndicateMemberReward title="T" reward={member.transportation} />
      <SyndicateMemberReward title="F" reward={member.fortification} />
      <SyndicateMemberReward title="R" reward={member.research} />
      <SyndicateMemberReward title="I" reward={member.intervention} />
    </div>
  </div>
)

SyndicateMember.propTypes = {
  member: t.shape({
    fortification: t.string.isRequired,
    image: t.string.isRequired,
    intervention: t.string.isRequired,
    name: t.string.isRequired,
    research: t.string.isRequired,
    transportation: t.string.isRequired
  }).isRequired
}

const SyndicateMemberReward = ({ title, reward }) => (
  <div className={styles.reward}>
    <strong className={styles.divisionLetter}>{title}</strong> {reward}
  </div>
)

SyndicateMemberReward.propTypes = {
  reward: t.string.isRequired,
  title: t.string.isRequired
}

export default SyndicateMembers
