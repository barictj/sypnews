cd "C:\Users\Tom\Desktop\swafcu\ContentBase\custom-server-app"
git add .
git commit -am "Heroku deployment" --allow-empty
git push heroku main
write-host "Heroku deployment completed"
