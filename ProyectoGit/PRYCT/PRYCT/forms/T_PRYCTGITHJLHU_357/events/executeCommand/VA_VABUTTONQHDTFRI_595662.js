

//Entity: PersonaAHC
//PersonaAHC. (Button) View: EstudianteAhcForm
//Evento ExecuteCommand: Permite personalizar la acción a ejecutar de un command o de un ActionControl.
task.executeCommand.VA_VABUTTONQHDTFRI_595662 = function(  entities, executeCommandEventArgs ) {

    executeCommandEventArgs.commons.execServer = true;
    //executeCommandEventArgs.commons.serverParameters.PersonaAHC = true;
    console.log("Formulario AHC Estudiante: "+entities.PersonaAHC.nombre+" "+entities.PersonaAHC.apellido);

};