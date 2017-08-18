export const getTodos = () => {
    return fetch('http://localhost:8080/todos').then(res => res.json())
}

export const createTodo = (name) => {

    return fetch('http://localhost:8080/todos',{
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({name: name, isComplete: false})
    }).then(res => res.json()) //return the response that includes the newly created object so we can update state
}
export const updateTodo = (todo) => {

    return fetch(`http://localhost:8080/todos/${todo.id}`,{
        method: 'PUT',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(todo) //the entire todo this time
    }).then(res => res.json()) //return the response that includes the newly created object so we can update state
}

export const destroyTodo = (id) => {

    return fetch(`http://localhost:8080/todos/${id}`, {
        method: 'DELETE',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
    })
}