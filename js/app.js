


function baseURL() {
	let url = document.getElementsByName('url')[0].value;
	document.getElementById('baseURL').innerHTML = url;
}

function utm_campaign() {
	let campaignNumber = document.getElementsByName('campaignNumber')[0].value;

	var checkBox = document.getElementById("cloudRunnerLang");
	var text = document.getElementById("text");

	if (checkBox.checked === true) {
		var isCloudRunnerLangActive = "&";
	} else {
		var isCloudRunnerLangActive = "?";
	}

	let utm_campaign = isCloudRunnerLangActive + 'utm_campaign=' + campaignNumber;
	document.getElementById('utm_campaign').innerHTML = utm_campaign;
}


// reset form
let reset = reset => { document.getElementById('form').reset(); }
// let resetURL = resetURL => { document.getElementById('baseURL').innerHTML = ' '; }



// reset form functions
let resetURL = resetURL => { document.getElementById('baseURL').innerHTML = ' '; }
let resetUtmCampaign = resetUtmCampaign => { document.getElementById('utm_campaign').innerHTML = ' '; }


// fuction to reset all forms
function resetText() {
	reset();
	resetURL();
	resetUtmCampaign();
}





// function utm_campaign() {
// 	let campaignNumber = document.getElementsByName('campaignNumber')[0].value;

// 	var checkBox = document.getElementById("myCheck");
// 	var text = document.getElementById("text");

// 	if (checkBox.checked === true) {
// 		var isCloudRunnerLangActive = "&";
// 	} else {
// 		var isCloudRunnerLangActive = "?";
// 	}

// 	let utm_campaign = isCloudRunnerLangActive + 'utm_campaign=' + campaignNumber;
// 	document.getElementById('utm_campaign').innerHTML = utm_campaign;
// }













// function baseURL() {
// 	let url = document.getElementsByName('url')[0].value;
// 	document.getElementById('baseURL').innerHTML = url;
// }

// function utm_campaign() {
// 	let campaignNumber = document.getElementsByName('campaignNumber')[0].value;
// 	let utm_campaign = '/utm_campaign=' + campaignNumber;
// 	document.getElementById('utm_campaign').innerHTML = utm_campaign;
// }

// // reset form
// let reset = reset => { document.getElementById('form').reset(); }
// // let resetURL = resetURL => { document.getElementById('baseURL').innerHTML = ' '; }



// // reset form functions
// let resetURL = resetURL => { document.getElementById('baseURL').innerHTML = ' '; }
// let resetUtmCampaign = resetUtmCampaign => { document.getElementById('utm_campaign').innerHTML = ' '; }

// // fuction to reset all forms
// function resetText() {
// 	reset();
// 	resetURL();
// 	resetUtmCampaign();
// }