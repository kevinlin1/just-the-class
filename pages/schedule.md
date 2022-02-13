---
layout: page
title: Schedule
description: The weekly event schedule.
nav_order: 11
---

# Weekly Schedule

**This is a dummy schedule. The real schedule will be updated here soon.**

{% for schedule in site.schedules %}
{{ schedule }}
{% endfor %}
