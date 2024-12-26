// app.js

// Function to fetch posts from JSONPlaceholder API
async function fetchPosts() {
    const apiUrl = 'https://jsonplaceholder.typicode.com/posts';
    try {
        const response = await fetch(apiUrl);
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }
        const posts = await response.json();
        displayPosts(posts);
    } catch (error) {
        console.error('Error fetching posts:', error);
        document.getElementById('postsContainer').innerHTML = `<p>Error loading posts. Please try again later.</p>`;
    }
}

// Function to display posts on the webpage
function displayPosts(posts) {
    const postsContainer = document.getElementById('postsContainer');
    postsContainer.innerHTML = ''; // Clear existing content
    posts.forEach(post => {
        const postElement = document.createElement('div');
        postElement.classList.add('post');
        postElement.innerHTML = `
            <h3>${post.title}</h3>
            <p>${post.body}</p>
        `;
        postsContainer.appendChild(postElement);
    });
}

// Fetch and display posts when the page loads
fetchPosts();
