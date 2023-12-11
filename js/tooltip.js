/** @format */

document.addEventListener("DOMContentLoaded", function () {
	var tooltips = document.querySelectorAll("p.tooltip-information");
	tooltips.forEach(function (tooltip) {
		var divWrapper = document.createElement("div");
		divWrapper.classList.add("popup-tooltip");
		divWrapper.classList.add("popup-tooltip-information");
		tooltip.parentNode.insertBefore(divWrapper, tooltip);
		divWrapper.appendChild(tooltip);
	});
});


document.addEventListener("DOMContentLoaded", function () {
	var tooltips = document.querySelectorAll("p.tooltip-question");
	tooltips.forEach(function (tooltip) {
		var divWrapper = document.createElement("div");
		divWrapper.classList.add("popup-tooltip");
		divWrapper.classList.add("popup-tooltip-question");
		tooltip.parentNode.insertBefore(divWrapper, tooltip);
		divWrapper.appendChild(tooltip);
	});
});