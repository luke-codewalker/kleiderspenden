# kleiderspenden App

An app to look for places in Cologne, Germany where you can donate old clothes. Shows Charities, Recycling facilities and Containers from different organizations. Take a look at it [here](https://luke-codewalker.github.io/kleiderspenden/).

## Data sources

Open Source Data used by this app provided by [AWB Koeln](https://www.awbkoeln.de):

- https://www.awbkoeln.de/geodaten/altkleider/
- https://www.awbkoeln.de/geodaten/kleiderkammern/

## To Do list

- [x] get app up and running
- [x] dynamically load api url depending on dev vs prod env
- [x] add favicon
- [ ] add about page with link to this repo
- [ ] add footer with link to github profile
- [ ] create mobile layout
- [ ] add option to send add/update/edit suggestions
- [ ] add loading spinner to result list
- [ ] add circle showing radius to map

## Technical details

This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app). It uses a FLask app running on Heroku connected with an MLab database as it's backend API. You can check out the source code for the API [here](https://github.com/luke-codewalker/kleiderspenden-api).
