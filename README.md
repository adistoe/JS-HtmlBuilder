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

### Supported tags and their functions
| tag  | function                    | alias function |
|------|-----------------------------|----------------|
|a     |createAnchor(...)            |createA(...)    |
|button|createButton(...)            |                |
|div   |createDiv(...)               |                |
|h1    |createHeadline('h1', ...)    |createH1(...)   |
|h2    |createHeadline('h2', ...)    |createH2(...)   |
|h3    |createHeadline('h3', ...)    |createH3(...)   |
|h4    |createHeadline('h4', ...)    |createH4(...)   |
|h5    |createHeadline('h5', ...)    |createH5(...)   |
|h6    |createHeadline('h6', ...)    |createH6(...)   |
|i     |createItalic(...)            |createI(...)    |
|img   |createImage(...)             |createImg(...)  |
|input |createInput(...)             |                |
|label |createLabel(...)             |                |
|li    |createListElement(...)       |createLi(...)   |
|ol    |createOrderedList(...)       |createOl(...)   |
|option|createOption(...)            |                |
|p     |createParagraph(...)         |createP(...)    |
|select|createSelect(...)            |                |
|span  |createSpan(...)              |                |
|table |createTable(...)             |                |
|tbody |createTablePart('tbody', ...)|createTbody(...)|
|td    |createTableCell(...)         |createTd(...)   |
|tfoot |createTablePart('tfoot', ...)|createTfoot(...)|
|thead |createTablePart('thead', ...)|createThead(...)|
|tr    |createTableRow(...)          |createTr(...)   |
|ul    |createUnorderedList(...)     |createUl(...)   |

### Tags and their parameters
```javascript
var attributes = [['class', 'example'], ['onclick', 'alert()']];
```
#### Standard parameters
The following examples describe the special create functions.
The standard parameters for the other functions are like it is in "createDiv":
```javascript
html.createDiv('content', attributes);
```
Output:
```html
<div id="test">content</div>
```

#### Anchor "&lt;a&gt;&lt;/a&gt;"
```javascript
html.createAnchor('/website/example.html', 'Testlink', attributes);

// Alias function
html.createA(...);
```
Output:
```html
<a href="/website/example.html">Testlink</a>
```

#### Headline"&lt;h1&gt;&lt;/h1&gt; to &lt;h6&gt;&lt;/h6&gt;"
```javascript
html.createHeadline('h2', 'Testheadline', attributes);
html.createHeadline('3', 'Testheadline 2', attributes);

// Alias functions (without parameter type)
html.createH1('Testheadline', attributes);
html.createH2(...);
html.createH3(...);
html.createH4(...);
html.createH5(...);
html.createH6(...);
```
Output:
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
Output:
```html
<img src="/img/myimage.jpg" alt="alt-text">
```

#### Input "&lt;input&gt;"
```javascript
html.createInput('text', attributes);
```
Output:
```html
<input type="text">
```

#### Label "&lt;label&gt;&lt;/label&gt;"
```javascript
html.createLabel('MyLabel', 'my-textfield', attributes);
```
Output:
```html
<label for="my-textfield">MyLabel</label>
```

#### Ordered/unordered list "&lt;ol&gt;&lt;/ol&gt;", "&lt;ul&gt;&lt;/ul&gt;"
```javascript
// Empty list
html.createOrderedList(null, attributes);

// List with items
html.createUnorderedList(
	[
		['text', attributes],
		['text 2', attributes]
	],
	attributes
);

// Alias function
html.createOl(...);
html.createUl(...);
```
Output:
```html
<ol></ol>
<ul>
	<li>text</li>
	<li>text 2</li>
</ul>
```

#### Option "&lt;option&gt;&lt;/option&gt;"
This function is to create options for a "&lt;select&gt;&lt;/select&gt;"-input if the options are not directly created in the "createSelect"-function.
```javascript
html.createOption('some-value', 'MyOption', attributes);
```
Output:
```html
<option value="some-value">MyOption</option>
```

