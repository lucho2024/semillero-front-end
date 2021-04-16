

//Entity: EntidadPGG
//EntidadPGG. (Button) View: FormularioPGG
//Evento ExecuteCommand: Permite personalizar la acción a ejecutar de un command o de un ActionControl.
task.executeCommand.VA_VABUTTONQCZCFQT_450871 = function(  entities, executeCommandEventArgs ) {

    executeCommandEventArgs.commons.execServer = true;
    //executeCommandEventArgs.commons.serverParameters.EntidadPGG = true;
    alert(entities.EntidadPGG.nombre);
    alert(entities.EntidadPGG.apellido);

};