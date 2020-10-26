function baseURL() {
	let url = document.getElementsByName('url')[0].value;
	document.getElementById('baseURL').innerHTML = url;
}

function utm_campaign() {
	let campaignNumber = document.getElementsByName('campaignNumber')[0].value;
	let utm_campaign = '?utm_campaign=' + campaignNumber;
	document.getElementById('utm_campaign').innerHTML = utm_campaign;
}

function utm_source() {
	let source = document.getElementsByName('source')[0].value;
	let utm_source = '&utm_source=' + source;
	document.getElementById('utm_source').innerHTML = utm_source;
}

function utm_medium() {
	let medium = document.getElementsByName('medium')[0].value;
	let utm_medium = '&utm_medium=' + medium;
	document.getElementById('utm_medium').innerHTML = utm_medium;
}




// reset form
let reset = reset => { document.getElementById('form').reset(); }
// let resetURL = resetURL => { document.getElementById('baseURL').innerHTML = ' '; }



// reset form functions
let resetURL = resetURL => { document.getElementById('baseURL').innerHTML = ' '; }
let resetUtmCampaign = resetUtmCampaign => { document.getElementById('utm_campaign').innerHTML = ' '; }
let resetSourceCampaign = resetSourceCampaign => { document.getElementById('utm_source').innerHTML = ' '; }
let resetMediumCampaign = resetMediumCampaign => { document.getElementById('utm_medium').innerHTML = ' '; }


// fuction to reset all forms
function resetText() {
	reset();
	resetURL();
	resetUtmCampaign();
	resetSourceCampaign();
	resetMediumCampaign();
}



















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