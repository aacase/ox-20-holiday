
Webcam.attach('#globeCamera');

function preview_snapshot() {
    // freeze camera so user can preview pic
    Webcam.freeze();
}

function take_another() {
    // cancel preview freeze and return to live camera feed
    Webcam.unfreeze();

    // swap buttons back
    document.getElementById('pre_take_buttons').style.display = '';
    document.getElementById('post_take_buttons').style.display = 'none';
}

function save_photo_for_merge() {
    // actually snap photo (from preview freeze) and display it
    Webcam.snap(function (data_uri) {
        // display results in page
        document.getElementById('results').innerHTML =
            '<img id="savedImage" src="' + data_uri + '"/>';

        // swap buttons back
        // document.getElementById('pre_take_buttons').style.display = '';
        // document.getElementById('post_take_buttons').style.display = 'none';
    });
}           