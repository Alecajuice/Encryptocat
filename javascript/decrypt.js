//modulus = 95
function decrypty() {
    var key = document.getElementById("decryptkey").value;
    var text = document.getElementById("text").value;
    if (key == null || key == "") {
        alert("Please enter a valid key");
    } else {
	document.getElementById("f2text").innerHTML = "Decrypted Code:";
	var textASCII = ASCIIfy(text);
	var keyNum = numberify(key);
	for (var i = 0; i < textASCII.length; i++) {
	    for (var j = 0; j <= i%3; j++) {
		textASCII[i] = (((textASCII[i] - 32) - keyNum).mod(95) + 95);
		if (textASCII[i] == 127) {
		    textASCII[i] = 32;
		}
	    }
	}
	var output = charify(textASCII);
	document.getElementById("text").value = output;
    }
}

Number.prototype.mod = function(n) {
    return ((this%n)+n)%n;
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
