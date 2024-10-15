
// var qrcode = new QRCode(document.querySelector(".qrcode"), {
// 	text: document.getElementById("text"),
// 	width: 250,
// 	height: 250,
// 	colorDark : "#000000",
// 	colorLight : "#ffffff",
// });


let input = document.getElementById("text");

    var qrcode = new QRCode(document.querySelector(".qrcode"), {
        text: input.value,
        width: 250,
        height: 250,
        colorDark : "#000000",
        colorLight : "#ffffff",
        
    });
//    qrcode.makeCode(e.target.value); 



input.addEventListener("input", function (e) {
    qrcode.clear();  // Clear the existing QR code
    qrcode.makeCode(e.target.value);  // Generate a new QR code with the updated input
});

document.querySelector(".download").addEventListener("click", function () {
    let imgURL = document.querySelector(".qrcode img").getAttribute("src");


    const link = document.createElement("a");
    link.href = imgURL;
    link.download = "qrcode";
    link.click();
});