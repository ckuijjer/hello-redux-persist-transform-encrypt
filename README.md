# hello-redux-persist-transform-encrypt

This is a demo showing how to persist and rehydrate a redux store in localStorage, while making sure the contents in localStorage expire. This is achieved by using _redux-persist-transform-encrypt_ to encrypt its contents with a key stored in a cookie with an expiry date.

## Why is this needed?

localStorage might be used to store privacy sensitive information

## How to demo

* Start the demo
* Increment the counter
* Refresh the page
* Show that the state of the counter is persisted
* Clear the cookies or wait for the cookie to expire
* Refresh the page
* Show that the state of the counter is reset to 0
