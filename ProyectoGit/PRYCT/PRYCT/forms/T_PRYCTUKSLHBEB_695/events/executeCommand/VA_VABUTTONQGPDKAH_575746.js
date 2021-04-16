

//Entity: EntidadKBRR
//EntidadKBRR. (Button) View: EstudianteKBRRForm
//Evento ExecuteCommand: Permite personalizar la acción a ejecutar de un command o de un ActionControl.
task.executeCommand.VA_VABUTTONQGPDKAH_575746 = function(  entities, executeCommandEventArgs ) {

    executeCommandEventArgs.commons.execServer = true;
    const nombre = entities.EntidadKBRR.nombre;
    const apellido = entities.EntidadKBRR.apellido;
    console.log("Cliente  ->  " + nombre + " " + apellido);

};