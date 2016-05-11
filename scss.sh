echo 'starting sass'

#go ahead and generate, just in case the file isn't there yet
node-sass ./src/scss/style.scss ./public/style.css

#watch for changes!
node-sass -w ./src/scss/style.scss ./public/style.css
