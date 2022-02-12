---
layout: page
title: Team
description: Meet our awesome team members!
---

# Team

## Leadership

{% assign instructors = site.staffers | where: 'role', 'Leadership' %}
{% for staffer in instructors %}
{{ staffer }}
{% endfor %}

{% assign teaching_assistants = site.staffers | where: 'role', 'Member' %}
{% assign num_teaching_assistants = teaching_assistants | size %}
{% if num_teaching_assistants != 0 %}

## Members

{% for staffer in teaching_assistants %}
{{ staffer }}
{% endfor %}
{% endif %}
