# Technology Blog
  
![License Badge](https://img.shields.io/badge/license-no%20license-blue)

## Table of Contents
* [Description](#description)
* [Installation](#installation)
* [Usage](#usage)
* [Contributing](#contributing)
* [License](#license)
* [Questions](#questions)

## Description
The Technology Blog is a CMS-style blog site that serves as a crucial tool for developers to read and write about their current projects, technical concepts, and recent advancements they are aware of. On the Technology Blog site, users can view recent blog posts (with a title and blog text), the date it was published, and also comments on that post. Users can also create an account to create their own blog posts, post their own comments, and edit/delete their comments/blogs. Deployed on Heroku, the Technology Blog follows the MVC paradigm in its architectural structure, making extensive use of Handlebars.js as its templating language, Sequelize as its ORM, and the express-session npm package for authentication. 

## Installation
To install the Technology Blog, download [the repository](https://github.com/mshaari/tech-blog-site) from GitHub by running
```
git clone git@github.com:mshaari/tech-blog-site.git
```
in your command line and open in Visual Studio Code. Run 
 
```
npm install
``` 
 
to install all dependencies. You must also create a ".env" file with the following text:

```
DB_NAME= 'tech_blog_db'
DB_PASSWORD= '<your password>'
DB_USER= 'root'
```

## Usage
To invoke the Technology Blog, open 'server.js' in an integrated terminal and run the following two commands:
```
npm run seed

npm start
``` 
Then, visit http://localhost:3001/. Alternatively, you can visit the deployed application on Heroku using [this link](https://warm-basin-90842.herokuapp.com/).

## Contributing
Please do not contribute to this application.

## License
This application has [no license](https://choosealicense.com/no-permission).

## Questions
Please visit my GitHub profile by clicking on my username: [mshaari](https://github.com/mshaari). If you have additional questions, please email me at michael.shaari@gmail.com.