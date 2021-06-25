# MangaBento
MangaBento is a responsive web app with the purpose of learning about web development and training my skills.

# Features
* Register and log in users
* Login with OAuth Facebook and Google
* App is responsive on all devices
* Manga bookmark for each user
* Search manga by name
* Read manga and change chapters
* Admin page for uploading new manga
* Increase number of views when user read manga chapter

# How to use
The app can be used without an account, but the bookmark will be available only for logged users. It is simple, every manga page will have a button to "Add Favorite" or "Remove favorite" to manage the bookmarks. At the bottom of the page every manga will have available a list of chapters, you only need to click and will be redirected to the selected manga page.

# Build on your own
Install the dependencies and devDependencies.
```
$ git clone https://github.com/ndao335/MangaBento
$ brew services run mongodb-community
$ mongoimport --db manga-project --collection mangas ^ --drop --file ~({folder path/MangaBento/backend/data.json})
$ cd backend; npm install;
$ cd ../frontend; npm install;
```

# Todo's
* Display number of chapters with the list.
