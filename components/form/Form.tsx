import {ChangeEvent, FC, FormEvent, useState, RefObject, useRef} from 'react';
import Validator from 'validator';
import Swal from 'sweetalert2'

interface Props {
  targetRef: RefObject<HTMLDivElement>;
}

export const Form:FC<Props> = ({targetRef}):JSX.Element => {

  const [ formValue, setFormValue ] = useState({
    name: '',
    email: '',
    message: '',
  })

  const [messageAlert, setMessageAlert] = useState('');
  const [loading, setLoading] = useState(false);

  const {name, email, message} = formValue;

  const handleSubmit = async(e: FormEvent<HTMLFormElement>) => {
    
    e.preventDefault();

    if(!validForm()) return;

    setLoading(true)

    try {
      const response = await fetch('/api/sendEmail', {
        method: 'POST',
        body: JSON.stringify({name, email, message}),
        headers: {
          'Content-Type': 'application/json',
        }
      })

      if(response.ok){
        console.log('Correo enviado!')
        Swal.fire({
          title: 'Exito!',
          text: 'Correo enviado!',
          icon: 'success',
          confirmButtonText: 'Ok'
        })
      }else{
        console.log('Error al enviar el correo');
        Swal.fire({
          title: 'Error!',
          text: 'Error al enviar el correo',
          icon: 'error',
          confirmButtonText: 'Ok'
        })
      }
      setLoading(false)
    } catch (error) {
      console.log(error);
      setLoading(false)
    }

    setFormValue({
      ...formValue,
      name: '',
      email: '',
      message: ''
    })

  }

  const validForm = () => {

    if(name.trim().length < 2){
      setMessageAlert('El nombre debe tener mínimo 2 letras');
      return false;
    }

    if(!Validator.isEmail(email)){
      setMessageAlert('El email es incorrecto');
      return false;
    }

    if(message.trim().length < 10){
      setMessageAlert('El mensaje debe tener mínimo 10 letras');
      return false;
    }

    return true;
  }

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormValue({
      ...formValue,
      [e.target.name]: e.target.value
    })

  }

  const handleCloseAlert = () => {
    setMessageAlert('');
  }

  return (
    <div className='form' ref={targetRef}>
        <div className='form_container'>
            <div className='form_text'>Llena el formulario si deseas que me contacte contigo</div>

            <form className='form_form' onSubmit={handleSubmit}>
                <input 
                  className='form_input' 
                  type="text" 
                  placeholder='Nombre'
                  name='name' 
                  value={name}
                  onChange={handleChange}
                  onClick={handleCloseAlert}
                />
                {
                  messageAlert === 'El nombre debe tener mínimo 2 letras' &&
                  <div className='form_message-aler animate__animated animate__fadeIn'>{messageAlert}</div>
                }
                
                <input 
                  className='form_input' 
                  type="email" 
                  placeholder='Correo' 
                  name='email' 
                  value={email}
                  onChange={handleChange}
                  onClick={handleCloseAlert}
                />
                {
                  messageAlert === 'El email es incorrecto' &&
                  <div className='form_message-aler animate__animated animate__fadeIn'>{messageAlert}</div>
                }

                <textarea 
                  className='form_textarea' 
                  rows={5} 
                  placeholder='Tu mensaje'
                  name='message' 
                  value={message}
                  onChange={handleChange}
                  onClick={handleCloseAlert}
                ></textarea>
                {
                  messageAlert === 'El mensaje debe tener mínimo 10 letras' &&
                  <div className='form_message-aler animate__animated animate__fadeIn'>{messageAlert}</div>
                }

                {
                  loading 
                  ? <div className="lds-ring"><div></div><div></div><div></div><div></div></div>
                  : <button className='form_button'>Enviar</button>
                }
            </form>
        </div>
    </div>
  )
}
