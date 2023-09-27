import { createContext, useContext, useReducer, useState } from "react";
import { projectsReducer } from "../reducer/projectsReducer";
import { mastercraft } from "../assets";
const ProjectsContext = createContext()

const initialState = {
    id: 1,
    title: 'Mastercraft Bamboo Monitor Riser',
    description: 'A beautiful & handcrafted monitor stand to reduce neck and eye strain.',
    modalDesc: `Want to support us in bringing Mastercraft Bamboo Monitor Riser out in the world?`,
    projectLogo: mastercraft,
    about: ` The Mastercraft Bamboo Monitor Riser is a sturdy and stylish platform that elevates your screen
    to a more comfortable viewing height. Placing your monitor at eye level has the potential to improve
    your posture and make you more comfortable while at work, helping you stay focused on the task at hand.
    Featuring artisan craftsmanship, the simplicity of design creates extra desk space below your computer
    to allow notepads, pens, and USB sticks to be stored under the stand.`,
    stats: {
        totalAmt: 89914,
        targetAmt: 100000,
        totalBackers: 5007,
        daysLeft: 56
    },

    rewardPacks: [
        {
            name: 'Pledge with no rewards',
            description: ` Choose to support us without a reward if you simply believe in our project. As a backer, 
            you will be signed up to receive product updates via email.`,
            minimumPledge: 0,
            remaining: null
        },
        {
            name: 'Bamboo Stand',
            description: `You get an ergonomic stand made of natural bamboo. You've helped us launch our promotional campaign, and you'll be added to a special Backer member list.`,
            minimumPledge: 25,
            remaining: 101
        },
        {
            name: 'Black Edition Stand',
            description: `You get a Black Special Edition computer stand and a personal thank you. You'll be added to our Backer member list. Shipping is included.`,
            minimumPledge: 75,
            remaining: 64
        },
        {
            name: 'Mahogany Special Edition',
            description: `You get two Special Edition Mahogany stands, a Backer T-Shirt, and a personal thank you. You'll be added to our Backer member list. Shipping is included.`,
            minimumPledge: 200,
            remaining: 0
        }
    ]
}

const ProjectsContextProvider = ({ children }) => {

    const [state, dispatch] = useReducer(projectsReducer, initialState)
    const [modalOpen, setModalOpen] = useState(0)
    const [modalStep, setModalStep] = useState(1)
    const [selectedReward, setSelectedReward] = useState(null)

    return (
        <ProjectsContext.Provider value={ { state, dispatch, modalOpen, setModalOpen, modalStep, setModalStep, selectedReward, setSelectedReward } }>
            { children }
        </ProjectsContext.Provider>
    )
}

function getProjectContext() {
    return useContext(ProjectsContext)
}

export { ProjectsContextProvider, getProjectContext }