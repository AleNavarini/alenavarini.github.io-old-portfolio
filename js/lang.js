'use strict'

$(document).ready(function () {

    $("input[name=lang]").on("change", LoadPage);
    LoadPage();
});

function LoadPage() {
    let lang = $("input[name=lang]:checked")[0].value;
    console.log(lang);
    $.getJSON("js/lang.json", function (langArray) {
        let langObject = null;
        langArray.forEach(element => {
            if (element.lang == lang) {
                langObject = element.content;
            }
        });
        console.log(langObject);

        $('#title-role').html(langObject.title_role);
        $('#profile').html(langObject.profile);
        $('#profile-info').html(langObject.profile_info);
        $('#experience').html(langObject.experience);
        $('#job-1-title').html(langObject.job_1_title);
        $('#job-1-date').html(langObject.job_1_date);
        $('#job-1-desc').html(langObject.job_1_desc);
        $('#job-2-title').html(langObject.job_2_title);
        $('#job-2-date').html(langObject.job_2_date);
        $('#job-2-desc').html(langObject.job_2_desc);
        $('#job-3-title').html(langObject.job_3_title);
        $('#job-3-date').html(langObject.job_3_date);
        $('#job-3-desc').html(langObject.job_3_desc);
        $('#education').html(langObject.education);
        $('#educ-1-title').html(langObject.educ_1_title);
        $('#educ-1-date').html(langObject.educ_1_date);
        $('#educ-1-desc').html(langObject.educ_1_desc);
        $('#educ-2-title').html(langObject.educ_2_title);
        $('#educ-2-date').html(langObject.educ_2_date);
        $('#educ-2-desc').html(langObject.educ_2_title);
        $('#contact-info').html(langObject.contact_info);
        $('#address').html(langObject.address);
        $('#phone').html(langObject.phone);
        $('#email').html(langObject.email);
        $('#languages').html(langObject.languages);
        $('#spanish').html(langObject.spanish);
        $('#english').html(langObject.english);
        $('#portuguese').html(langObject.portuguese);
        $('#german').html(langObject.german);
        $('#tech').html(langObject.tech);
    });
}

