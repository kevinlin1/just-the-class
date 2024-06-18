---
layout: page
title: Staff
description: A listing of all the course staff members.
---

# Staff
## Instructor

{% assign instructors = site.staffers | where: 'role', 'Instructor' %}
{% for staffer in instructors %}
{{ staffer }}
{% endfor %}

{% assign teaching_assistants = site.staffers | where: 'role', 'Teaching Assistant' %}
{% assign num_teaching_assistants = teaching_assistants | size %}
{% if num_teaching_assistants != 0 %}
[comment]: ## Teaching Assistant

[comment]: <> {% for staffer in teaching_assistants %}
[comment]: <> {{ staffer }}
[comment]: <> {% endfor %}
[comment]: <> {% endif %}
