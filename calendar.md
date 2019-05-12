---
layout: page
title: Course Calendar
nav_order: 2
description: An embedded Google Calendar displaying the weekly event schedule.
---

# Course Calendar

{% for module in site.modules %}
{{ module }}
{% endfor %}

---

Course materials are defined in the `_modules` directory. Each module is rendered here according to their filename.

Modules are rendered according to the layout file defined in `_layouts/module.html`. Edit the HTML to modify the layout.

## Table Calendar

We can also render modules as HTML tables. Modify `_includes/module_table.html` to make changes.

{% for module in site.modules %}
{% include module_table.html module=module %}
{% endfor %}
