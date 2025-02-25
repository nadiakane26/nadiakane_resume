// Toggle function by selecting the caret for more details of Experiences and Projects
$('.toggle-icon').click(function () {
    const $sectionTitle = $(this).closest('.section-title');
    const $sectionDesc = $sectionTitle.next('p').next('.section-desc').length ? 
                         $sectionTitle.next('p').next('.section-desc') : 
                         $sectionTitle.next('.section-desc');

    $sectionDesc.slideToggle();
    $sectionTitle.toggleClass('active');
    $(this).text($sectionTitle.hasClass('active') ? '▼' : '▲');
});

function toggleSidebar() {
    e.preventDefault(); 
    const sidebar = document.getElementById("sidebar");
    sidebar.classList.toggle("-translate-x-full");
}