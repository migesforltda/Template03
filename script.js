// scripts.js

document.addEventListener("DOMContentLoaded", function() {
    const form = document.querySelector(".container");

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
        // Por ejemplo, podrías enviar los datos a un servidor o guardarlos localmente
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

        // Mostrar una alerta o mensaje de confirmación
        alert("Reporte de mantenimiento enviado exitosamente");
        
        // Opcional: Limpiar el formulario después de enviarlo
        form.reset();
    });
});
