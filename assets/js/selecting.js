function isSSLothable(v) {
	var m = v.major;
	var n = v.nver;
	return (
		(m == 4 && n == 37) ||
		(m == 5 && n == 38) ||
		(m == 6 && n == 39) ||
		(m == 7 && n == 40) ||
		(m == 8 && n == 41) ||
		(m == 9 && n == 42) ||
		(m == 10 && n == 43) ||
		(m == 11 && n == 43) ||
		(m == 12 && n == 44) ||
		(m == 13 && n == 45)
	);
}

function getResultText(v) {
	if (v.major == 0) {
		return "This doesn't seem to be a valid system version version.";
	}
	if (v.region == "C") {
		return "You currently cannot hack your 3DS on this version using the main methods. If you want to hack your console, you have to use ntrboot.";
	}
	return undefined;
}

function getRedirect(v) {
	if (v.major < 11 || v.minor < 4) {
		return "installing-boot9strap-(soundhax)";
	}
	if (v.nver < 36 && v.minor < 16) {
		return "installing-boot9strap-(soundhax-sp)";
	}
	if (isSSLothable(v)) {
		return "installing-boot9strap-(ssloth-browser)";
	}
	if (v.region == "T") {
		return "seedminer(twn)";
	}
	return "seedminer";
}

function redirect() {
	var v = {
		major: document.getElementById("mySelect").value,
		minor: document.getElementById("mySelec").value,
		nver: document.getElementById("mySel").value,
		region: document.getElementById("mySe").value
	};
	var result = getResultText(v);
	if (result !== undefined) {
		document.getElementById("result").innerText = result;
	} else {
		window.location.href = getRedirect(v);
	}
}