# WGUFinal

Full stack application written in node.js with React and Bootstrap on the front-end. Backend uses the express framework,
sequelize as the object relational mapper (ORM) and stores persistent data in a MySQL instance running on google cloud. 
Application was deployed on my personal google cloud platform using app engine. The front-end and back-end were deployed on separate services.

The application is basically a CRUD (create, read, update, and delete operations) application. The idea is that a department, company, organization, or whatever
would have tasks to accomplish. They would add those tasks to the list as they come in. Then, a task completer would come along complete the tasks. This design allows
for easy retreival of metrics for future use as an analytical platform.
