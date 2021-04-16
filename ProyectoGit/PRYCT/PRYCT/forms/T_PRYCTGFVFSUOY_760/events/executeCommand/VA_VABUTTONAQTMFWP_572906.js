

//Entity: EntidadCATA
//EntidadCATA. (Button) View: EstudianteFormCATA
//Evento ExecuteCommand: Permite personalizar la acción a ejecutar de un command o de un ActionControl.
task.executeCommand.VA_VABUTTONAQTMFWP_572906 = function(  entities, executeCommandEventArgs ) {

    executeCommandEventArgs.commons.execServer = true;
    //executeCommandEventArgs.commons.serverParameters.EntidadCATA = true;
    
    console.log("Nombre: " + entities.EntidadCATA.nombre)
    console.log("Apellido: " + entities.EntidadCATA.apellido)

};