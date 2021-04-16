//Entity: EstudianteJCAM
//EstudianteJCAM. (Button) View: EstudianteFormJCAM
//Evento ExecuteCommand: Permite personalizar la acción a ejecutar de un command o de un ActionControl.
task.executeCommand.VA_VABUTTONZAMBBUW_765175 = function (entities, executeCommandEventArgs) {

    executeCommandEventArgs.commons.execServer = true;
    //executeCommandEventArgs.commons.serverParameters.EstudianteJCAM = true;
    alert(entities.EsrudianteJCAM.nombre + " " + entities.EsrudianteJCAM.apellido);

};
