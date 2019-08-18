---
layout: page
title: Course Calendar
nav_order: 2
description: An embedded Google Calendar displaying the weekly event schedule.
---

# Course Calendar

Course materials are defined in the `_modules` directory. Each module is rendered here according to their filename.

Modules are rendered according to the layout file defined in `_layouts/module.html`. Edit the HTML to modify the layout.

## Modules

{% for module in site.modules %}
{{ module }}
{% endfor %}
