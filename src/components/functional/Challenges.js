import React from 'react'

const Challenges = ({challenges, deleteChallenge}) => {
    
    const challengesList = challenges.length ? (
        challenges.map(challenge => {
            return (
                <div className="collections-item" key={challenge.id}>
                    <span onClick={()=>{deleteChallenge(challenge.id)}}>{challenge.content}</span>
                </div>
            )
        })
    ) : ( 
        <p className="center"> Congratulations, you've conquered all the challenges! </p>
    )

    return (
        <div className="challenges collection">
            {challengesList}
        </div>
    )
}

export default Challenges;