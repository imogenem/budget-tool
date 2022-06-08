# Getting started with the app

To get started, clone a copy of the repo and run these commands:

### `npm install`
This command installs the packages/dependencies required to make the project work. Sometimes you need additional packages to do the work for you rather than writing something from scratch.

### `npm start`
This command starts the app - you will see the app compile and run in the terminal. You can hit "ctrl + c" in the terminal to stop the app from running, and then you can continue on running commands in the terminal. 

When you run the app, the a new tab should pop up with the app. If you cannot find it, navigate to http://localhost:3000/ in your browser.

# Basic git commands to work in this project

## Creating a branch
To create a branch, run these commands. If something is enclosed in <>, you need to add in your own text to run the command

1. Check which branch you are on - you should never work directly off master
```console
git status
```

2. Checkout master branch
```console
git checkout master
```

3. Pull changes from master before creating your new branch (this reduces merge conflicts down the line)
```console
git pull origin master
```

4. Now you are ready to make your branch! Make sure you add in a unique, descriptive branch name
```console
git checkout -b <your-branch-name>
```

## Pushing your branch to to project
1. Check you are on your branch and not master
```console
git status
```

2. Add all your changes (this adds in changes from every file you edited)
```console
git add .
```

3. Commit the change (this saves on your local machine but does not push to the project)
```console
git commit -m "add your message between the quotes"
```

3. Push the changes to the project
```console
git push
```



