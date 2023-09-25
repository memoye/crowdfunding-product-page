export const projectsReducer = (state, action) => {
    switch (action.type) {
        case 'SELECT_REWARD':
            const currentPack = state.rewardPacks.filter((pack) => pack.name === action.payload)[0]

            const updatedPacks = state.rewardPacks.map((pack) => {
                if (pack.name === action.payload) {
                    return { ...pack, remaining: pack.remaining - 1 }
                } else {
                    return { ...pack }
                }
            })

            const updatedStats = { ...state.stats, totalAmt: state.stats.totalAmt + currentPack.minimumPledge, totalBackers: state.stats.totalBackers + 1, }


            return { ...state, rewardPacks: updatedPacks, stats: updatedStats }


        default:
            return { ...state }
    }
}

