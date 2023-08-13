# I2 Website

Thanks to Kevin Lin, creator of Just the Class, the template upon which this website is based.

## How to Use/Update

### Basic page

Pages can be created under the pages folder, and each one has a header at the top.

```
---
layout: page <-- How to organize the page. Page is default, more can be found at [JustTheDocs](https://just-the-docs.com/)
title: About <-- The name of the page
permalink: /about <-- IMPORTANT: How you want the user to access the page on the website, regardless of where it is in this repo.
nav_order: 2 <-- Order in the title bar dropdown. Relative not absolute.
description: I2's purpose, mission, and goals. <-- Description of the page.
---
```

Headings (markdown format) canbe used to specify page sections. There are also `{tags} `that can be added to format the page. Below is an example.

```
# About <-- creates a heading
{:.no_toc} <-- Makes this tag NOT appear in the table of contents

## Table of contents
{: .no_toc .text-delta } <-- Makes this tag NOT appear in the table of contents AND formats it to look fancy

1. TOC <-- Syntax for table of content creation
{:toc} <-- Syntax for table of content creation
```
Here is a list of strings you can place in tags (curly braces) to add properties (text style,weight, clickable, etc.) to elements [UI Components](https://just-the-docs.com/docs/ui-components)

The markdown syntax for links will force open links in the same window, wiping the page out. If you want external links to work properly, create them as such:

```
[projects](https://interactive-intelligence.github.io/projects){:target="_blank"}
```

Note the special tag: `{:target="_blank"}`. This is what opens in a new window.

### Page with children:

Example of a page that has children.
```
---
layout: default
title: Projects
nav_order: 4
has_children: true
permalink: /projects
---
```

Example of child page.

```
---
layout: default
title: Emergent Language
parent: Projects
nav_order: 10
has_children: true
permalink: /projects/emergent-lang
---
```

Example of a grandchild page.

```
---
layout: default
title: Experiments
parent: Emergent Language
grand_parent: Projects
nav_order: 3
permalink: /projects/emergent-lang/exp
---
```

They will naturally be nested in the menu dropdown!

You can only have grandchildren pages. No great-grandchildren!

### Specifying Data

In `assets/images` you can upload photos, and then put them in the top tag/metadata tag of pages. These can then be rendered with some basic logic.

### Complex pages

An example of how to create complex cards on pages with images can be seen in `_staffers`, `_staff.md`, and `_layouts/staffer.html`.

### Calendar Page

`schedule.md`,`_schedules` holds information to create calendars. Make sure these are up to date!

### Style

`_sass/color_schemes/custom.scss` holds colors for the whole website.

`|pipe bars|` create tables

### Configurations File

`_config.yaml` Holds auxilary links, meta-level information about the site (where to route, put images), and more high-level items liek the footer content.