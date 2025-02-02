// Make a GET request to a public API and display the data.

// create a URL
const url = "https://jsonplaceholder.typicode.com/posts"

// Make a GET Request
fetch(url)
    .then(response => {
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`)
        }
        return response.json();
    })
    .then(data => {
        // Display the data post for brevity on console
        data.slice(0,).forEach(post => {
            console.log(`Post ID: ${post.id}`);
            console.log(`Title: ${post.title}`);
            console.log(`Body: ${post.body}`);
            console.log("-".repeat(20));
        });
    })
    .catch(error => {
        console.error("Failed to fetch data:", error)
    })