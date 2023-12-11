/** @format */

console.log("███████████████████████████████████████")

function generateUniqueId() {
	const timestamp = Date.now();
	const randomValue = Math.floor(Math.random() * 10000);
	const uniqueId = `${timestamp}-${randomValue}`;
	return uniqueId;
}

function createDOMElement(htmlString) {
	const container = document.createElement("div");
	container.innerHTML = htmlString;
	const element = container.firstElementChild;
	return element;
}

function generatePopupContainer (model_id, innerHTML){
    return createDOMElement(
        `
            <div class="popup-container">
                <!-- Button trigger modal -->
                <button type="button" class="btn btn-primary btn-popup-trigger" data-bs-toggle="modal" data-bs-target="#model-${model_id}">   +            </button>
                <div class="model-body-content-paragraph">                                                                                    ${innerHTML} </div>

                <!-- Modal -->
                <div class="modal fade" id="model-${model_id}" tabindex="-1" aria-labelledby="model-${model_id}" aria-hidden="true">
                <div class="modal-dialog">
                    <div class="modal-content">
                    <div class="modal-header">
                        <!-- <h1 class="modal-title fs-5" id="model-${model_id}-label">Modal title</h1> -->
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div class="modal-body">
                        ${innerHTML}
                    </div>
                    </div>
                </div>
                </div>
            </div>
        `
    )
}

var popout_elements = document.querySelectorAll(".popout-container");
popout_elements.forEach(function (element) {
    var uniqueId = generateUniqueId();
    console.log(uniqueId);
    var element_transformed = generatePopupContainer(uniqueId, element.innerHTML);
    element.replaceWith(element_transformed);
});