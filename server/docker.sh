# replace signingv2 with your own tag
docker buildx build --platform linux/amd64 -t next-apollo-demo-backend .

# make sure to use the name of your Heroku app
docker tag next-apollo-demo-backend registry.heroku.com/next-apollo-demo-backend/web

# use docker push to push it to the Heroku registry
docker push registry.heroku.com/next-apollo-demo-backend/web

# then use heroku release to activate
heroku container:release web -a next-apollo-demo-backend