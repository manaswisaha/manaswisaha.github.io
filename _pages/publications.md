---
layout: page
permalink: /publications/ #https://scholar.google.com/citations?user=KWOTB3UAAAAJ&hl=en
title: publications
description: publications by categories in reversed chronological order.
nav: true
nav_order: 2
---

<!-- _pages/publications.md -->

<!-- Bibsearch Feature -->

{% include bib_search.liquid %}

<div class="publications-container">
  <div class="publications-sidebar">
    <div class="year-nav">
      <!-- Years will be populated by JavaScript -->
    </div>
  </div>
  <div class="publications-content">
    <div class="publications">
      {% bibliography %}
    </div>
  </div>
</div>

<style>
.publications-container {
  display: flex;
  position: relative;
  gap: 2rem;
  max-width: 1200px; /* Adjust this value as needed */
  margin: 0 auto; /* Center the container */
}

.publications-content {
  flex: 1;
  min-width: 0; /* Allow content to shrink below its preferred width */
}

.publications-sidebar {
  position: sticky;
  top: 100px; /* Adjust based on your header height */
  height: fit-content;
  width: 100px; /* Adjust as needed */
  padding: 1rem;
  order: -1; /* This ensures the sidebar appears first (on the left) */
  flex-shrink: 0; /* Prevent the sidebar from shrinking */
}

.year-nav {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

.year-link {
  cursor: pointer;
  padding: 0.25rem 0.5rem;
  border-radius: 4px;
  transition: all 0.2s ease;
}

.year-link:hover {
  background-color: var(--global-theme-color);
  color: white;
}

.year-link.active {
  background-color: var(--global-theme-color);
  color: white;
}
</style>

<script>
document.addEventListener('DOMContentLoaded', function() {
  // Get all publication entries
  const entries = document.querySelectorAll('.publications .row');
  const yearNav = document.querySelector('.year-nav');
  const years = new Set();
  const firstEntryOfYear = {}; // To keep track of the first entry for each year

  // Extract years and create year sections
  entries.forEach(entry => {
    const periodicalElement = entry.querySelector('.periodical');
    if (periodicalElement) {
      const text = periodicalElement.textContent;
      // Refined regex to find a four-digit number likely representing the year
      // Looks for a four-digit number preceded by a space or comma, at the end or followed by space
      const yearMatch = text.match(/[,\s](\d{4})(?:\s|$)/);

      let year = null;
      if (yearMatch && yearMatch[1]) {
        year = yearMatch[1];
      } else {
         // Fallback: try matching the last four digits in the string as a last resort
         const lastFourDigitsMatch = text.match(/\d{4}(?!\d)/);
         if (lastFourDigitsMatch) {
           year = lastFourDigitsMatch[0];
         }
      }

      if (year) {
        years.add(year);
        // Assign an ID to the entry for scrolling
        entry.id = `year-${year}`;

        // Store the first entry encountered for this year
        if (!firstEntryOfYear[year]) {
          firstEntryOfYear[year] = entry;
        }
      } else {
        console.warn('Could not extract a valid year from periodical text:', text);
      }
    } else {
      console.warn('Could not find .periodical element in a publication entry.');
    }
  });

  // Create year navigation
  Array.from(years).sort((a, b) => b - a).forEach(year => {
    const yearLink = document.createElement('div');
    yearLink.className = 'year-link';
    yearLink.textContent = year;
    yearLink.addEventListener('click', () => {
      // Scroll to the element with the corresponding year ID
      const targetElement = document.getElementById(`year-${year}`);
      if (targetElement) {
        targetElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    });
    yearNav.appendChild(yearLink);
  });

  // Handle scroll highlighting
  const yearLinks = document.querySelectorAll('.year-nav .year-link');

  const observerOptions = {
    root: null,
    rootMargin: '-100px 0px -50% 0px', // Adjust rootMargin to highlight when year is near the top
    threshold: 0 // Trigger when any part of the element is visible
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      // Find the year associated with this entry from our firstEntryOfYear mapping
      let entryYear = null;
      for (const year in firstEntryOfYear) {
          if (firstEntryOfYear[year] === entry.target) {
              entryYear = year;
              break;
          }
      }

      if (entryYear) {
         if (entry.isIntersecting) {
          // Deactivate all links
          yearLinks.forEach(link => link.classList.remove('active'));
          // Activate the link for the intersecting year by checking textContent
          for (let i = 0; i < yearLinks.length; i++) {
              if (yearLinks[i].textContent === entryYear) {
                  yearLinks[i].classList.add('active');
                  break; // Found the link, no need to continue the loop
              }
          }
        }
      }
    });
  }, observerOptions);

  // Observe only the first entry of each year
  Object.values(firstEntryOfYear).forEach(entry => {
      observer.observe(entry);
  });
});
</script>
