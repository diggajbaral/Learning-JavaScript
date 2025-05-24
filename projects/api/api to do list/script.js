fetch('https://dummy-json.mock.beeceptor.com/todos')
    .then(response => response.json())
    .then(data => {

        const localApi = document.querySelector('#localApi')

        data.forEach(todo => {

            const createdList = document.createElement('div')
            createdList.className = 'createdList';

            const apiId = document.createElement('h3')
            apiId.textContent = todo.id
            apiId.style.color = 'green'

            const title = document.createElement('h3')
            title.textContent = todo.title;

            const completedButton = document.createElement('button')

            completedButton.style.color = '#fff'

            if (todo.completed) {
                completedButton.textContent = 'True';
                completedButton.style.backgroundColor = 'blue';
            } else {
                completedButton.style.backgroundColor = 'crimson';
            }

            completedButton.textContent = todo.completed;

            localApi.appendChild(createdList);
            createdList.appendChild(apiId);
            createdList.appendChild(title);
            createdList.appendChild(completedButton);

        })

    })