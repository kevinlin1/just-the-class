---
layout: page
title: Staff
nav_order: 4
description: A listing of all the course staff members.
---

# Staff

Staff information is stored in the `_staffers` directory and rendered according to the layout file, `_layouts/staffer.html`.

## Instructors

{% assign instructors = site.staffers | where: 'role', 'Instructor' %}
{% for staffer in instructors %}
{{ staffer }}
{% endfor %}

## Teaching Assistants

{% assign teaching_assistants = site.staffers | where: 'role', 'Teaching Assistant' %}
{% for staffer in teaching_assistants %}
{{ staffer }}
{% endfor %}
