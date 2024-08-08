// scripts.js

document.addEventListener("DOMContentLoaded", function() {
    const form = document.querySelector("form");
    const imageInput = document.getElementById("machine-image");
    const imagePreview = document.getElementById("image-preview");

    form.addEventListener("submit", function(event) {
        event.preventDefault();
        
        // Obtener datos del formulario
        const machineId = document.getElementById("machine-id").value;
        const machineName = document.getElementById("machine-name").value;
        const machineLocation = document.getElementById("machine-location").value;
        const maintenanceDate = document.getElementById("maintenance-date").value;
        const maintenanceType = document.getElementById("maintenance-type").value;
        const maintenanceDescription = document.getElementById("maintenance-description").value;
        const additionalNotes = document.getElementById("additional-notes").value;
        const technicianName = document.getElementById("technician-name").value;
        const technicianSignature = document.getElementById("technician-signature").value;

        // Aquí puedes manejar el envío del formulario
        console.log("Formulario enviado");
        console.log({
            machineId,
            machineName,
            machineLocation,
            maintenanceDate,
            maintenanceType,
            maintenanceDescription,
            additionalNotes,
            technicianName,
            technicianSignature
        });

        alert("Reporte de mantenimiento enviado exitosamente");
        form.reset();
        imagePreview.innerHTML = '';
    });

    imageInput.addEventListener("change", function() {
        const file = imageInput.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = function(e) {
                imagePreview.innerHTML = `<img src="${e.target.result}" alt="Imagen de la Máquina">`;
            };
            reader.readAsDataURL(file);
        }
    });
});
