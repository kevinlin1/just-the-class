---
layout: page
title: Schedule
nav_order: 4
description: The weekly event schedule.
---

# Schedule

Schedule data are defined as YAML [data files](https://jekyllrb.com/docs/datafiles/) following the example format in `_data/schedule`.

Multiple schedules can be rendered on a page, each with their own events and hour range.

## Weekly Schedule

{% include schedule.html data=site.data.schedule.weekly interval=30 row_height=40 %}

## Office Hours Schedule

{% include schedule.html data=site.data.schedule.office-hours interval=30 row_height=40 %}
