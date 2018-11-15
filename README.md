# JS-HtmlBuilder

## Getting started
Simply copy the HTMLBuilder into your project folder and include the file into your project. After you created a new Object of it you are ready!
```javascript
var html = new HTMLBuilder();
```

## Usage
Every create function returns an html element that can be appended like this:
```javascript
var element = html.createDiv(...);

// Append the generated div
document.getElementById('my-identifier').appendChild(element);
```

### Attributes
The attributes parameter is the same in every function.
Mostly it's the last parameter.
```javascript
// One attribute
[['id', 'my-identifier']]

// Multiple attributes
[
	['id', 'my-identifier'],
	['class', 'my-class, my-other-class'],
	['onclick', 'alert()']
]

// Example in function
html.createDiv('Content', [['class', 'my-class']]);
```
The example above would create the following html:
```html
<div class="my-class">Content</div>
```
In the code examples the optional parameter "attributes" is replaced with a placeholder "attributes".
The way the attributes would be passed is always like described above.

### Supported tags
Currently the following tags are supported:
a, button, div, h1, h2, h3, h4, h5, h6, i, image, input, label, option, p, select, table, tbody, td, tfoot, thead, tr

### Tags and their standard / special parameters

#### Standard parameters
The following examples describe the special create functions.
The standard parameters for the other functions are like it is in "createDiv":
```javascript
html.createDiv('content', [['id', 'test']]);
```
Output element:
```html
<div id="test">content</div>
```

#### Anchor "&lt;a&gt;&lt;/a&gt;"
```javascript
html.createAnchor('/website/example.html', 'Testlink', attributes);

// Alias function
html.createA(...);
```
Output element:
```html
<a href="/website/example.html">Testlink</a>
```

#### Headline"&lt;h1&gt;&lt;/h1&gt; to &lt;h6&gt;&lt;/h6&gt;"
```javascript
html.createHeadline('h2', 'Testheadline', attributes);
html.createHeadline('3', 'Testheadline 2', attributes);

// Alias function
html.createH(...);
```
Output element:
```html
<h2>Testheadline</h2>
<h3>Testheadline 2</h3>
```

#### Image "&lt;img&gt;"
```javascript
html.createImage('/img/myimage.jpg', 'alt-text', attributes);

// Alias function
html.createImg(...);
```
Output element:
```html
<img src="/img/myimage.jpg" alt="alt-text">
```

#### Input "&lt;input&gt;"
```javascript
html.createInput('text', attributes);
```
Output element:
```html
<input type="text">
```

#### Label "&lt;label&gt;&lt;/label&gt;"
```javascript
html.createLabel('MyLabel', 'my-textfield', attributes);
```
Output element:
```html
<label for="my-textfield">MyLabel</label>
```

#### Option "&lt;option&gt;&lt;/option&gt;"
This function is to create options for a "&lt;select&gt;&lt;/select&gt;"-input if the options are not directly created in the "createSelect"-function.
```javascript
html.createOption('some-value', 'MyOption', attributes);
```
Output element:
```html
<option value="some-value">MyOption</option>
```

#### Select "&lt;select&gt;&lt;/select&gt;"
The select element can be created directly with options or as empty select.
Options can be added later by creating options with "createOption" and appending them to the select.
```javascript
html.createSelect(null, attributes);
html.createSelect(
	[
		['some-value', 'MyOption', attributes],
		['some-other-value', 'MyOption 2', [['selected']]]
	],
	attributes
);
```
Output element:
```html
<select></select>
<select>
	<option></option>
	<option selected=""></option>
</select>
```

#### Table "&lt;table&gt;&lt;/table&gt;"
coming soon...
#### Table body "&lt;tbody&gt;&lt;/tbody&gt;"
coming soon...
#### Table cell "&lt;td&gt;&lt;/td&gt;"
coming soon...
#### Table foot "&lt;tfoot&gt;&lt;/tfoot&gt;"
coming soon...
#### Table head "&lt;thead&gt;&lt;/thead&gt;"
coming soon...
#### Table row "&lt;tr&gt;&lt;/tr&gt;"
coming soon...