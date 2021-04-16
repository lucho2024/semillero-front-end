

//Entity: EntidadPGG
//EntidadPGG. (Button) View: EstudiantePGGForm
//Evento ExecuteCommand: Permite personalizar la acción a ejecutar de un command o de un ActionControl.
task.executeCommand.VA_VABUTTONWGXKCYX_878871 = function(  entities, executeCommandEventArgs ) {

    executeCommandEventArgs.commons.execServer = true;
    //executeCommandEventArgs.commons.serverParameters.EntidadPGG = true;
    let nombre = entities.EntidadPGG.nombre;
    let apellido = entities.EntidadPGG.apellido;
    
    alert(nombre + " " + apellido);

};