const SEMANA = ["DOM", "SEG", "TER", "QUA", "QUI", "SEX", "SAB"]

function upDateTime() {

    var now = new Date()

    document.getElementById("hora-atual").innerText =
        formatarZeros(now.getHours(), 2) + ":" +
        formatarZeros(now.getMinutes(), 2) + ":" +
        formatarZeros(now.getSeconds(), 2)

    // document.getElementById("date").innerText =
    //     now.getFullYear() + "-" +
    //     formatarZeros(now.getMonth() + 1, 2) + "-" +
    //     formatarZeros(now.getDate(), 2) + "-" +
    //     SEMANA[now.getDay()]

    document.getElementById("data-atual").innerText =

            SEMANA[now.getDay()] + "-" + formatarZeros(now.getDate(), 2) + "-" +
            formatarZeros(now.getMonth() +1 , 2) + "-" + now.getFullYear()




}

upDateTime()
setInterval(upDateTime, 1000)

function formatarZeros(num, digit) {
    return String(num).padStart(digit, '0')

}