#### Select "&lt;select&gt;&lt;/select&gt;"
The select element can be created directly with options or as empty select.
Options can be added later by creating options with "createOption" and appending them to the select.
```javascript
// Empty select
html.createSelect(null, attributes);

// Select with options
html.createSelect(
	[
		['some-value', 'MyOption', attributes],
		['some-other-value', 'MyOption 2', [['selected']]]
	],
	attributes
);
```
Output:
```html
<select></select>
<select>
	<option></option>
	<option selected=""></option>
</select>
```

#### Table "&lt;table&gt;&lt;/table&gt;"
```javascript
// Empty table
html.createTable(null, attributes);

// Table with parts
html.createTable(
    [
        ['thead', attributes],
        ['tbody', attributes]
    ],
    attributes
);

// Table with parts and rows
html.createTable(
    [
        [
            ['thead', attributes],
            [
                [null, attributes],
                [null, attributes]
            ]
        ],
        [
            ['tbody', attributes],
            [
                [null, attributes],
                [null, attributes]
            ]
        ]
    ],
    attributes
);

// Table with parts, rows and cells
html.createTable(
    [
        [
            ['thead', attributes],
            [
                [
                    [
                        ['text', attributes],
                        ['text 2', attributes]
                    ],
                    attributes
                ],
                [
                    [
                        ['text 3', attributes],
                        ['text 4', attributes]
                    ],
                    attributes
                ]
            ]
        ],
        [
            ['tbody', attributes],
            [
                [
                    [
                        ['text 5', attributes],
                        ['text 6', attributes]
                    ],
                    attributes
                ],
                [
                    [
                        ['text 7', attributes],
                        ['text 8', attributes]
                    ],
                    attributes
                ]
            ]
        ]
    ],
    attributes
);

```
Output:
```html
<table></table>
<table>
    <thead></thead>
    <tbody></tbody>
</table>
<table>
    <thead>
        <tr></tr>
        <tr></tr>
    </thead>
    <tbody>
        <tr></tr>
        <tr></tr>
    </tbody>
</table>
<table>
    <thead>
        <tr>
            <td>text</td>
            <td>text 2</td>
        </tr>
        <tr>
            <td>text 3</td>
            <td>text 4</td>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>text 5</td>
            <td>text 6</td>
        </tr>
        <tr>
            <td>text 7</td>
            <td>text 8</td>
        </tr>
    </tbody>
</table>
```

#### Table parts: body, head, foot "&lt;tbody&gt;&lt;/tbody&gt;", "&lt;tfoot&gt;&lt;/tfoot&gt;", "&lt;thead&gt;&lt;/thead&gt;"
```javascript
// Empty part
html.createTablePart('thead', null, attributes);

// Part with rows
html.createTablePart(
    'tbody',
    [
        [null, attributes],
        [null, attributes]
    ],
    attributes
);

// Part with rows and cells
html.createTablePart(
    'tbody',
    [
        [
            [
                ['text', attributes],
                ['text 2', attributes]
            ],
            attributes
        ],
        [
            [
                ['text 3', attributes],
                ['text 4', attributes]
            ],
            attributes
        ]
    ],
    attributes
);

// Alias functions (without parameter type)
html.createThead(null, attributes);
html.createTbody(...);
html.createTfoot(...);
```
Output:
```html
<thead></thead>
<tbody>
    <tr></tr>
    <tr></tr>
</tbody>
<tbody>
    <tr>
        <td>text</td>
        <td>text 2</td>
    </tr>
    <tr>
        <td>text 3</td>
        <td>text 4</td>
    </tr>
</tbody>
```

#### Table row "&lt;tr&gt;&lt;/tr&gt;"
```javascript
// Empty row
html.createTableRow(null, attributes);

// Row with cells
html.createTableRow(
    [
        ['text', attributes],
        ['text 2', attributes]
    ],
    attributes
);

// Alias function
html.createTd(...);
```
Output:
```html
<tr></tr>
<tr>
    <td>text</td>
    <td>text 2</td>
</tr>
```