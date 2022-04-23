heroku container:login

# replace signingv2 with your own tag
docker buildx build --platform linux/amd64 -t forked-next-apollo-demo .

# make sure to use the name of your Heroku app
docker tag forked-next-apollo-demo registry.heroku.com/forked-next-apollo-demo/web

# use docker push to push it to the Heroku registry
docker push registry.heroku.com/forked-next-apollo-demo/web

# then use heroku release to activate
heroku container:release web -a forked-next-apollo-demo