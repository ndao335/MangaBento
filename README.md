# Manga Bento
Manga Bento is a responsive web app with the purpose of learning about web development and training my skills. 

# Features
* Register and log in users
* Manga bookmark for each user
* Search manga by name
* Read manga and change chapters

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
* Check api address for more information and update manga display order by latest, ratings, or views
* Add Facebook, Google, Twitter register and login Api
* Add admin page to upload manga
* Test bookmark after login success
* Test login and register page when wrong information inputted
* Test next/previous chapter in the reading pages
* Fix manga display flex box 
