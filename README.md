# Web Export Template for Cytoscape 3

## What is this?
This is the parent project for all web application templates for __Export as Interactive Web Visualization__ option available in Cytoscape 3.2.0 and later.

## Requirments
* Node.js
* Gulp
* Grunt

## Current Templates

### Setup

```
git clone git@github.com:cytoscape/web-export-templates.git
cd web-export-templates
git submodule init
git submodule update
```

### Simple Export
Simple web application using Cytoscape.js to visualize single network view exported in Cytoscpae.js JSON file.

##### How to Build Project
This template uses [gulp](http://gulpjs.com/) for building application.

###### Build Application:
```
gulp
```

###### Preview:
```
gulp serve
```

### Full Export
AngularJS-based single page application to visualize networks with Cytoscape.js.


##### How to Build Project
As of today (September 30, 2014), this project uses [grunt](http://gruntjs.com/) for build process, but will be migrated to gulp in future versions.

###### Build Application:
```
grunt
```

###### Preview:
```
grunt serve
```

## Create Zip Archive for json-impl
(TBD)

## Documentation
If you are interested in how to use this template manually, please visit our [wiki](https://github.com/idekerlab/cyjs-export-parent/wiki).
