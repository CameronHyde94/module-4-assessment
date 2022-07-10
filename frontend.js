const form = document.querySelector('form');

const getUser = () => {
    axios.get(`http://localhost:3001/api/getUsers/
        `)
        .then(({ data }) => {
           const container = document.getElementById('user-container'); //We are grabbing the container that we put on the element.
           const user = document.createElement('ul'); // Creating a user list that is going to house all our user information.
           Object.keys(data).forEach((attr) => { // Then we are going to take the response from getUser which has a key of (name, age, and all of our user data).
            const userAttr = document.createElement('li'); // Creating a list item which tells us what the information is and what the value is.
            userAttr.innerHTML = `${attr}: ${data[attr]}`
            user.appendChild(userAttr)
           });
           container.appendChild(user); // Then we are going to append it into our container
        })
        .catch((err) => {
            console.log(err)
        })
}

form.addEventListener('submit', (e) => {
    e.preventDefault(); // This is going to prevent our page from refreshing once the form is submitted.
    const inputs = document.querySelectorAll('input');
    
    inputs.forEach((input) => console.log(input.value));
    const [ name, age, lovesDogs, hasFriends ] = inputs; // DOM node
    const body = { 
        name: name.value, 
        age: age.value, 
        lovesDogs: lovesDogs.value, 
        hasFriends: hasFriends.value 
    };
    axios.post('http://localhost:3001/api/users', body)
        .then(() => {
            console.log('User Info has been updated')
        })
        .catch((err) => console.log(err));
});

const getUserButton = document.getElementById('get-user').addEventListener('click', getUser);

const editNameButton = document.getElementById('edit-name-button');

editNameButton.addEventListener('click', () => { //when clicking edit name button it's going to grab the value 
    const newName = document.getElementById('edit-name-input').value;
    axios.put(`http://localhost:3001/api/editName/${newName}`) //it's going to grab the value of /api/editName
    .then(() => alert('Name has been edited'))
    .catch((e) => console.log(e))
})

const deleteNameButton = document.getElementById('delete-button');

deleteNameButton.addEventListener('click', () => { //when clicking delete name button it's going to delete the value 
    axios.delete(`http://localhost:3001/api/deleteUser`) //it's going to delete the value of /api/deleteUser
    .then(() => alert('Name has been deleted'))
    .catch((e) => console.log(e))
})
