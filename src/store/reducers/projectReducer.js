const initState = {
    projects: [
        {id: '1', title: 'help me find', content: 'Magna eiusmod labore nulla veniam deserunt excepteur.' },
        {id: '2', title: 'help me fdsfsd', content: 'Magna eiusmod labore nulla veniam deserunt excepteur.' },
        {id: '3', title: 'help me rwe', content: 'Magna eiusmod labore nulla veniam deserunt excepteur.' }
    ]
}
const projectReducer = (state = initState, action) => {
    switch (action.type) { 
        case 'CREATE_PROJECT':
            console.log('craeted_project', action.project)
     }
    return state
}

export default projectReducer