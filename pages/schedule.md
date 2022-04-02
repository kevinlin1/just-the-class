---
layout: page
title: Schedule
description: The weekly event schedule.
nav_order: 11
---

# Weekly Schedule

<!-- | **!!!** I2 will not have weekly meetings on the Fridays 3/18 (finals week) and 3/25 (Spring break). The last Journal Club meeting is on Monday (3/14) from 5:00 PM to 7:00 PM at HUB 238, not the usual Sieg 332. | -->

{% for schedule in site.schedules %}
<h2>{{ schedule.quarter }}</h2>
{{ schedule }}
{% endfor %}
