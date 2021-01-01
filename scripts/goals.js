document.addEventListener('DOMContentLoaded', () => {
    const people = [
        {
            name: "Saurabh Singh",
            goal: '1,070,000',
            img: 'https://pbs.twimg.com/profile_images/1117457128149544960/aXLwSzcB_400x400.jpg'
        },
        {
            name: "Shubham Singh",
            goal: '250,000',
            img: 'https://pbs.twimg.com/profile_images/1135970238963494913/BK25dZbH_400x400.jpg'
        },
        {
            name: "Sushant Singh",
            goal: '1,000,000',
            img: 'https://pbs.twimg.com/profile_images/1306644761411899393/jlOj9vP__400x400.jpg'
        }
    ];

    for(let i = 0, l = people.length; i < l; i++)
    {
        const card = document.createElement('div');
        card.className = 'card';
        document.body.appendChild(card);
        
        const img = document.createElement('img');
        img.className = 'image';
        img.setAttribute('src', people[i].img);
        card.appendChild(img);

        const name = document.createElement('h1');
        name.className = 'name';
        name.innerHTML = people[i].name;
        card.appendChild(name);

        const goal = document.createElement('h2');
        goal.className = 'goal';
        goal.innerHTML = "₹ " + people[i].goal;
        card.appendChild(goal);

    }

});