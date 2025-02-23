// Toggle function by selecting the caret for more details of Experiences and Projects
$('.toggle-icon').click(function () {
    const $sectionTitle = $(this).closest('.section-title');
    let $sectionDesc;

    // Check if there is a <p> tag present (Experiences)
    if ($sectionTitle.next('p').length > 0) {
        // If <p> exists, find the section description after <p>
        $sectionDesc = $sectionTitle.next('p').next('.section-desc');
    } else {
        // If no <p> exists, directly find the section description (Projects)
        $sectionDesc = $sectionTitle.next('.section-desc');
    }

    // Toggle the visibility of the section description
    $sectionDesc.slideToggle();

    // Toggle the 'active' class on the clicked job title
    $sectionTitle.toggleClass('active');

    // Check if the job title has the 'active' class and update the icon accordingly
    if ($sectionTitle.hasClass('active')) {
        $(this).text('▼');  // When expanded, arrow points down
    } else {
        $(this).text('▲');  // When collapsed, arrow points up
    }
});

// Last updated div with date (manually)

document.getElementById('last-updated-date').textContent = "2025-02-22"