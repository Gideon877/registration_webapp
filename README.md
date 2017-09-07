# Registration Numbers WebApp

![Image Registration Numbers](http://backend-basics.projectcodex.co/reg_number_select_town.jpg)

* That displays a registration number plate.
* The number plate should have a rounded corners, a black border and a yellow or silver-grey background.
* Users should be able to add new entries, entered in a text field, to a list when the Add button is pressed.
* If the registration number text field is blank and the Add button is pressed nothing should be added to the list.
* Newly added registration numbers should be displayed below the input boxes.

## Getting Started
### Backend (Server side).
* Clone or download this respository https://github.com/Gideon877/registration_webapp.git to your machine from GitHub.

### Prerequisites

What things you need to install the software and how to install them?
* NodeJS
* MongoDB
* Package.json dependencies

### Installing;
##### NodeJS

Before you try to install NodeJS open a terminal window and try to run it by typing, node -v. If NodeJS is installed it should tell you which version you have. Alternatively the command will fail and you will need to install it.

To install it on Ubuntu you can use the [apt-get package manager](https://nodejs.org/en/download/package-manager/#debian-and-ubuntu-based-linux-distributions.md).

Alternatively you can use nvm, the [Node Version Manager](https://github.com/creationix/nvm#install-script.md) to manage the version of NodeJS on your PC.

##### mongodb

How to [Install MongoDB](https://www.digitalocean.com/community/tutorials/how-to-install-and-secure-mongodb-on-ubuntu-16-04.md) - only do Part 1.

##### Package.json dependencies

```
"dependencies": {
    "body-parser": "^1.17.1",
    "express": "^4.15.2",
    "express-flash": "0.0.2",
    "express-handlebars": "^3.0.0",
    "express-session": "^1.15.3",
    "mongoose": "^4.10.1"
  }
```

To install all dependencies required for the app to run, on the terminal navigate to the project root, and type  ``` npm install ```

## Running the tests
### Mocha Setup
##### Install Mocha
First you need to install Mocha using this command:
```
sudo npm install -g mocha
```
After running this command, run ``` mocha ``` from any terminal window in the project directory.

### What does these tests?

- Modules should be able to:

    * Store entered number plates to MongoDB both locally and online.
    * Create a new number plate with no more than 10 characters
    * Rejects duplicates (checks if the entered plate have been stored in the database
```
modules should be able to
    ✓ store Plates to MongoDB
    ✓ create a new Plate
    ✓ rejects duplicate

  3 passing (308ms)

```

### And coding style tests

Explain what these tests test and why

```
describe('modules should be able to', function() {

    var models = Models('mongodb://localhost/reg_numbers-tests');

    beforeEach(function(done) {
        models.Plate.remove({}, function(err){
            if(err){
                done(err)
            }
            models.Plate.create({
                reg_number: 'CA 987 0000'
            }, function(err){
                done(err);
            });
        });
    });

    it('store Plates to MongoDB', function(done) {
        models.Plate.create({
            reg_number: 'CA 987 2899'
        }, function(err) {
                models.Plate.findOne({
                    reg_number: 'CA 987 2899',
                }, function(err, plate) {
                    assert.equal("CA 987 2899", plate.reg_number)
                    done(err);
                });
            });
    });
```

## Deployment

The app is deployed at Heroku and gitHub.
Use mLab to deploy your application.

##### Prerequisites
The best practices in this article assume that you have:

* Node.js and npm installed.
* an existing Node.js app.
* a free Heroku account.
* the Heroku CLI.

Then start your app locally using ```heroku local``` command which is installed as a part of the Heroku CLI.

``` $ heroku local web ```
Your app should now be running on http://localhost:5000/.

#### Deploying App on Heroku

```
$ git add .
$ git commit -m "Added a Procfile."
$ heroku login
Enter your Heroku credentials.
...
$ heroku create
Creating arcane-lowlands-8408... done, stack is cedar
http://arcane-lowlands-8408.herokuapp.com/ | git@heroku.com:arcane-lowlands-8408.git
Git remote heroku added
$ git push heroku master
...
-----> Node.js app detected
...
-----> Launching... done
       http://arcane-lowlands-8408.herokuapp.com deployed to Heroku

```

To open the app in your browser, type ```heroku open``` .







## Built With

* [MLAB](https://mlab.com) - Cloud MongoDB server
* [NPM](https://www.npmjs.com) - Dependency Management
* [Bootstrap](https://bootswatch.com/cerulean/) - The web framework used


## Versioning
``` "version": "1.0.0", ```


## Author

* **Thabang Gideon Magaola** - *Initial work* - [@Gideon](https://github.com/Gideon877)

## License

This project is licensed under the ISC License - see the [ISC-LICENSE.md](https://github.com/nevir/readable-licenses/blob/master/markdown/ISC-LICENSE.md) file for details 
```   "license": "ISC" ```

