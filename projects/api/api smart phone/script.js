fetch('https://api.restful-api.dev/objects')
    .then(response => response.json())
    .then(data => {
        const container = document.querySelector('.container');

        data.forEach(item => {
            const card = document.createElement('div');
            card.classList.add('smartPhone');

            const name = document.createElement('h3');
            name.textContent = item.name;
            name.style.color = `${item}`;
            card.appendChild(name);

            const id = document.createElement('p');
            id.textContent = `ID: ${item.id}`;
            card.appendChild(id);

            if (item.data) {
                const details = document.createElement('div');
                details.classList.add('details');

                for (const [key, value] of Object.entries(item.data)) {
                    const detailItem = document.createElement('p');
                    detailItem.textContent = `${key}: ${value}`;
                    details.appendChild(detailItem);
                }

                card.appendChild(details);
            } else {
                const noData = document.createElement('p');
                noData.textContent = 'No additional data available';
                noData.style.color = 'gray';
                card.appendChild(noData);
            }

            container.appendChild(card);
        });
    })
    .catch(error => {
        console.error('Error fetching data:', error);
        const container = document.querySelector('.container');
        container.textContent = 'Failed to load data. Please try again later.';
    });