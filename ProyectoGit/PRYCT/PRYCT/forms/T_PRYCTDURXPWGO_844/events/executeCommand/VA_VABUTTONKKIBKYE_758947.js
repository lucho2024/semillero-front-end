

//Entity: PersonaAHC
//PersonaAHC. (Button) View: EstudianteAhcForm
//Evento ExecuteCommand: Permite personalizar la acción a ejecutar de un command o de un ActionControl.
task.executeCommand.VA_VABUTTONKKIBKYE_758947 = function(  entities, executeCommandEventArgs ) {

    executeCommandEventArgs.commons.execServer = true;
    //executeCommandEventArgs.commons.serverParameters.PersonaAHC = true;
    console.log(entities.PersonaAHC.nombre+" "+entities.PersonaAHC.apellido);
    

};