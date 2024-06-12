
function myfunc() {
    setTimeout(tigerLitters, 5000);
    function tigerLitters() {
        let audios = document.querySelector(".audios")
        audios.innerHTML = `
    <audio controls autoplay id="litters">
        <source src="/tiger/audio tiger/tiger litters.mp3" type="audio/mpeg">
        <source src="/tiger/audio tiger/tiger litters.ogg" type="audio/ogg">
        <source src="/tiger/audio tiger/tiger litters.wav" type="audio/wav">
        your browser does not support the audio elements.
    </audio>
`
    }
}
document.querySelector("body").onload = myfunc()