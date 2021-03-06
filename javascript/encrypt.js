//modulus = 95
function encrypt() {
    var key = document.getElementById("cuskey").value;
    var text = document.getElementById("text").value;
    if (key == null || key == "") {
	key = randomString();
    }
    document.getElementById("f1text").innerHTML = "Decryption Key:";
    document.getElementById("f2text").innerHTML = "Encrypted Code:";
    document.getElementById("cuskey").value = key;
    var textASCII = ASCIIfy(text);
    var keyNum = numberify(key);
    for (var i = 0; i < textASCII.length; i++) {
	for (var j = 0; j <= i%3; j++) {
	    textASCII[i] = (((+textASCII[i] + +keyNum)+32)%95);
	}    
    }
    var output = charify(textASCII);
    document.getElementById("text").value = output;
}

function randomString() {
    var str = "";
    for (var i = 0; i < 10; i++) {
	str += String.fromCharCode(Math.floor(Math.random() * 75) + 48);
    }
    return str;
}

function ASCIIfy(str) {
    var ascii = new Array();
    for (var i = 0; i < str.length; i++) {
	ascii[i] = str.charAt(i).charCodeAt(0);
    }
    return ascii;
}

function numberify(str) {
    var num = "";
    for (var i = 0; i < str.length; i++) {
	num += (str.charCodeAt(i)%10);
    }
    return num;
}

function charify(ASCIIArray) {
    var str = "";
    for (var i = 0; i < ASCIIArray.length; i++) {
	str += String.fromCharCode(ASCIIArray[i]);
    }
    return str;
}