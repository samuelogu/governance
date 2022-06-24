// Governor Values
const QUORUM_PERCENTAGE = 4 // Need 4% of voters to pass
// const MIN_DELAY = 3600 // 1 hour - after a vote passes, you have 1 hour before you can enact
const MIN_DELAY = 136 // 30 minutes

// const VOTING_PERIOD = 45818 // 1 week - how long the vote lasts. This is pretty long even for local tests
const VOTING_PERIOD = 136 // blocks // 30 minutes
const VOTING_DELAY = 22 // 22 Blocks - How many blocks till a proposal vote becomes active // 10 minutes
const ADDRESS_ZERO = "0x0000000000000000000000000000000000000000"
const deployer = "0x26B3bAC0Cf02F619166Bc7457bA25443ccb026a3"
const proposers = ["0x26B3bAC0Cf02F619166Bc7457bA25443ccb026a3"]

const GOVERNANCE_TOKEN_ADDRESS = "0x5F50781B6F9649Bd67BdFD7f04501BbCe3fAf16f"
const TIMELOCK_ADDRESS = "0xa35Ee3fDa986eed22503D89e5e1A09a7C939b655"
const GOVERNOR_ADDRESS = "0xAd7Bc8BA0cE65B57D0A4040F5562256b9DbcE027"

module.exports = { QUORUM_PERCENTAGE, MIN_DELAY, VOTING_PERIOD, VOTING_DELAY, ADDRESS_ZERO, deployer, proposers, GOVERNANCE_TOKEN_ADDRESS, TIMELOCK_ADDRESS, GOVERNOR_ADDRESS }