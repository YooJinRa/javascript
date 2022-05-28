const clock = document.querySelector("h2#clock")

function getClock() {
    const date = new Date()
    const hours = String(date.getHours()).padStart(2, "0")
    const minutes = String(date.getMinutes()).padStart(2, "0")
    const seconds = String(date.getSeconds()).padStart(2, "0")

    clock.innerText = `${hours}:${minutes}:${seconds}`

    // 시간 글자수 보완 : .padStart()이용, String 함수이기 때문에 시간은 number라서 String으로 변환 시키기 위해 String()사용.
    //"1".padStart(2, "0") : 문자의 길이가 최대 2, 길이가 2가 아니라면 문자 앞에 0을 삽입
    //.padEnd(길이, 뒤에 삽입할 문자)
}
getClock() // 브라우저 처음 로드될때 함수 바로 실행
setInterval(getClock, 1000) //1s = 1000 주기로 함수 실행

