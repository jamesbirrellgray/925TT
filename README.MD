# Nine25 Test
###### By James A. Birrell Gray
---
## Instructions

1. `npm install`
2. `npm start`
3. Go to http://localhost:3000/api-docs/
---
## Tasks set out in supplied index.js

1. Step 1: Replace the array with data comming from https://swapi.dev/api/people.
2. Step 2: Add support for local pagination.
3. Step 3: Add support to return the list in reverse alphabetical order (name).
4. Step 4: Using data from https://swapi.dev/api/films, return the list of people order by amount of appearances in films.
---
## Assumptions

1. Show the ability to create a documented, readable, and testable API in node.js
2. Show the ability to collect, manipulate, and return data
3. Show via git commit frequency, messaging and branching the best practice ways of working
---
## Approach
1. I decided not to use GraphQL mainly so mny JS/TS could be showcased for the task, I did use an express / typescript generator to scafoold the initial app
2. This app/api has severe peformace issues - this would be alleviated by GraphQl (or chaching)
3. No tests were added, as usual because of time, however I'd be happy to ga back in and apply the test
---
## Tasks and code
### Task 1
1. Recursive functioon to get all pages of SWAPI 
https://github.com/jamesbirrellgray/925TT/blob/wip-08-tidyup-refactor/src/data/swapiPeople.data.ts
2. Mapped to the same properites here https://github.com/jamesbirrellgray/925TT/blob/wip-08-tidyup-refactor/src/models/people.model.ts
### Task 2
1. Mad little paginator here https://github.com/jamesbirrellgray/925TT/blob/wip-08-tidyup-refactor/src/utils/paginator.ts
2. Applied in the controller here https://github.com/jamesbirrellgray/925TT/blob/wip-08-tidyup-refactor/src/controllers/people.controller.ts
### Task 3 
1. Created a sorting util that can be appllied to any alpha numeric property https://github.com/jamesbirrellgray/925TT/blob/wip-08-tidyup-refactor/src/utils/sorted.ts
2. It's applied in the service here https://github.com/jamesbirrellgray/925TT/blob/wip-08-tidyup-refactor/src/services/people.service.ts#L38
### Task 4
1. Created a films model & data source https://github.com/jamesbirrellgray/925TT/blob/wip-08-tidyup-refactor/src/models/films.model.ts & https://github.com/jamesbirrellgray/925TT/blob/wip-08-tidyup-refactor/src/data/swapiFilms.data.ts
2. teh magic happens here in the service https://github.com/jamesbirrellgray/925TT/blob/wip-08-tidyup-refactor/src/services/people.service.ts#L52 I initally applied just to "appearances" filter but ended up just adding it as a propewrty to the "people" interface

## Improvemts
- Discovery on index
- Better/somne unit tests
- Caaching / graphQL 
- Some sanity checks now and then so I don't spend a day chasing whay an async function wasnt working (that was missing a return)
