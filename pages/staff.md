---
layout: page
title: Team
nav_order: 8
permalink: /staff
description: Meet our awesome team members!
---

# Team

Meet our awesome team members!
{: .fs-6 .fw-300 }

| If you're interested in joining or want some more information, please shoot us an email @ `interintel@uw.edu` and/or hop into a meeting! Make sure to join our [Discord](https://discord.gg/DZuyeyVHVV){:target="_blank"} too - it's our primary source of communication. |

## President

{% assign president = site.staffers | where: 'role', 'President' %}
{% for staffer in president %}
{{ staffer }}
{% endfor %}

{% assign officers = site.staffers | where: 'role', 'Officer' %}
{% assign num_officers = officers | size %}
{% if num_officers != 0 %}

## Officers

{% for staffer in officers %}
{{ staffer }}
{% endfor %}

{% assign advisors = site.staffers | where: 'role', 'Advisor' %}

## Advisors

{% for staffer in advisors %}
{{ staffer }}
{% endfor %}
{% endif %}

{% assign member = site.staffers | where: 'role', 'Member' %}
{% assign num_member = member | size %}
{% if num_member != 0 %}

## Members

{% for staffer in member %}
{{ staffer }}
{% endfor %}
{% endif %}

## Alumni

{% assign alumni = site.staffers | where: 'role', 'Alumni' %}
{% for staffer in alumni %}
{{ staffer }}
{% endfor %}
