# Twitter Sentiment

## Requirements

* Ruby (`brew install ruby`)
* Jekyll (`gem install jekyll`)
* Node (`brew install node`)
* Webpack (`npm install -g webpack`)

## Install

```
git clone git@github.com:eads/sentiment-search.git
cd sentiment search
git submodule update --init
npm install
```

## Run

```
jekyll serve
```

## Edit

`src/index.md` contains the "what is this?" content.

`webpack/components/SentimentSearch.js` is the root search UI component.

## Build and deploy

```
jekyll build
git add public
git commit -m "built site"
git subtree push --prefix public origin gh-pages
```

## Based on the greak work of Alli Zadronzny

_Kept from original README_.

So you can have your React and serve it statically, too. Plugin-free!

Are you working with Github pages? See the gh-pages branch:

- https://github.com/allizad/jekyll-webpack/tree/gh-pages

You can learn more about how this was put together in my walkthrough post here:
- [Using Webpack and React with Jekyll](https://medium.com/@allizadrozny/using-webpack-and-react-with-jekyll-cfe137f8a2cc)

See the full series of adding search to Jekyll, for which this project was a building block, here:
- [Elasticsearch for Jekyll, Part 1](https://blog.omc.io/elasticsearch-for-jekyll-part-1-ab456ac7c093)

Woohoo! Now go build shit!

![cat image](https://i0.wp.com/www.developermemes.com/wp-content/uploads/2015/10/Now-That-You-Have-That-Feature-Done-I-Want-It-To-Do-Something-Else-Instead-Web-Developer-Meme.jpg?resize=385%2C232)
