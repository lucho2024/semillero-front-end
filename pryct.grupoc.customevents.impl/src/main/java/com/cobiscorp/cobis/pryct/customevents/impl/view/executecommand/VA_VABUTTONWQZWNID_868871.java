/*
 * Archivo: VA_VABUTTONWQZWNID_868871.java
 *
 * Esta aplicacion es parte de los paquetes bancarios propiedad de COBISCORP.
 * Su uso no autorizado queda expresamente prohibido asi como cualquier
 * alteracion o agregado hecho por alguno de sus usuarios sin el debido
 * consentimiento por escrito de COBISCORP.
 * Este programa esta protegido por la ley de derechos de autor y por las
 * convenciones internacionales de propiedad intelectual. Su uso no
 * autorizado dara derecho a COBISCORP para obtener ordenes de secuestro
 * o retencion y para perseguir penalmente a los autores de cualquier infraccion.
 */

package com.cobiscorp.cobis.pryct.customevents.impl.view.executecommand;

import org.apache.felix.scr.annotations.Component;
import org.apache.felix.scr.annotations.Properties;
import org.apache.felix.scr.annotations.Property;
import org.apache.felix.scr.annotations.Service;
import com.cobiscorp.cobis.commons.domains.log.ILogger;
import com.cobiscorp.cobis.commons.log.LogFactory;
import com.cobiscorp.cobis.pryct.model.EntidadPGG;
import com.cobiscorp.designer.api.DataEntity;
import com.cobiscorp.designer.api.DynamicRequest;
import com.cobiscorp.designer.api.customization.IExecuteCommand;
import com.cobiscorp.designer.api.customization.arguments.IExecuteCommandEventArgs;
import com.cobiscorp.designer.api.managers.DesignerManagerException;

@Component
@Service({ IExecuteCommand.class })
@Properties(value = { @Property(name = "view.id", value = "VW_PGGULOVSTV_871"),
		@Property(name = "view.version", value = "1.0.0"),
		@Property(name = "view.controlId", value = "VA_VABUTTONWQZWNID_868871") })

public class VA_VABUTTONWQZWNID_868871 implements IExecuteCommand {
	/**
	 * Instancia de Logger
	 */
	private static final ILogger logger = LogFactory.getLogger(VA_VABUTTONWQZWNID_868871.class);

	@Override
	public void executeCommand(DynamicRequest arg0, IExecuteCommandEventArgs arg1) {
		// TODO Auto-generated method stub
		try {
			if (logger.isDebugEnabled()) {
				logger.logDebug("Start executeCommand in VA_VABUTTONWQZWNID_868871");
			}
			DataEntity dataEntityPersona = arg0.getEntity(EntidadPGG.ENTITY_NAME);
			String nombre = dataEntityPersona.get(EntidadPGG.NOMBRE);
			String apellido = dataEntityPersona.get(EntidadPGG.APELLIDO);
			int edad = dataEntityPersona.get(EntidadPGG.EDAD);
			String sexo = dataEntityPersona.get(EntidadPGG.SEXO);
			logger.logDebug("Nombre: " + nombre);
			logger.logDebug("Apellido: " + apellido);
			logger.logDebug("Edad: " + edad);
			logger.logDebug("Sexo: " + sexo);
		} catch (Exception ex) {
			DesignerManagerException.handleException(arg1.getMessageManager(), ex, logger);
		}
	}

}
