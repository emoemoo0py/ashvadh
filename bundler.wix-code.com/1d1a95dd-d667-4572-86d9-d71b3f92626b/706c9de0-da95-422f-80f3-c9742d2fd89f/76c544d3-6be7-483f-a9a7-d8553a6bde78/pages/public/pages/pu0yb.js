// Velo API Reference: https://www.wix.com/velo/reference/api-overview/introduction

$w.onReady(function() {

    $w('#button12').onClick(() => {
        $w('#statebox8').changeState("Yearly");
    });

    $w('#button13').onClick(() => {
        $w('#statebox8').changeState("Monthly");
    });

});