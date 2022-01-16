
# [Timestamp Microservice](https://www.freecodecamp.org/learn/apis-and-microservices/apis-and-microservices-projects/timestamp-microservice)
Part of the FreeCodeCamp Back End Development Certification.

Sample deployment: https://fcc-timestampmicroservice.herokuapp.com/

This is an API that returns timestamp information for either a specific time, or the current time.
Input can be either a UNIX timestamp in milliseconds, or YYYY-MM-DD

## Deployment
Heroku is shown as a sample deployment because it's free and doesn't required a Procfile.

With the [Heroku CLI](https://devcenter.heroku.com/categories/command-line) installed,
```
heroku login -i
heroku create <app name>
heroku git:remote -a <app name>
git push heroku main
```

## Sample Requests

### UNIX Timestamp

`GET https://fcc-timestampmicroservice.herokuapp.com/api/1451331624000`

```json
{
    "unix": 1451331624000,
    "utc": "Mon, 28 Dec 2015 19:40:24 GMT"
}
```

### YYYY-MM-DD

`GET https://fcc-timestampmicroservice.herokuapp.com/api/2015-12-25`

```json
{
    "unix": 1451001600000,
    "utc": "Fri, 25 Dec 2015 00:00:00 GMT"
}
```

### Current Date and Time

`GET https://fcc-timestampmicroservice.herokuapp.com/api`

```json
{
    "unix": 1642345401124,
    "utc": "Sun, 16 Jan 2022 15:03:21 GMT"
}
```
