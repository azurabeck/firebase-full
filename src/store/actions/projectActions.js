export const createProject = (project) => {
    return (dispatch, getState, { getFirebase, getFirestore }) => {
        //make async call to database
        const firestore = getFirestore();

        firestore.collection('projects').add({
            ...project, 
            authorFirstName: 'Rebecca',
            authorLastName: 'Souza',
            authorId: 10001,
            createdAt: new Date()
        }).then(() => {
            dispatch({ type: 'CREATE_PROJECT', project })
        }).catch((err) => {
            dispatch({type: 'CREATE_PROJECT_ERROR', err})
        })
        
    }
}

/*

CREATE PROJECT INSIDE FIREBASE DATA
firestore.collection('project')

AÇÃO PARA ADICIONAR UM NOVO PROJETO AO BANCO
.add({
            ...project, 
            authorFirstName: 'Net',
            authorLastName: 'Ninja',
            authorId: 1234,
            createdAt: new Date()
        })

FAZER A LEITURA DOS DADOS E SÓ DEPOIS DAS DISPATCH
.then(() => {
            dispatch({ type: 'CREATE_PROJECT', project })
        })        
*/
