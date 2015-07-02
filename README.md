## Ember Routes

In this Buildlab screencast, we're looking at the various startup and shutdown route hooks in an ember application.

The screencast can be watched here: (http://buildlab.co/u/validkeys/channels/1/episodes/ember-routes)[http://buildlab.co/u/validkeys/channels/1/episodes/ember-routes]

---

### Backend

In this repo, the backend folder points to a rails application and runs on an sqlite database. To run:

The following command will create all of the images in the database

```
$ rake image:create
```

Then, run the following to analyze each image and update the database with their size and aspect ratios.

```
$ rake image:record_sizes
```

Then just startup the rails app with the following:

```
$ bundle exec rails s
```

You'll now have a rails server running on port: 3000


### Frontend

To get the ember app running, run:

```
$ npm install && bower install
```

Then run:

```
$ ember s
```

And that's it!

