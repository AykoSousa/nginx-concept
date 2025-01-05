# NGINX CONCEPT

Using the video created by [Fabrício Veronez](https://www.youtube.com/@fabricioveronez), articles and NGINX [documentation](https://nginx.org/en/docs/) as a basis for study, I deepened my studies on the concept of proxy, including the normal one, as well as the reverse one and load balancing.

- Video link: https://www.youtube.com/watch?v=M9TwcTb5nFk
- Board link: https://whimsical.com/nginx-UPbY25dFs8VxVmA3QfgLJJ

This is a repository dedicated to fixing the content learned and practical examples using docker.

## What is NGINX?

Nginx is a popular, lightweight, high-performance web server that can also be used as a reverse proxy, load balancer, and email proxy. Its event-driven architecture allows it to handle a large number of concurrent connections with low resource consumption.

### How Nginx Works (Focusing on Reverse Proxy):

In its reverse proxy role, Nginx acts as an intermediary between clients (browsers, applications, etc.) and one or more backend servers (web servers like Apache, application servers, etc.). Instead of clients directly accessing the backend servers, they connect to Nginx, which then forwards the requests to the appropriate server and returns the response to the client.

### Here's a summary of the workflow:

1. Client Request: A client makes a request for a resource (e.g., a web page). The request is sent to the Nginx server.

2. Request Reception: Nginx receives the request and, based on its configuration (which may include rules based on URL, headers, etc.), decides which backend server should process the request.

3. Forwarding to the Backend Server: Nginx forwards the request to the chosen backend server.

4. Backend Processing: The backend server processes the request and generates a response.

5. Returning the Response to Nginx: The backend server sends the response back to Nginx.

6. Returning the Response to the Client: Nginx receives the response from the backend server and sends it back to the client.

### Benefits of Using Nginx as a Reverse Proxy:

- Security: Hides the internal network structure and backend servers from clients, increasing security.
- Load Balancing: Distributes traffic among multiple backend servers, preventing overload on a single server and improving availability and scalability.
- Caching: Can cache static content (images, CSS files, JavaScript, etc.), reducing page load times and decreasing the load on backend servers.
- Performance: Accelerates web application response times by optimizing the flow of requests and responses.
- SSL/TLS Termination: Can handle SSL/TLS processing, relieving the load on backend servers.

## Load balancing

Load balancing is a crucial technique in modern IT infrastructures, especially for high-availability and large-scale web applications. It distributes network or application traffic across multiple servers, optimizing resource utilization, maximizing throughput, reducing latency, and ensuring fault tolerance. Instead of a single server handling all requests, a load balancer acts as a "traffic manager," directing requests to available servers efficiently.

### How Load Balancing Works:

A load balancer sits between clients (users) and backend servers (servers hosting the application). When a client makes a request, it first reaches the load balancer, which then decides which backend server should process the request. This decision is based on different algorithms and criteria.

### Types of Load Balancers:

- Hardware Load Balancers: These are dedicated physical devices for load balancing. They offer high performance and advanced features but can be more expensive.
- Software Load Balancers: These are applications that run on regular servers and perform the load balancing function. They are more flexible and generally more affordable. Nginx, as we've seen, is a popular example of a software load balancer.

### Benefits of Load Balancing:

1. High Availability: If one server fails, the load balancer redirects traffic to the other functioning servers, ensuring service continuity.

2. Scalability: Allows adding more servers as demand increases, scaling the application horizontally.

3. Improved Performance: Distributes the load across multiple servers, preventing overload on a single server and improving application response time.

4. Reduced Latency: By distributing traffic, load balancing can reduce latency for users, providing a better experience.