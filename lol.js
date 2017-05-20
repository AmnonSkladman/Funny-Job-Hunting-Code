var job = false;

function jobHunt () {
    console.log("Check career sites");
    console.log("Check job postings");
    console.log("Apply to job postings");
    console.log("Waiting...");
};

var jobHunting = setInterval(function() {
    jobHunt();
    if (job == true) {
        console.log("Oh hey, you have a job now!");
        clearInterval(jobHunting);
    } else {
        console.log("Gotta keep at it!");
    };
}, 1000);