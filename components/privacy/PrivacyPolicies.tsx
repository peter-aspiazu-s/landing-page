import Link from 'next/link';
import {FC} from 'react';

export const PrivacyPolicies:FC = ():JSX.Element => {
  return (
    <div className='privacy-policies'>
        <div className='privacy-policies_container'>
            <div className='privacy-policies_title'>Política de privacidad</div>
            <div className='privacy-policies_description'>Esta Política de Privacidad describe cómo Aspiazu Technology ("nosotros", "nuestro" o "sitio web") recopila, utiliza y protege la información personal que obtiene cuando los visitantes llenan y envían el formulario de contacto en nuestro sitio web https://aspiazu-technology.vercel.app/.</div>
            
            <div className='privacy-policies_title'>Recopilación de información</div>
            <div className='privacy-policies_description'>Cuando completas y envías el formulario de contacto en el Sitio, recopilamos tu nombre, dirección de correo electrónico y el mensaje que nos proporcionas. Esta información nos ayuda a responder a tus consultas y brindarte el mejor servicio posible.</div>
            
            <div className='privacy-policies_title'>Uso de la información</div>
            <div className='privacy-policies_description'>Utilizamos la información recopilada a través del formulario de contacto exclusivamente para responder a tus consultas y proporcionarte la información solicitada. No compartimos tu información personal con terceros sin tu consentimiento, a menos que sea requerido por la ley.</div>

            <div className='privacy-policies_title'>Almacenamiento y seguridad de la información</div>
            <div className='privacy-policies_description'>Mantenemos tu información personal segura y la protegemos contra el acceso no autorizado, el uso o la divulgación. Utilizamos medidas de seguridad razonables para salvaguardar tu información y asegurarnos de que se maneje de manera confidencial.</div>

            <div className='privacy-policies_title'>Retención de la información</div>
            <div className='privacy-policies_description'>Conservamos tu información personal solo durante el tiempo necesario para cumplir con los fines para los que se recopiló, a menos que la ley exija o permita un período de retención más prolongado.</div>        

            <div className='privacy-policies_title'>Enlaces a sitios externos</div>
            <div className='privacy-policies_description'>El Sitio puede contener enlaces a sitios web externos que no son operados por nosotros. No tenemos control sobre el contenido y las prácticas de privacidad de estos sitios y no nos hacemos responsables de ellos. Te recomendamos revisar las políticas de privacidad de esos sitios antes de proporcionarles tu información personal.</div>

            <div className='privacy-policies_title'>Derechos de privacidad</div>
            <div className='privacy-policies_description'>Tienes derecho a acceder, corregir o eliminar la información personal que nos has proporcionado a través del formulario de contacto. Si deseas ejercer alguno de estos derechos, contáctanos utilizando los detalles de contacto que se proporcionan al final de esta política.</div>

            <div className='privacy-policies_title'>Cambios en la política de privacidad</div>
            <div className='privacy-policies_description'>Nos reservamos el derecho de modificar esta Política de Privacidad en cualquier momento. Cualquier cambio se publicará en esta página con una fecha actualizada. Te recomendamos revisar periódicamente esta página para estar al tanto de cualquier cambio.</div>

            <div className='privacy-policies_title'>Contacto</div>
            <div className='privacy-policies_description'>Si tienes preguntas o inquietudes sobre nuestra Política de Privacidad o el manejo de tu información personal, no dudes en contactarnos a través de paspiazusabando@gmail.com.</div>

            <Link href="/">Volver</Link>
        </div>
    </div>
  )
}
