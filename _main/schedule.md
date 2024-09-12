---
layout: page
title: Schedule
description: The weekly event schedule.
nav_order: 3
---

# I2 Schedule

<!-- | **!!!** I2 will not have weekly meetings on the Fridays 3/18 (finals week) and 3/25 (Spring break). The last Journal Club meeting is on Monday (3/14) from 5:00 PM to 7:00 PM at HUB 238, not the usual Sieg 332. | -->

Please join our discord for the most up to date information about our meetings!

<div class="btn-discord">
    <a href="https://discord.gg/D88jazKwj3" target="_blank">
        <div class="icon">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 127.14 96.36"><path fill="#fff" d="M107.7,8.07A105.15,105.15,0,0,0,81.47,0a72.06,72.06,0,0,0-3.36,6.83A97.68,97.68,0,0,0,49,6.83,72.37,72.37,0,0,0,45.64,0,105.89,105.89,0,0,0,19.39,8.09C2.79,32.65-1.71,56.6.54,80.21h0A105.73,105.73,0,0,0,32.71,96.36,77.7,77.7,0,0,0,39.6,85.25a68.42,68.42,0,0,1-10.85-5.18c.91-.66,1.8-1.34,2.66-2a75.57,75.57,0,0,0,64.32,0c.87.71,1.76,1.39,2.66,2a68.68,68.68,0,0,1-10.87,5.19,77,77,0,0,0,6.89,11.1A105.25,105.25,0,0,0,126.6,80.22h0C129.24,52.84,122.09,29.11,107.7,8.07ZM42.45,65.69C36.18,65.69,31,60,31,53s5-12.74,11.43-12.74S54,46,53.89,53,48.84,65.69,42.45,65.69Zm42.24,0C78.41,65.69,73.25,60,73.25,53s5-12.74,11.44-12.74S96.23,46,96.12,53,91.08,65.69,84.69,65.69Z"/></svg>
        </div>
        <span>Join the Discord</span>
    </a>
</div>

<br/>
<script src='https://cdn.jsdelivr.net/npm/fullcalendar@6.1.15/index.global.min.js'></script>
<script src="https://cdn.jsdelivr.net/npm/@fullcalendar/google-calendar@6.1.15/index.global.min.js"></script>
<script>
document.addEventListener('DOMContentLoaded', function() {
    var calendarEl = document.getElementById('calendar');
    var calendar = new FullCalendar.Calendar(calendarEl, {
        initialView: 'dayGridMonth',
        headerToolbar: {
            left: 'prev,next today',
            center: 'title',
            right: 'dayGridMonth,timeGridWeek,timeGridDay,listWeek'
        },
        googleCalendarApiKey: 'AIzaSyDtiM3TSDe-a7utsfODUZhBMcSiVf1iCj4',
        events: {
            googleCalendarId: 'fe3bc5fcf625903e24af9c0b19158ced9d96fc549ecc9253c44b9b4dfe6b517f@group.calendar.google.com'
        },
        eventColor: '#453ca8',
    });
    calendar.render();
});
</script>
<div id="calendar"></div>

<!-- - Journal Club: Tuesdays, 6:00 - 7:00 PM, Sieg 332
- Team Meetings: Fridays, 5:00 PM - 6:00 PM, Sieg 233
- Machine Subjectivity Group Meetings: Wednesdays, 5:00 PM - 6:00 PM, CSE2 (specific room on Discord) -->

<!-- {% for schedule in site.schedules %}
<h2>{{ schedule.quarter }}</h2>
{{ schedule }}
{% endfor %} -->
