// JavaScript code for fetching random images
const mainContent = document.querySelector('main');
const postTemplate = document.getElementById('post-template').innerHTML;

fetch('https://api.unsplash.com/photos/random?count=3&client_id=LKoAqysBXmBjMK6HwE9WtRMrBcXD9eVSKOhT2x5VwcE') // Replace YOUR_API_KEY with your actual API key
    .then(response => {
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        return response.json();
    })
    .then(data => {
        console.log('API Response:', data);
        data.forEach(image => {
            const post = document.createElement('div');
            post.innerHTML = postTemplate;
            post.querySelector('.post-image').src = image.urls.regular;
            post.querySelector('.post-description p').innerText = image.alt_description || 'No description available';
            mainContent.appendChild(post);
        });
    })
    .catch(error => console.error('Error fetching images:', error));

   // JavaScript code for fetching random images and usernames
const statusCircles = document.querySelectorAll('.status-circle');

fetch('https://api.unsplash.com/photos/random?count=3&client_id=LKoAqysBXmBjMK6HwE9WtRMrBcXD9eVSKOhT2x5VwcE') // Replace YOUR_API_KEY with your actual API key
    .then(response => {
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        return response.json();
    })
    .then(data => {
        statusCircles.forEach((circle, index) => {
            circle.style.backgroundImage = `url(${data[index].urls.regular})`;
            const usernameContainer = document.createElement('div');
            usernameContainer.classList.add('username');
            usernameContainer.innerText = data[index].user.username;
            circle.appendChild(usernameContainer);
            circle.addEventListener('click', () => {
                largeImage.src = data[index].urls.regular;
                largeImage.style.display = 'block';
            });
        });
    })
    .catch(error => console.error('Error fetching images:', error));

