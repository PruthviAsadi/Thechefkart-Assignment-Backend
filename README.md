# Instagram-Like Backend API

This is a backend service for an Instagram-like application built with Node.js, Express, and SQLite.

## Getting Started

### Installation

1. Clone the repository:
   git clone https://github.com/PruthviAsadi/Thechefkart-Assignment-Backend

2.Install dependencies:

npm install

3.Start the server:

node app.js

API Endpoints
1. Create a Post

Endpoint: /api/posts
Method: POST
Description: Creates a new post with an image and caption.

Headers:

Content-Type: multipart/form-data

Body Parameters:
Parameter	Type	Description
userId	Number	ID of the user
caption	String	Post caption
image	File	Image for the post

Response:

{
  "message": "Post created successfully",
  "postId": 1
}

2. Get All Posts

Endpoint: /api/posts
Method: GET
Description: Fetches all posts.

Response:

{
  "posts": [
    {
      "id": 1,
      "user_id": 1,
      "caption": "My first post",
      "image": "167293847234.jpg",
      "created_at": "2025-01-01 10:20:30"
    }
  ]
}

Run the App

    Start the server:

node app.js

Use Postman or similar tools to test the APIs.
