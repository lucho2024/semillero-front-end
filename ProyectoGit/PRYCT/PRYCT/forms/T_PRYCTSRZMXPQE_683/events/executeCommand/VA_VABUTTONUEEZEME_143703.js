

//Entity: EntidadAAB
//EntidadAAB. (Button) View: EstudianteAabForm
//Evento ExecuteCommand: Permite personalizar la acción a ejecutar de un command o de un ActionControl.
task.executeCommand.VA_VABUTTONUEEZEME_143703 = function(  entities, executeCommandEventArgs ) {

    const nombre = entities.EntidadAAB.nombre
    const apellido = entities.EntidadAAB.apellido
    
    alert("Hola" + nombre + " " + apellido);
    
    executeCommandEventArgs.commons.execServer = true;
    //executeCommandEventArgs.commons.serverParameters.EntidadAAB = true;

};