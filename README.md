# RestaurantApp

This application is the capstone project for the Professional Certificate in
Coding: Full Stack Developer with MERN from MITxPRO.

The files stored in this repository shows the code used for the front-end and 
the backend. In this full stack application I used the following tools:

1. **Front-End**
  - NextJS
  - Reactstrap

2. **Back-End**
  - Strapi
  - SQLite
  - Apollo and GraphQL: To handle queries to the datastore.

3. **Additional Tools**
  - Stripe: To handle credit card transactions.

## Demoing

To further understand the functionality of this application please feel free to
watch the following [YouTube video](https://youtu.be/Pgl6mDm04p0) where I explain
the deployment process and demostrate the integration of Stripe within the 
application to handle the credit card transactions.


## Deployment

This application was deployed using Docker images that where pulled by AWS to 
be accessible. In the video I outlined the process that was used to deploy the 
application to the cloud. The following is the list of tools used for deployment:

- Docker Containers: Uploaded to a Docker repository
- AWS:
  - ECS: Created a Cluster running two taks definitions (each for the front-end and the back-end) that will pull the images from DockerHub to run the containers. 
Then I defined 2 services that will 'service' each of the tasks and generate a DNS address to be able to access each of the tasks running the Docker containers.
  - EC2: Created an application load balancer and defined a target group for the front-end that was later configured to connect to the recently created load balancer.

Once the cloud architecture for the Restaurapp was configured, the services from ECS were connected to the load balancer in EC2.

Due to cost of running this application, Restaurapp had to be taken down from AWS.

   
