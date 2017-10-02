# Registration Numbers WebApp

![Image Registration Numbers](http://backend-basics.projectcodex.co/reg_number_select_town.jpg)
* A valid registration for either Cape Town, Bellville, or Paarl.
* Each number plate have rounded corners, a black border and a silver-grey background.
* Users should be able to add new entries, entered in a text field, to a list when the Add button is pressed.
* If the registration number text field is blank and the ```Add``` button is pressed nothing should be added to the list.
* Newly added registration numbers should be displayed below the input boxes.

## Getting Started
### Task done

- [x] create a server for the app
- [x] create a model (mongodb schema)
- [x] create routes file and views folder
- [x] create a public folder (css files)
- [x] create a github repository and deploy
- [x] deploy at heroku

### Backend (Server side).
Clone or download this [respository](https://github.com/Gideon877/registration_webapp.git) to your machine from GitHub.


##### Cloning

* Go to the terminal and and copy and paste the following code;

         $ git clone https://github.com/Gideon877/registration_webapp.git registration_webapp


### Prerequisites

What things you need to install the software and how to install them?
* NodeJS
* MongoDB
* Package.json dependencies
* Mocha

### Installing;
##### NodeJS

Before you try to install NodeJS open a terminal window and try to run it by typing, node -v. If NodeJS is installed it should tell you which version you have. Alternatively the command will fail and you will need to install it.

To install it on Ubuntu you can use the [apt-get package manager](https://nodejs.org/en/download/package-manager/#debian-and-ubuntu-based-linux-distributions.md).

Alternatively you can use nvm, the [Node Version Manager](https://github.com/creationix/nvm#install-script.md) to manage the version of NodeJS on your PC.

##### Mongodb

How to [Install MongoDB](https://www.digitalocean.com/community/tutorials/how-to-install-and-secure-mongodb-on-ubuntu-16-04.md) - only do Part 1.

##### Package.json dependencies

```json
"dependencies": {
    "body-parser": "^1.17.1",
    "express": "^4.15.2",
    "express-flash": "0.0.2",
    "express-handlebars": "^3.0.0",
    "express-session": "^1.15.3",
    "mongoose": "^4.10.1"
  }
```

To install all dependencies required for the app to run, on the terminal navigate to the registration_webapp folder, and type  ``` npm install ``` .

##### Mocha Setup

###### Install Mocha

First you need to install Mocha using this command:

```bash
$ sudo npm install -g mocha
```

## Running the tests

if you are using windows OS, first you need to get the mongodb server running.

In the CLI navigate to the registration_webapp and run/type `$ mocha` and this will be your results;

```bash
modules should be able to
  ✓ store Plates to MongoDB
  ✓ create a new Plate
  ✓ rejects duplicate

  3 passing (308ms)
```


### What does these tests do?

1) Takes input, create a new object with the entered number plate to MongoDB with a property of **reg_number**, then check if the object is saved in the database and return result in a variable ```plate```.

2) Create a new number plate that does not exist in the database.

3) Rejects duplicates (checks if the entered plate have been stored in the database before then return the existing plate object.


## Running the app locally

* In the command line,  navigate to the registration_webapp directory.Once you are in the appropriate folder input this command

        $ nodemon or
        $ node index.js

* The following message should be displayed  ```Registraion webapp listening at http://:::7000```

* Then open a new tab on your browser and type this ``` http://localhost:7000/reg_numbers``` and the app will open.

## Deployment

The app is deployed at Heroku and gitHub. The app also use mLab database.

### Prerequisites

The best practices in this article assume that you have:

- Node.js and npm installed.
- an existing Node.js app.
- a free Heroku account.
- the Heroku CLI.

Then start your app locally using `heroku local` command which is installed as a part of the Heroku CLI.

`$ heroku local web` Your app should now be running on <http://localhost:5000/>.

The shoes api App is deployed on [Heroku](https://https://regnumbers-8.herokuapp.com)

###### To open the app locally;
  - first you need to navigate to your waiter_webapp directory on the terminal.
  - run the server using `$ heroku open` command.
  - navigate to your web browser and type <http://localhost:5000/> on the url input.


## Built With

* [MLAB](https://mlab.com) - Cloud MongoDB server
* [NPM](https://www.npmjs.com) - Dependency Management
* [Bootstrap](https://bootswatch.com/cerulean/) - The web framework used


## Versioning
``` "version": "1.0.0", ```


## Author

* **Thabang Gideon Magaola** - *Initial work* - [Thabang Gideon](https://github.com/Gideon877)

## License

This project is licensed under the ISC License - see the [ISC-LICENSE.md](https://github.com/nevir/readable-licenses/blob/master/markdown/ISC-LICENSE.md) file for details
```   "license": "ISC" ```
