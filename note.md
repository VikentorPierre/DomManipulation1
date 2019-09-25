// Deploy to gh-pages
1. if you dont have a package.json init one with: npm init -y 
2. install gp-pages by: npm insatll gh-pages 
3. inside package.json setup homepage key
4. inside package.json and script object add a deploy script
    : "deploy": "gh-pages -d <nameofdir>" // -d stand for the forder you want to deploy 