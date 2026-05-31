---
layout: page
permalink: /schedule/
title: Schedule
description:
nav: true
nav_order: 3
---

<script>
  document.addEventListener('DOMContentLoaded', () => {
    // Find all table cells that have a rowspan attribute
    const rowspanCells = document.querySelectorAll('table.timetable td[rowspan]');

    rowspanCells.forEach(cell => {
      // Get the number of rows this cell spans
      const spanCount = parseInt(cell.getAttribute('rowspan'), 10);

      // Only apply this to cells that actually span multiple rows
      if (spanCount > 1) {
        
        // When the mouse enters the cell
        cell.addEventListener('mouseenter', function() {
          let currentRow = this.parentElement;
          // Loop through the current row and the next sibling rows
          for (let i = 0; i < spanCount; i++) {
            if (currentRow) {
              currentRow.classList.add('highlighted-span');
              currentRow = currentRow.nextElementSibling;
            }
          }
        });

        // When the mouse leaves the cell
        cell.addEventListener('mouseleave', function() {
          let currentRow = this.parentElement;
          // Loop through and remove the class
          for (let i = 0; i < spanCount; i++) {
            if (currentRow) {
              currentRow.classList.remove('highlighted-span');
              currentRow = currentRow.nextElementSibling;
            }
          }
        });
      }
    });
  });
</script>

The conference's overall schedule is as follows:

<table class="timetable">
<thead>
    <tr>
        <th>Time</th>
        <th>Sunday June 6</th>
        <th>Monday June 7</th>
        <th>Tuesday June 8</th>
        <th>Wednesday June 9</th>
        <th>Thursday June 10</th>
    </tr>
</thead>
<tbody>
    <tr style="height: 2rem;">
      <td>07:00 - 08:45</td>
      <td></td>
      <td class="bg-food no-bottom-border" colspan="4">Breakfast</td>
    </tr>
    <tr style="height: 0.7rem;">
      <td>08:45 - 09:00</td>
      <td></td>
      <td class="bg-session">Opening</td>
      <td class="bg-food no-top-border" colspan="3">&nbsp;</td>
    </tr>
    <tr style="height: 2.7rem;">
      <td>09:00 - 10:00</td>
      <td></td>
      <td class="bg-session" colspan="4">Plenary Session</td>
    </tr>
    <tr style="height: 1.3rem;">
      <td>10:00 - 10:30</td>
      <td></td>
      <td class="bg-break" colspan="4">Coffee Break</td>
    </tr>
    <tr style="height: 5.3rem;">
      <td>10:30 - 12:30</td>
      <td></td>
      <td class="bg-session" colspan="4">Orals (4)</td>
    </tr>
    <tr style="height: 4rem;">
      <td>12:30 - 14:00</td>
      <td></td>
      <td class="bg-food" colspan="4">Lunch</td>
    </tr>
    <tr style="height: 4rem;">
      <td>14:00 - 15:30</td>
      <td></td>
      <td class="bg-session" colspan="2">Orals (3)</td>
      <td class="bg-alt" rowspan="5">Excursion</td>
    </tr>
    <tr style="height: 1.3rem;">
      <td>15:30 - 16:00</td>
      <td class="bg-alt" rowspan="4">Registration</td>
      <td class="bg-break" colspan="2">Coffee Break</td>
    </tr>
    <tr style="height: 1.3rem;">
      <td>16:00 - 16:30</td>
      <td class="bg-session" colspan="2">Orals (1)</td>
    </tr>
    <tr style="height: 4rem;">
      <td>16:30 - 18:00</td>
      <td class="bg-session" colspan="2">Poster Session</td>
    </tr>
    <tr style="height: 2.7rem;">
      <td>18:00 - 19:00</td>
      <td class="bg-break" colspan="2">Break</td>
    </tr>
    <tr style="height: 5.3rem;">
      <td>19:00 - 21:00</td>
      <td class="bg-food" colspan="3">Dinner</td>
      <td class="bg-food">Conference Dinner</td>
    </tr>
    <tr>
      <td>21:00 - 23:00</td>
      <td class="bg-alt">Drinks</td>
      <td class="bg-alt">SSVM Board Meeting</td>
    </tr>
</tbody>
</table>

A more detailed schedule of which talks are given when will be published later.
