#
# &lt;dy-graphs&gt;

This is a simple Polymer custom element wrapper around [Dygraphs](http://dygraphs.com/)

## Demo
> [Check it live](https://sandro-k.github.io/dy-graphs/bower_components/dy-graphs/#/elements/dy-graphs/demos/dy-graphs).

## Documentation
> [Component Documentation](https://sandro-k.github.io/dy-graphs/bower_components/dy-graphs/#/elements/dy-graphs)

## Code Coverage
> [Coverage](https://sandro-k.github.io/dy-graphs/bower_components/dy-graphs/coverage/lcov-report/index.html)

## Install

Install the component using [Bower](http://bower.io/):

```sh
$ bower install dy-graphs --save
```

Or [download as ZIP](https://github.com/timeu/dy-graphs/archive/master.zip).

## Usage

1. Import Web Components' polyfill:

  ```html
<script src="bower_components/webcomponentsjs/webcomponents-lite.js"></script>
  ```

2. Import Custom Element:

```html
<link rel="import" href="bower_components/dy-graphs/dy-graphs.html">
```

3. Start using it!

  Example with static options:

  ```html
  <dy-graphs data="data.csv" options='{"legend": "always","title": "MyTitle"}'></dy-graphs>

  ```

  Example with data binding

  ```html
  <template is="dom-bind" id="app">
    <template>
      <dy-graphs data="{{data}}" options="{{options}}"></dy-graphs>
    </template>
  </template>

  ```

  Interact with dygraph object directly:

```html
    <dygraphs id="graph"></dygraphs>
    <script>
      var g = document.querySelector('#graph');
      g.dygraph.resetZoom();
    </script>
```

## Options

See the [component page](http://timeu.github.io/dy-graphs) for more information.


## Browser Support

![IE](https://raw.github.com/paulirish/browser-logos/master/internet-explorer/internet-explorer_48x48.png) | ![Chrome](https://raw.github.com/paulirish/browser-logos/master/chrome/chrome_48x48.png) | ![Firefox](https://raw.github.com/paulirish/browser-logos/master/firefox/firefox_48x48.png) | ![Opera](https://raw.github.com/paulirish/browser-logos/master/opera/opera_48x48.png) | ![Safari](https://raw.github.com/paulirish/browser-logos/master/safari/safari_48x48.png)
--- | --- | --- | --- | --- |
IE 10+ ✔ | Latest ✔ | Latest ✔ | Latest ✔ | Latest ✔ |


## Development
```
git clone https://github.com/sandro-k/dy-graphs.git
cd dy-graphs
npm run init
npm run dev
```

Browse to http://localhost:8000/components/dy-graphs/ to preview the element documentation. To have [Browsersync](https://browsersync.io/) support, while developing on the element open up
[http://localhost:3000/components/dy-graphs/](http://localhost:3000/components/dy-graphs/)


## GH-Pages

A live demo, documentation and code coverage of this element is published on [https://sandro-k.github.io/dy-graphs/](https://sandro-k.github.io/dy-graphs/bower_components/dy-graphs/#/elements/dy-graphs)

### Publish/Update GH-Pages

```sh
git checkout gh-pages
bower install
cd bower_components/dy-graphs
bower install
npm install
npm run test
git add .
git commit -m "update gh-pages"
git push
```

## Contributing

1. Fork it!
2. Create your feature branch: `git checkout -b my-new-feature`
3. Commit your changes: `git commit -m 'Add some feature'`
4. Push to the branch: `git push origin my-new-feature`
5. Submit a pull request :D

## History

Check [Release](https://github.com/timeu/dy-graphs/releases) list.

## License

[MIT License](http://timeu.mit-license.org/) © Ümit Seren