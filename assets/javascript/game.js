var computerNumber;
var red;
var blue;
var green;
var yellow;
var totalScore = 0;
var wins = 0;
var losses = 0;

$(document).ready(function() {

    computerNumber = Math.floor((Math.random() * 100) + 19);
    $('#randomNumber').append(computerNumber);

    buttonValue();

    $('#red').on('click', function() {
        totalScore += red;
        if (totalScore === computerNumber) {
            wins++;
            $('#wins').append('wins : ' + wins);
        } else if (totalScore > computerNumber) {
            losses++;
            $('#losses').append('losses : ' + losses);
        }
        $('#totalScore').append(totalScore+'\n');

    });

    $('#blue').on('click', function() {
        totalScore += blue;
        if (totalScore === computerNumber) {
            wins++;
            $('#wins').append('wins : ' + wins);
        } else if (totalScore > computerNumber) {
            losses++;
            $('#losses').append('losses : ' + losses);
        }
        $('#totalScore').append(totalScore+'\n');

    });

    $('#green').on('click', function() {
        totalScore += green;
        if (totalScore === computerNumber) {
            wins++;
            $('#wins').append('wins : ' + wins);
        } else if (totalScore > computerNumber) {
            losses++;
            $('#losses').append('losses : ' + losses);
        }
        $('#totalScore').append(totalScore+'\n');

    });

    $('#yellow').on('click', function() {
        totalScore += yellow;
        if (totalScore === computerNumber) {
            wins++;
            $('#wins').append('wins : ' + wins);
        } else if (totalScore > computerNumber) {
            losses++;
            $('#losses').append('losses : ' + losses);
        }
        $('#totalScore').append(totalScore+'\n');

    });

});

function buttonValue() {
    red = Math.floor((Math.random() * 12) + 1);
    $('#red').append(red);
    blue = Math.floor((Math.random() * 12) + 1);
    $('#blue').append(blue);
    green = Math.floor((Math.random() * 12) + 1);
    $('#green').append(green);
    yellow = Math.floor((Math.random() * 12) + 1);
    $('#yellow').append(yellow);
}
