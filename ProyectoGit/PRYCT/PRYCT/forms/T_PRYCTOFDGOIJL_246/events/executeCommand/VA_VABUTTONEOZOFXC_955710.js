

//Entity: EntidadCSSS
//EntidadCSSS. (Button) View: EstudianteCSSSForm
//Evento ExecuteCommand: Permite personalizar la acción a ejecutar de un command o de un ActionControl.
task.executeCommand.VA_VABUTTONEOZOFXC_955710 = function(  entities, executeCommandEventArgs ) {

    executeCommandEventArgs.commons.execServer = true;
    entities.EntidadCSSS.resultadoCliente = "Saludando desde el cliente a " + entities.EntidadCSSS.nombre + " " + entities.EntidadCSSS.apellido; 
    //executeCommandEventArgs.commons.serverParameters.EntidadCSSS = true;

};