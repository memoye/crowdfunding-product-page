export const projectsReducer = (state, action) => {
    switch (action.type) {
        case 'BACK_PROJECT':
            // get selected pack
            // const currentPack = state.rewardPacks.filter((pack) => pack.name === action.payload.name)[0]

            // reduce pack's remaining amount by 1
            const updatedPacks = state.rewardPacks.map((pack) => {
                if (pack.name === action.payload.name && pack.remaining !== null) {
                    return { ...pack, remaining: pack.remaining - 1 }
                } else {
                    return { ...pack }
                }
            })

            // update project stats (total amount, )
            const updatedStats = { ...state.stats, totalAmt: state.stats.totalAmt + action.payload.amount, totalBackers: state.stats.totalBackers + 1, }
            return { ...state, rewardPacks: updatedPacks, stats: updatedStats }


        default:
            return { ...state }
    }
}

