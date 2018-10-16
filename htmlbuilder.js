/**
 * Constructor
 *
 * @param {object} parent - At the moment not in use (registered for later use)
 */
function HTMLBuilder(parent) {
    if (parent) {
        this.parent = parent;
    }
}

/**
 * Main function to create html elements
 *
 * @param {string} type - Element type
 * @param {string} content - Content between the html opening and closing tag
 * @param {string} attriubutes - Attribute array [[attribute, content], ...]
 *
 * @returns {object} - Created element
 */
HTMLBuilder.prototype.create = function(type, content, attributes) {
    var element = document.createElement(type);

    var key;
    for (key in attributes) {
        if (attributes[key][0]) {
            element.setAttribute(
                attributes[key][0],
                attributes[key][1] ? attributes[key][1] : ''
            );
        }
    }

    if (content) {
        element.innerHTML = content;
    }

    return element;
};

/**
 * Create anchor <a></a>
 *
 * @param {string} href - Target URL
 * @param {string} content - Content between the html opening and closing tag
 * @param {string} attriubutes - Attribute array [[attribute, content], ...]
 *
 * @returns {object} - Created element
 */
HTMLBuilder.prototype.createAnchor = function(href, content, attributes) {
    if (!attributes) {
        attributes = [];
    }

    // Add href at the beginning of the attributes array
    attributes.unshift(['href', href]);

    var element = this.create('a', content, attributes);

    return element;
};

/**
 * Create button <button></button>
 *
 * @param {string} content - Buttontext
 * @param {string} attriubutes - Attribute array [[attribute, content], ...]
 *
 * @returns {object} - Created element
 */
HTMLBuilder.prototype.createButton = function(content, attributes) {
    var element = this.create('button', content, attributes);

    return element;
};

/**
 * Create div <div></div>
 *
 * @param {string} content - Content between the html opening and closing tag
 * @param {string} attriubutes - Attribute array [[attribute, content], ...]
 *
 * @returns {object} - Created element
 */
HTMLBuilder.prototype.createDiv = function(content, attributes) {
    var element = this.create('div', content, attributes);

    return element;
};

/**
 * Create headline <h1></h1> - <h6></h6>
 *
 * @param {string} type - Headline type (h1 - h6)
 * @param {string} content - Content between the html opening and closing tag
 * @param {string} attriubutes - Attribute array [[attribute, content], ...]
 *
 * @returns {object} - Created element
 */
HTMLBuilder.prototype.createHeadline = function(type, content, attributes) {
    var element;

    switch (type) {
        default:
        case '1':
        case 'h1':
            element = this.create('h1', content, attributes);

            break;
        case '2':
        case 'h2':
            element = this.create('h2', content, attributes);

            break;
        case '3':
        case 'h3':
            element = this.create('h3', content, attributes);

            break;
        case '4':
        case 'h4':
            element = this.create('h4', content, attributes);

            break;
        case '5':
        case 'h5':
            element = this.create('h5', content, attributes);

            break;
        case '6':
        case 'h6':
            element = this.create('h6', content, attributes);

            break;
    }

    return element;
};

/**
 * Create italic <i></i>
 *
 * @param {string} content - Content between the html opening and closing tag
 * @param {string} attriubutes - Attribute array [[attribute, content], ...]
 *
 * @returns {object} - Created element
 */
HTMLBuilder.prototype.createI = function(content, attributes) {
    var element = this.create('i', content, attributes);

    return element;
};

/**
 * Create image <img>
 *
 * @param {string} source - Image source URL
 * @param {string} alt - Alternative text if image cannot be shown
 * @param {string} attriubutes - Attribute array [[attribute, content], ...]
 *
 * @returns {object} - Created element
 */
HTMLBuilder.prototype.createImage = function(source, alt, attributes) {
    if (!attributes) {
        attributes = [];
    }

    // Add src and alt as first and second position in the attributes array
    attributes.unshift(['alt', alt]);
    attributes.unshift(['src', source]);

    var element = this.create('img', null, attributes);

    return element;
};

/**
 * Create input <input>
 *
 * @param {string} type - Input type (button, checkbox, password, radio, submit, text...)
 * @param {string} attriubutes - Attribute array [[attribute, content], ...]
 *
 * @returns {object} - Created element
 */
HTMLBuilder.prototype.createInput = function(type, attributes) {
    // Check if a type is set (So it has not to be given in the attributes anymore)
    if (type) {
        if (!attributes) {
            attributes = [];
        }

        // Add type at the beginning of the attributes array
        attributes.unshift(['type', type]);
    }

    var element = this.create('input', null, attributes);

    return element;
};

/**
 * Create label <label></label>
 *
 * @param {string} content - Content between the html opening and closing tag
 * @param {string} forAttr - "for" attribute for the label
 * @param {string} attriubutes - Attribute array [[attribute, content], ...]
 *
 * @returns {object} - Created element
 */
HTMLBuilder.prototype.createLabel = function(content, forAttr, attributes) {
    // Add "for" at the beginning of the attributes array if given
    if (forAttr) {
        if (!attributes) {
            attributes = [];
        }

        attributes.unshift(['for', forAttr]);
    }

    var element = this.create('label', content, attributes);

    return element;
};

/**
 * Create option for a select <option></option>
 *
 * @param {string} value - Option value
 * @param {string} content - Option text
 * @param {string} attriubutes - Attribute array [[attribute, content], ...]
 *
 * @returns {object} - Created element
 */
HTMLBuilder.prototype.createOption = function(value, content, attributes) {
    // Check if a value is set (So it has not to be given in the attributes anymore)
    if (value) {
        if (!attributes) {
            attributes = [];
        }

        // Add type at the beginning of the attributes array
        attributes.unshift(['value', value]);
    }

    var element = this.create('option', content, attributes);

    return element;
};

/**
 * Create paragraph <p></p>
 *
 * @param {string} content - Content between the html opening and closing tag
 * @param {string} attriubutes - Attribute array [[attribute, content], ...]
 *
 * @returns {object} - Created element
 */
HTMLBuilder.prototype.createParagraph = function(content, attributes) {
    var element = this.create('p', content, attributes);

    return element;
};

/**
 * Create select <select></select>
 *
 * @param {string} options - Select options [[value, text], ...]
 * @param {string} attriubutes - Attribute array [[attribute, content], ...]
 *
 * @returns {object} - Created element
 */
HTMLBuilder.prototype.createSelect = function(options, attributes) {
    var element = this.create('select', null, attributes);

    // Check if at least one option is set
    if (options) {
        // Add options
        var key;
        for (key in options) {
            var option = this.createOption(options[key][0], options[key][1], options[key][2]);

            element.appendChild(option);
        }
    }

    return element;
};
