

//Entity: LuisMontoya
//LuisMontoya. (Button) View: EstudianteLHMMform
//Evento ExecuteCommand: Permite personalizar la acción a ejecutar de un command o de un ActionControl.
task.executeCommand.VA_VABUTTONHDNDZNA_554698 = function(  entities, executeCommandEventArgs ) {

    executeCommandEventArgs.commons.execServer = true;
    //executeCommandEventArgs.commons.serverParameters.LuisMontoya = true;
    
    alert("Nombre : "+entities.LuisMontoya.nombre+" Apellido : "+entities.LuisMontoya.apellido);

};