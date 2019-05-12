---
layout: page
title: Google Calendar
nav_order: 5
description: An embedded Google Calendar displaying the weekly event schedule.
---

# Google Calendar

**Warning**: This page is not optimized for performance. Use the `schedule` include instead for faster page loads. See the [Schedule]({{ site.baseurl }}/schedule) page for more information.

<div id="fullcalendar"></div>

<link rel="stylesheet" property="stylesheet" href="https://unpkg.com/@fullcalendar/core/main.css">
<link rel="stylesheet" property="stylesheet" href="https://unpkg.com/@fullcalendar/timegrid/main.css">
<script src="https://unpkg.com/@fullcalendar/core/main.min.js"></script>
<script src="https://unpkg.com/@fullcalendar/daygrid/main.min.js"></script>
<script src="https://unpkg.com/@fullcalendar/timegrid/main.min.js"></script>
<script src="https://unpkg.com/@fullcalendar/google-calendar/main.min.js"></script>

<style>
.fc table {
  margin-bottom: 0;
}
</style>
<script>
document.addEventListener('DOMContentLoaded', function() {
  new FullCalendar.Calendar(document.getElementById('fullcalendar'), {
    plugins: ['dayGrid', 'timeGrid', 'googleCalendar'],
    header: {
      left: 'title',
      right: 'today prev,next',
    },
    nowIndicator: true,
    height: 'auto',
    minTime: '09:00:00',
    maxTime: '21:00:00',
    allDaySlot: false,
    slotEventOverlap: false,
    defaultView: 'timeGridWeek',
    // THIS KEY WON'T WORK IN PRODUCTION!!!
    // To make your own Google API key, follow the directions here:
    // http://fullcalendar.io/docs/google_calendar/
    googleCalendarApiKey: 'AIzaSyDcnW6WejpTOCffshGDDb4neIrXVUA1EAE',
    // US Holidays
    eventSources: [
      {
        googleCalendarId: 'en.usa#holiday@group.v.calendar.google.com',
        className: 'holiday',
      },
    ],
  }).render();
});
</script>
