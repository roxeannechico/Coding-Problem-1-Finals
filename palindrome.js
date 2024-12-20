function openProg() {
    let racecar = prompt("ENTER RACECAR");
    let recorder = prompt("ENTER RECORDER");

    alert("Original string: " + racecar)
    alert("Original string: " + recorder)

    const reverse = (racecar) => racecar.split("").reverse().join("");
    const reverseString = (recorder) => recorder.split("").reverse().join("");

    alert("Reversed String: " + (reverse(racecar)));
    alert("Reversed String: " + (reverseString(recorder)))};